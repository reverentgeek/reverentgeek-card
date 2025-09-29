# ReverentGeek Calling Card

In case you ever need my information and all you have is a terminal and `npm`.

## Usage

```bash
npx reverentgeek
```

## Make It Yours

Clone this repo (or create a new one) and adjust the profile and art assets to build your own terminal calling card:

- Edit `config/profile.js` with your name, biography, and contact links. Each entry in `infoSections` can be a string or an array if you want multiple lines under one label.
- Update colors or gradients by tweaking `bin/colors.js`, then reference any new styles by name from the profile file.
- Swap ASCII art by editing the files under `art/` or adding new modules and registering them in `art/index.js`. The `artOrder` export in `config/profile.js` controls the render sequence.
- Run `node bin/card.js` to preview the box output locally before publishing.

## Credit

Completely *borrowed* this idea from [Tierney](https://github.com/bnb/bitandbang) :)
