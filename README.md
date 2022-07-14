# kdu-webpack-boilerplate

> A full-featured Webpack setup with hot-reload, lint-on-save, unit testing & css extraction.

> This template is Kdu 2.0 compatible. For Kdu 1.x use this command: `kdu init webpack#1.0 my-project`

## Documentation

- [For this template](http://kdujs-templates.github.io/webpack): common questions specific to this template are answered and each part is described in greater detail
- [For Kdu 2.0](http://kdujs.org/guide/): general information about how to work with Kdu, not specific to this template

## Usage

This is a project template for [kdu-cli](https://github.com/kdujs/kdu-cli). **It is recommended to use npm 3+ for a more efficient dependency tree.**

``` bash
$ npm install -g kdu-cli
$ kdu init webpack my-project
$ cd my-project
$ npm install
$ npm run dev
```

This will scaffold the project using the `master` branch. If you wish to use the latest version of the webpack template, do the following instead:

``` bash
$ kdu init webpack#develop my-project
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

- `npm run unit`: Unit tests run in [JSDOM](https://github.com/tmpvar/jsdom) with [Jest](https://facebook.github.io/jest/), or in PhantomJS with Karma + Mocha + karma-webpack.
  - Supports ES2015+ in test files.
  - Easy mocking.

- `npm run e2e`: End-to-end tests with [Nightwatch](http://nightwatchjs.org/).
  - Run tests in multiple browsers in parallel.
  - Works with one command out of the box:
    - Selenium and chromedriver dependencies automatically handled.
    - Automatically spawns the Selenium server.

### Fork It And Make Your Own

You can fork this repo to create your own boilerplate, and use it with `kdu-cli`:

``` bash
kdu init username/repo my-project
```
