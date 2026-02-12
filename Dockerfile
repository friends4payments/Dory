# ==============================================================================
# Dory AI — Production Dockerfile
#
# Builds the entire monorepo into a single image. Each service is run by
# setting a different `command` and `working_dir` in docker-compose.prod.yml.
# ==============================================================================

FROM node:20-slim

# ---------------------------------------------------------------------------
# System dependencies
#   - openssl: required by Prisma query engine
#   - ca-certificates: HTTPS requests to external APIs
#   - libglib2.0-0: required by @livekit/rtc-node native bindings
# ---------------------------------------------------------------------------
RUN apt-get update && \
    apt-get install -y --no-install-recommends \
      openssl \
      ca-certificates \
      libglib2.0-0 && \
    rm -rf /var/lib/apt/lists/*

# Enable pnpm via corepack (matches packageManager in package.json)
RUN corepack enable && corepack prepare pnpm@8.15.0 --activate

WORKDIR /app

# ---------------------------------------------------------------------------
# Layer 1: Install dependencies (cached unless package.json/lockfile change)
# ---------------------------------------------------------------------------

# Copy only the files needed for dependency resolution
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json turbo.json .npmrc ./

# Package manifests for each workspace member
COPY packages/shared/package.json packages/shared/
COPY services/game-agent/package.json services/game-agent/
COPY services/voice-agent/package.json services/voice-agent/
COPY services/gatekeeper-agent/package.json services/gatekeeper-agent/
COPY services/persona-builder-agent/package.json services/persona-builder-agent/
COPY apps/web/package.json apps/web/

# Prisma schema (needed during install for postinstall generate)
COPY services/persona-builder-agent/prisma/ services/persona-builder-agent/prisma/

# Postinstall scripts (LiveKit stdio patch)
COPY scripts/ scripts/

# Install all dependencies (frozen = fail if lockfile is out of date)
RUN pnpm install --frozen-lockfile

# ---------------------------------------------------------------------------
# Layer 2: Copy source and build everything
# ---------------------------------------------------------------------------

COPY . .

# Accept NEXT_PUBLIC_* as build args — these get baked into the Next.js bundle
ARG NEXT_PUBLIC_GATEKEEPER_WS_URL
ARG NEXT_PUBLIC_PERSONA_WS_URL
ARG NEXT_PUBLIC_VOICE_AGENT_WS_URL
ARG NEXT_PUBLIC_VOICE_AGENT_API_URL
ARG NEXT_PUBLIC_LIVEKIT_URL

# Disable incremental/composite in base tsconfig for clean Docker builds
# (these features rely on .tsbuildinfo cache files that don't exist in Docker)
RUN sed -i 's/"incremental": true/"incremental": false/' tsconfig.base.json && \
    sed -i 's/"composite": true/"composite": false/' tsconfig.base.json

# Build everything via Turborepo
RUN pnpm build

# Copy non-TS assets that tsc doesn't include in dist/
RUN cp services/game-agent/src/builder/prompts.json services/game-agent/dist/builder/prompts.json && \
    cp services/game-agent/src/builder/block-id-list.txt services/game-agent/dist/builder/block-id-list.txt

# ---------------------------------------------------------------------------
# Runtime environment defaults
# ---------------------------------------------------------------------------

# Voice agent: prevent ONNX thread contention in containers
ENV ORT_NUM_THREADS=1
ENV OMP_NUM_THREADS=1

# Default NODE_ENV
ENV NODE_ENV=production

# No default CMD — docker-compose.prod.yml sets per-service commands
