#!/usr/bin/env bash
# ==============================================================================
# Dory AI — Build & Start (run from ~/Dory)
#
# Usage:
#   ./deploy/start.sh              # auto-detects external IP
#   ./deploy/start.sh 34.56.78.90  # explicit IP
# ==============================================================================

set -euo pipefail

cd "$(dirname "$0")/.."

# ── Resolve external IP ────────────────────────────────────────────────────
if [ -n "${1:-}" ]; then
  DEPLOY_URL="$1"
else
  echo "Detecting external IP..."
  DEPLOY_URL=$(curl -s https://ifconfig.me || curl -s https://api.ipify.org || echo "localhost")
fi

echo "=============================================="
echo "  Dory AI — Deploy"
echo "  URL: http://${DEPLOY_URL}"
echo "=============================================="

# ── Check .env.production exists ───────────────────────────────────────────
if [ ! -f .env.production ]; then
  echo "ERROR: .env.production not found!"
  echo "Copy it from your local machine first:"
  echo "  scp .env.production <user>@<vm-ip>:~/Dory/.env.production"
  exit 1
fi

# ── Update DEPLOY_URL in .env.production ───────────────────────────────────
if grep -q "^DEPLOY_URL=" .env.production; then
  sed -i "s|^DEPLOY_URL=.*|DEPLOY_URL=${DEPLOY_URL}|" .env.production
else
  echo "DEPLOY_URL=${DEPLOY_URL}" >> .env.production
fi

export DEPLOY_URL

# ── Build & Start ──────────────────────────────────────────────────────────
echo ""
echo "Building Docker image (this takes a few minutes the first time)..."
docker compose -f docker-compose.prod.yml build

echo ""
echo "Starting all services..."
docker compose -f docker-compose.prod.yml up -d

echo ""
echo "=============================================="
echo "  All services started!"
echo "=============================================="
echo ""
echo "  Web App:     http://${DEPLOY_URL}/"
echo "  Dev Tools:   http://${DEPLOY_URL}/tools/"
echo "  Game API:    http://${DEPLOY_URL}/game/health"
echo "  Voice API:   http://${DEPLOY_URL}/voice/health"
echo ""
echo "  Logs:        docker compose -f docker-compose.prod.yml logs -f"
echo "  Stop:        docker compose -f docker-compose.prod.yml down"
echo ""
