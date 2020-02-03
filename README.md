# React Typescript NPM starter

Starter for creating NPM packages with TypeScript. Uses Yarn Workspaces to handle local development without conflicting dependencies.

## Features

- React 16.8+
- TypeScript 3.5+
- Rollup bundler for package
- Parcel bundler for demo
- Jest and Enzyme for tests

#

## How to

### Run and build module

Start in watchmode:

```bash
yarn workspace package start
```

To bundle your package:

```bash
yarn workspace package build
```

### Run demo

```bash
yarn workspace demo start
```

### Publish to NPM

Inside the package folder run:

```bash
npm publish
```
