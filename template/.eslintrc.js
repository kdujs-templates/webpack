// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint'
  },
  env: {
    browser: true,
  },
  {{#if_eq lintConfig "standard"}}
  extends: [
    // https://github.com/kdujs/eslint-plugin-kdu#priority-a-essential-error-prevention
    // consider switching to `plugin:kdu/strongly-recommended` or `plugin:kdu/recommended` for stricter rules.
    'plugin:kdu/essential',
    // https://github.com/standard/standard/blob/master/docs/RULES-en.md
    'standard'
  ],
  {{/if_eq}}
  {{#if_eq lintConfig "airbnb"}}
  // https://github.com/kdujs/eslint-plugin-kdu#priority-a-essential-error-prevention
  // consider switching to `plugin:kdu/strongly-recommended` or `plugin:kdu/recommended` for stricter rules.
  extends: ['plugin:kdu/essential', 'airbnb-base'],
  {{/if_eq}}
  {{#if_eq lintConfig "none"}}
  // https://github.com/kdujs/eslint-plugin-kdu#priority-a-essential-error-prevention
  // consider switching to `plugin:kdu/strongly-recommended` or `plugin:kdu/recommended` for stricter rules.
  extends: ['plugin:kdu/essential'],
  {{/if_eq}}
  // required to lint *.kdu files
  plugins: [
    'kdu'
  ],
  {{#if_eq lintConfig "airbnb"}}
  // check if imports actually resolve
  settings: {
    'import/resolver': {
      webpack: {
        config: 'build/webpack.base.conf.js'
      }
    }
  },
  {{/if_eq}}
  // add your custom rules here
  rules: {
    {{#if_eq lintConfig "standard"}}
    // allow async-await
    'generator-star-spacing': 'off',
    {{/if_eq}}
    {{#if_eq lintConfig "airbnb"}}
    // don't require .kdu extension when importing
    'import/extensions': ['error', 'always', {
      js: 'never',
      kdu: 'never'
    }],
    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': ['error', {
      props: true,
      ignorePropertyModificationsFor: [
        'state', // for kdux state
        'acc', // for reduce accumulators
        'e' // for e.returnvalue
      ]
    }],
    // allow optionalDependencies
    'import/no-extraneous-dependencies': ['error', {
      optionalDependencies: ['test/unit/index.js']
    }],
    {{/if_eq}}
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
  }
}
