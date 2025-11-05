# LaunchPad Labs

>A small marketing / agency-style React + Vite + TypeScript starter project built with Tailwind CSS. This repository contains the front-end UI and components for the LaunchPad Labs site.

Figma design (source): https://www.figma.com/design/sAzopLV7aQhA6w72YcXmST/Untitled?node-id=1-2063&t=f7mpzEHI1aXvTOiq-0

## Quick overview

- Framework: React (TypeScript)
- Bundler / dev server: Vite
- Styling: Tailwind CSS + PostCSS
- Linting: ESLint

This project is a small component-driven site. The `src/` directory contains React components and pages used by the app.

## Project structure

- `src/` - application source (components, pages, styles)
  - `components/` - UI sections (Navbar, Hero, Footer, etc.)
  - `pages/` - top-level pages (Home)
  - `ui/` - small presentational components and UI atoms
- `public/` - static assets
- `index.html` - Vite entry
- `vite.config.ts`, `tsconfig.*` - build and TypeScript config
- `package.json` - scripts & dependencies

## Prerequisites

- Node.js (recommended: 18.x or newer)
- npm (or Yarn / pnpm)

## Install

Open a terminal in the project root and run:

```powershell
npm install
```

This installs dependencies listed in `package.json`.

## Available scripts

The project exposes the following npm scripts (from `package.json`):

- `npm run dev` - start the Vite development server
- `npm run build` - build production assets (runs TypeScript build then `vite build`)
- `npm run preview` - locally preview the production build (`vite preview`)
- `npm run lint` - run ESLint across the project

Example (start dev server):

```powershell
npm run dev
```

The dev server will start and show a local URL (typically `http://localhost:5173`) to open in your browser.

## Tailwind / Styling

Tailwind is configured via `tailwind.config.js` and PostCSS is configured in `postcss.config.js`. Styles live in `src/index.css` / `src/App.css` and component-scoped CSS files under `src/components/`.

## Design

The UI and visual spec were created in Figma. See the design source linked at the top of this README to review frames, components, spacing, and colors.

## Notes for contributors

- Keep UI components small and focused in `src/components/` and `src/ui/`.
- Run `npm run lint` before opening a pull request.
- If adding new dependencies, prefer lightweight, well-maintained packages.

## Next steps / small improvements you might add

- Add unit or integration tests (Jest, React Testing Library).
- Add CI to run lint + build on PRs.
- Add accessibility checks and performance audits.

## License

This repository currently has no license file. Add a `LICENSE` file if you want to set the project's license.

---

If you'd like, I can also:

- Add a small README screenshot / preview section (take a screenshot of dev server).
- Create a CONTRIBUTING.md with branch/PR guidelines.
- Add a `LICENSE` file (choose one).

If you'd like any of those, tell me which and I'll add them.
