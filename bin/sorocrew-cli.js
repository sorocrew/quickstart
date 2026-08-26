#!/usr/bin/env node

const { execSync } = require('child_process');
const http = require('http');

const command = process.argv[2] || 'help';

console.log('[SoroCrew CLI v0.1.0] — Local Soroban Orchestrator\n');

function isDockerAvailable() {
  try {
    execSync('docker --version', { stdio: 'ignore' });
    return true;
  } catch (e) {
    return false;
  }
}

if (command === 'status') {
  if (!isDockerAvailable()) {
    console.log('Error: Docker is not installed on this system.');
    console.log('Install Docker from https://docs.docker.com/get-docker/ to run local standalone node.');
    console.log('Note: SoroCrew Studio can also connect directly to Testnet & Futurenet without Docker.\n');
  }

  const req = http.get('http://localhost:8000/health', (res) => {
    if (res.statusCode === 200) {
      console.log('Local Standalone Docker Instance is RUNNING on port 8000.');
      console.log('RPC: http://localhost:8000/soroban/rpc');
    } else {
      console.log(`Docker Instance returned HTTP status ${res.statusCode}.`);
    }
  });

  req.on('error', () => {
    console.log('Local Standalone Docker Instance is OFF. Run "npm start" to launch when Docker is installed.');
  });
} else if (command === 'fund') {
  const pubKey = process.argv[3];
  if (!pubKey) {
    console.error('Error: Please provide a public key. Example: sorocrew fund GAAA...');
    process.exit(1);
  }

  console.log(`Funding ${pubKey} via Friendbot...`);
  http.get(`http://localhost:8000/friendbot?addr=${encodeURIComponent(pubKey)}`, (res) => {
    if (res.statusCode === 200) {
      console.log('Successfully funded test account with 10,000 test XLM.');
    } else {
      console.log(`Friendbot error: HTTP ${res.statusCode}`);
    }
  });
} else {
  console.log('Usage:');
  console.log('  sorocrew status      - Check local standalone node health');
  console.log('  sorocrew fund <addr> - Fund a test keypair on local network via Friendbot');
}
