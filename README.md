# EZZI World (Deploy-ready)

This is a deploy-ready Next.js (App Router) monorepo with a Canvas runtime and Vercel KV persistence.

## Local dev

```bash
pnpm install
pnpm dev
```

> Without Vercel KV, APIs fall back to in-memory storage (local only).

## Deploy to Vercel

This repo includes a root `vercel.json` so you can deploy from the repository root.

1) Create a new Vercel project pointing to the repository root.
2) In Vercel → Storage → connect a KV instance (recommended).
3) Add environment variables (recommended):
   - `ADMIN_KEY` — protects `/admin` (config dashboard)
   - `NEXT_PUBLIC_SOLANA_RPC` — optional custom Solana RPC
4) Deploy.

## Key routes

- `/` — Ultra-AAA Web3 landing (conversion system)
- `/play` — Canvas runtime
- `/marketplace` — Marketplace UI
- `/leaderboard` — Leaderboard
- `/buy` — Token buy flow (intent-based)
- `/capsules` — Capsule mint (intent-based)
- `/characters` — Character mint (intent-based)
- `/affiliate` — Referral system UI
- `/account` — Portfolio + perks
- `/admin` — Config toggles (buy-only, caps, phases)

## Key APIs

- `GET/POST /api/config` — Sale config (KV-driven)
- `GET /api/events/recent` — Activity feed
- `GET/POST /api/player/state` — Persist session
- `POST /api/player/bind-wallet` — Bind wallet to player
- `GET /api/player/profile` — Wallet-linked profile + perks
- `POST /api/token/buy` — Token buy intent + counters
- `POST /api/mint/capsule` — Capsule mint intent
- `POST /api/mint/character` — Character mint intent
- `POST /api/runs/submit` — Runs submit (seed + digest)
- `GET/POST /api/leaderboard` — Leaderboard
- `GET/POST /api/market/listings` — List + create listings
- `POST /api/market/buy` — Atomic market buy via KV
