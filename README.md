# @sorocrew/quickstart

![SoroCrew Logo](./crew-logo-white.svg)

> **Local Soroban Standalone Docker Orchestrator & CLI Tooling** for SoroCrew Studio testing.

This repository provides automated Docker Compose scripts to launch a local standalone Stellar & Soroban network container (`stellar/quickstart:testing`) with pre-configured Horizon REST and Soroban RPC endpoints on port 8000.

---

## Quick Start

### 1. Launch Local Docker Instance

```bash
npm start
# or
bash scripts/start-local.sh
```

### 2. Check Node Health

```bash
npx sorocrew status
```

### 3. Fund a Test Account via Friendbot

```bash
npx sorocrew fund GAAAAAAAAAAA...
```

---

## Endpoints Overview

| Service | Local URL |
| :--- | :--- |
| **Horizon REST** | `http://localhost:8000` |
| **Soroban RPC** | `http://localhost:8000/soroban/rpc` |
| **Friendbot Faucet** | `http://localhost:8000/friendbot` |
| **Passphrase** | `Standalone Network ; February 2017` |

---

## Community & Support

* **Telegram Community:** [https://t.me/sorocrew](https://t.me/sorocrew)
* **GitHub Organization:** [https://github.com/sorocrew](https://github.com/sorocrew)

---

## Contributing

All pull requests should target the `dev` branch. See [CONTRIBUTING.md](./CONTRIBUTING.md) for full guidelines and [DEVELOPMENT.md](./DEVELOPMENT.md) for local setup.

---

## License

MIT © [SoroCrew](https://github.com/sorocrew)
