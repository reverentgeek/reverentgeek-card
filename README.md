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
- Run `npm run lint` for style checks and `node bin/card.js` to preview the box output locally before publishing.

Want to publish it so others can view it with `npx`?

- Update `package.json` and change the name, version, and other fields to make it yours.
- Push your code to a new public repository.
- [Sign up for an npm account](https://www.npmjs.com/signup), if you don't have one.
- Authenticate with `npm login`.
- Publish your package using `npm publish` from the project root.

For more info, check out the [official npm publish guide](https://docs.npmjs.com/cli/v11/commands/npm-publish).

## Credit

Completely *borrowed* this idea from [Tierney](https://github.com/bnb/bitandbang) :)
