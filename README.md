# React-Typescript NPM starter

Starter for creating NPM modules with TypeScript. Uses Yarn workspaces which will help you import and demo your module locally without conflicting dependencies. Yarn will create a symlink for your module in the demo project dependencies, so it can be referenced inside your `package.json` and imported just like any other module.

## Features

- React 16.8+
- TypeScript 3.5+
- Parcel bundler for demo
- Jest and Enzyme for tests

#

## How to

### Run and build module

Start in watchmode:

```bash
yarn workspace example-module start
```

To compile your TS files:

```bash
yarn workspace example-module build
```

### Run demo

```bash
yarn workspace demo start
```

### Publish to NPM

Inside the module folder, run:

```bash
npm publish
```

### Make it your own

Wherever you have `example-module`, just rename that to whatever your module name is.

#
