# deonPortfolio

A personal portfolio website for Deon Menezes, built with Next.js 14 and featuring animated transitions. The actual app lives inside the `my-app/` subdirectory.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Animation:** Framer Motion
- **Database ORM:** Mongoose (MongoDB)
- **Styling:** Tailwind CSS
- **Package Manager:** yarn

## Setup

```bash
cd my-app
yarn install
# or
npm install
```

## Build / Run / Test

```bash
# Development server
yarn dev
# or
npm run dev

# Production build
yarn build

# Start production server
yarn start

# Lint
yarn lint
```

## Project Structure

```
my-app/               # Main application root
  src/
    app/              # Next.js App Router pages and layouts
  public/             # Static assets
  next.config.mjs     # Next.js configuration
  tailwind.config.ts  # Tailwind CSS configuration
  tsconfig.json       # TypeScript configuration
```

## Architecture & Key Files

- Entry point: `my-app/src/app/page.tsx`
- All commands must be run from inside the `my-app/` subdirectory, not the repo root.
- Framer Motion is used for page transitions and component animations.
- Mongoose is included for potential MongoDB data fetching (contact form, etc.).

## Conventions & Notes for Agents

- The repo root contains only `my-app/`, `node_modules/`, and a `README.md` — all app code is under `my-app/`.
- No test suite is present.
- Portfolio content (bio, projects, skills) is likely hardcoded in page components rather than fetched from a CMS.
