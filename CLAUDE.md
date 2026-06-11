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

## Architecture

### Core Components

- **bin/card.js**: Executable entry point that prints the rendered card
- **bin/build-card.js**: Assembles the card string (art, heading, info, bio) and wraps it in boxen; kept separate from `card.js` so it can be unit-tested without side effects
- **config/profile.js**: Contains all personal information, contact links, and art rendering order
- **bin/colors.js**: Defines color palette and gradient configurations using chalk and gradient-string
- **bin/text.js**: Text utilities for centering and wrapping text within specified widths
- **bin/render-info.js**: Handles formatting of info sections with labels and values
- **art/**: Directory containing ASCII art modules (avatar, banner, etc.)

### Data Flow

1. **card.js** imports profile data and art assets
2. Applies color styling to profile sections using colors defined in **colors.js**
3. Uses **text.js** utilities to format bio text and center headings
4. Uses **render-info.js** to format contact information sections
5. Loads and applies gradients to ASCII art from **art/** directory
6. Combines all elements and renders in a boxen-styled terminal box

### Customization Points

- **Profile data**: Edit `config/profile.js` to change name, bio, contact info, and art order
- **Colors/gradients**: Modify `bin/colors.js` for different color schemes
- **ASCII art**: Add new art files in `art/` directory and register in `art/index.js`
- **Styling**: Each info section supports style properties (orange, gradient, lightBlue, yellow)

### Key Patterns

- Profile sections can have string or array values for multi-line entries
- Art assets are loaded dynamically based on `artOrder` array in profile config
- Color styling is applied through a centralized `styleValue` function
- Text wrapping respects the horizontal rule width for consistent formatting