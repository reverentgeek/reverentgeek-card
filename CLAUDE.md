# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a terminal calling card application built with Node.js that displays formatted personal information in a terminal box. Users run `npx reverentgeek` to see the author's contact info and bio in an ASCII art-styled terminal card.

## Commands

- **Development preview**: `node bin/card.js` - Run the card locally to preview output
- **Linting**: `npm run lint` - Run ESLint on all JavaScript files in bin/, art/, config/, and test/ directories
- **Testing**: `npm test` - Run the test suite with Node's built-in test runner
- **Coverage**: `npm run test:coverage` - Run tests and enforce 100% line/branch/function coverage
- **Installation**: Users install/run via `npx reverentgeek`

## Git Hooks

A pre-commit hook in `.githooks/pre-commit` runs `node --test` and blocks the commit if any test fails. The hook is activated via `core.hooksPath`, which the `prepare` script sets automatically on `npm install`/`pnpm install`. To bypass it in an emergency, commit with `--no-verify`.

## Architecture notes

`bin/build-card.js` assembles the card string and is deliberately kept separate from `bin/card.js` (the executable entry point) so it can be unit-tested without printing as a side effect. Everything else — profile data, colors, art registration — is wired through `config/profile.js` and `art/index.js`.