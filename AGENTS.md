# Repository Guidelines

## Project Structure & Module Organization
The CLI entry point lives in `bin/card.js` and is exposed as the `reverentgeek` command via `npx reverentgeek`. Shared color definitions, layout, and output sequencing are centralized there. ASCII art assets are kept lightweight in `art/avatar.js` and `art/banner.js`; update them independently to keep revisions reviewable. Root-level configuration such as `package.json` and `eslint.config.js` holds publishing metadata, lint rules, and script aliases. There is no generated code folder—commit only handwritten JavaScript.

## Build, Test, and Development Commands
Install dependencies with `npm install` (or `pnpm install` if you prefer pnpm). Run `npm run lint` to apply the repository ESLint profile across `bin/*.js` and `art/*.js`. During manual checks, execute `node bin/card.js` to preview the card locally, or `npx .` to simulate the published package without installing it globally.

## Coding Style & Naming Conventions
This project uses modern ESM syntax (`import`/`export`) and relies on `eslint-config-reverentgeek` for formatting and best practices. Keep indentation with tabs, match existing string quoting, and favor `const` or `let` over `var`. When introducing new art modules or helpers, place them under `art/` or `bin/` with descriptive lowercase-hyphen filenames (e.g., `bin/palette-utils.js`). Maintain color definitions and gradients in dedicated objects so the rendering logic remains declarative.

## Testing Guidelines
There is no automated test suite today. Before opening a PR, run `npm run lint` and execute `node bin/card.js` to confirm the output renders without ANSI errors. Validate spacing and color choices in a terminal that supports truecolor, and capture a screenshot or paste output snippets in the PR if you alter visual elements. If you add automated checks, colocate them with the feature and document the new command.

## Commit & Pull Request Guidelines
Existing commits favor short, present-tense summaries such as `updates dependencies`. Follow that style: a single concise line describing what changes, optionally followed by wrapped details. PRs should explain the intent, call out impacted modules (`bin/card.js`, `art/banner.js`, etc.), and mention manual verification steps taken. Link issues when applicable and include visuals whenever you change the rendered card.
