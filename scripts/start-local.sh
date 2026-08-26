#!/usr/bin/env bash
set -e

echo "🚀 [SoroCrew] Starting Local Standalone Soroban Docker Container..."
docker compose up -d

echo "⏳ Waiting for local Horizon & Soroban RPC healthcheck at http://localhost:8000 ..."
until curl -s http://localhost:8000/health > /dev/null; do
  sleep 2
  echo -n "."
done

echo ""
echo "✅ Local Soroban Standalone Network is READY!"
echo "--------------------------------------------------------"
echo "  Horizon REST Endpoint: http://localhost:8000"
echo "  Soroban RPC Endpoint: http://localhost:8000/soroban/rpc"
echo "  Friendbot Faucet:     http://localhost:8000/friendbot"
echo "  Network Passphrase:   'Standalone Network ; February 2017'"
echo "--------------------------------------------------------"
