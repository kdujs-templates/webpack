# Pre-Processors

This boilerplate has pre-configured CSS extraction for most popular CSS pre-processors including LESS, SASS, Stylus, and PostCSS. To use a pre-processor, all you need to do is install the appropriate webpack loader for it. For example, to use SASS:

``` bash
npm install sass-loader node-sass --save-dev
```

Note you also need to install `node-sass` because `sass-loader` depends on it as a peer dependency.

### Using Pre-Processors inside Components

Once installed, you can use the pre-processors inside your `*.kdu` components using the `lang` attribute on `<style>` tags:

``` html
<style lang="scss">
/* write SASS! */
</style>
```

### A note on SASS syntax

- `lang="scss"` corresponds to the CSS-superset syntax (with curly braces and semicolons).
- `lang="sass"` corresponds to the indentation-based syntax.

### PostCSS

Styles in `*.kdu` files and style files (`*.css`, `*.scss` etc) are piped through PostCSS by default, so you don't need to use a specific loader for it.

You can simply add PostCSS plugins you want to use to the `.postcssrc.js`file in your project's root directory:

``` js
// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "postcss-import": {},
    "autoprefixer": {}
  }
}
```

See [kdu-loader's related documentation](http://kdujs.github.io/kdu-loader/en/features/postcss.html) for more details.

### Standalone CSS Files

To ensure consistent extraction and processing, it is recommended to import global, standalone style files from your root `App.kdu` component, for example:

``` html
<!-- App.kdu -->
<style src="./styles/global.less" lang="less"></style>
```

Note you should probably only do this for the styles written by yourself for your application. For existing libraries e.g. Bootstrap or Semantic UI, you can place them inside `/static` and reference them directly in `index.html`. This avoids extra build time and also is better for browser caching. (See [Static Asset Handling](static.md))
