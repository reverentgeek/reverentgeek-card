# Repository Guidelines

## Project Structure & Module Organization
The CLI entry point remains `bin/card.js`, now focused on orchestration: it imports palette helpers (`bin/colors.js`), layout formatters (`bin/render-info.js`, `bin/text.js`), and profile data in `config/profile.js`. Adjust CLI content by editing the profile file; the renderer already handles centered headings, wrapped bios, and multi-line values. ASCII art lives in `art/` and is addressed through `art/index.js`, keeping individual assets (`avatar.js`, `banner.js`) easy to swap. Root-level configs (`package.json`, `eslint.config.js`) continue to hold metadata, lint rules, and script aliases.

## Build, Test, and Development Commands
Install dependencies with `npm install` (or `pnpm install` if you prefer pnpm). Run `npm run lint` to apply the repository ESLint profile across `bin/*.js` and `art/*.js`. During manual checks, execute `node bin/card.js` to preview the card locally, or `npx .` to simulate the published package without installing it globally.

## Coding Style & Naming Conventions
We use modern ESM everywhere. Keep indentation as tabs, match the existing double-quote style, and favor `const`. New helpers should sit with their peers (`bin/` for runtime logic, `config/` for data). If you extend value styling, add the formatter in `bin/colors.js` and reference it by name in `config/profile.js`. When profile entries need multiple lines, prefer arrays (`value: ["Role", "URL"]`) instead of embedding `\n`.

## Testing Guidelines
There is no automated test suite today. Before opening a PR, run `npm run lint` and execute `node bin/card.js` to confirm the output renders without ANSI errors. Validate spacing and color choices in a terminal that supports truecolor, and capture a screenshot or paste output snippets in the PR if you alter visual elements. If you add automated checks, colocate them with the feature and document the new command.

## Commit & Pull Request Guidelines
Existing commits favor short, present-tense summaries such as `updates dependencies`. Follow that style: a single concise line describing what changes, optionally followed by wrapped details. PRs should explain the intent, call out impacted modules (`bin/card.js`, `art/banner.js`, etc.), and mention manual verification steps taken. Link issues when applicable and include visuals whenever you change the rendered card.
