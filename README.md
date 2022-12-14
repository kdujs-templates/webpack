# kdu-webpack-boilerplate

> A full-featured Webpack setup with hot-reload & css extraction.

## Documentation

- [For Kdu 2.0](http://kdujs-v2.web.app/guide/): general information about how to work with Kdu, not specific to this template

## Usage

This is a project template for [kdu-cli](https://github.com/kdujs/kdu-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g kdu-cli
$ kdu init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

:warning: **The develop branch is not considered stable and can contain bugs or not build at all, so use at your own risk.**

The development server will run on port 8080 by default. If that port is already in use on your machine, the next free port will be used.

## What's Included

- `npm run dev`: first-in-class development experience.
  - Webpack + `kdu-loader` for single file Kdu components.
  - State preserving hot-reload
  - State preserving compilation error overlay
  - Lint-on-save with ESLint
  - Source maps

- `npm run build`: Production ready build.
  - JavaScript minified with [UglifyJS v3](https://github.com/mishoo/UglifyJS2/tree/harmony).
  - HTML minified with [html-minifier](https://github.com/kangax/html-minifier).
  - CSS across all components extracted into a single file and minified with [cssnano](https://github.com/ben-eb/cssnano).
  - Static assets compiled with version hashes for efficient long-term caching, and an auto-generated production `index.html` with proper URLs to these generated assets.
  - Use `npm run build --report`to build with bundle size analytics.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `kdu-cli`:

``` bash
kdu init username/repo my-project
```
