#!/usr/bin/env bash
# ==============================================================================
# Dory AI — GCE VM Setup Script
#
# Run this ONCE on a fresh Ubuntu 22.04+ VM:
#   curl -fsSL https://raw.githubusercontent.com/friends4payments/Dory/main/deploy/setup.sh | bash
#   — or —
#   bash setup.sh
# ==============================================================================

set -euo pipefail

echo "=============================================="
echo "  Dory AI — Server Setup"
echo "=============================================="

# ── 1. Install Docker ──────────────────────────────────────────────────────
if ! command -v docker &>/dev/null; then
  echo "[1/4] Installing Docker..."
  sudo apt-get update -y
  sudo apt-get install -y ca-certificates curl gnupg
  sudo install -m 0755 -d /etc/apt/keyrings
  curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg
  sudo chmod a+r /etc/apt/keyrings/docker.gpg
  echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] \
    https://download.docker.com/linux/ubuntu $(. /etc/os-release && echo "$VERSION_CODENAME") stable" | \
    sudo tee /etc/apt/sources.list.d/docker.list > /dev/null
  sudo apt-get update -y
  sudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin
  sudo usermod -aG docker "$USER"
  echo "  Docker installed. You may need to log out and back in for group changes."
else
  echo "[1/4] Docker already installed — skipping."
fi

# ── 2. Install Git ─────────────────────────────────────────────────────────
if ! command -v git &>/dev/null; then
  echo "[2/4] Installing Git..."
  sudo apt-get install -y git
else
  echo "[2/4] Git already installed — skipping."
fi

# ── 3. Clone the repo ─────────────────────────────────────────────────────
REPO_DIR="$HOME/Dory"
if [ ! -d "$REPO_DIR" ]; then
  echo "[3/4] Cloning Dory repository..."
  echo "  You'll need a GitHub personal access token (PAT) for private repos."
  read -rp "  GitHub username: " GH_USER
  read -rsp "  GitHub PAT: " GH_TOKEN
  echo ""
  git clone "https://${GH_USER}:${GH_TOKEN}@github.com/friends4payments/Dory.git" "$REPO_DIR"
else
  echo "[3/4] Repo already cloned at $REPO_DIR — pulling latest..."
  cd "$REPO_DIR" && git pull
fi

cd "$REPO_DIR"

# ── 4. Create .env.production ──────────────────────────────────────────────
if [ ! -f .env.production ]; then
  echo "[4/4] Creating .env.production..."
  echo "  You need to paste your .env.production contents."
  echo "  Open a new terminal, copy the file from your local machine:"
  echo ""
  echo "    scp .env.production <user>@<vm-ip>:~/Dory/.env.production"
  echo ""
  echo "  Or create it manually:  nano ~/Dory/.env.production"
  echo ""
  read -rp "  Press ENTER once .env.production is in place..."
else
  echo "[4/4] .env.production already exists — skipping."
fi

echo ""
echo "=============================================="
echo "  Setup complete!"
echo "=============================================="
echo ""
echo "  Next steps:"
echo "    1. Make sure .env.production is at ~/Dory/.env.production"
echo "    2. Set DEPLOY_URL to this VM's external IP:"
echo "       export DEPLOY_URL=<YOUR_EXTERNAL_IP>"
echo "    3. Build and start:"
echo "       cd ~/Dory"
echo "       docker compose -f docker-compose.prod.yml build"
echo "       DEPLOY_URL=\$DEPLOY_URL docker compose -f docker-compose.prod.yml up -d"
echo ""
echo "  Useful commands:"
echo "    Logs:     docker compose -f docker-compose.prod.yml logs -f"
echo "    Stop:     docker compose -f docker-compose.prod.yml down"
echo "    Restart:  docker compose -f docker-compose.prod.yml restart"
echo ""
