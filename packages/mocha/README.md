# `@cnsjs/eslint-config-mocha`

CoreDAO Domains's [Mocha](https://mochajs.org/) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @cnsjs/eslint-config@^0.0.2 \
    @cnsjs/eslint-config-mocha@^0.0.1 \
    eslint@^8.33.0 \
    eslint-config-prettier@^8.6.0 \
    eslint-plugin-import@^2.27.5 \
    eslint-plugin-jsdoc@^39.8.0 \
    eslint-plugin-mocha@^10.1.0 \
    eslint-plugin-prettier@^4.2.1 \
    prettier@^2.8.4
```

The order in which you extend ESLint rules matters.
The `@cnsjs/*` eslint configs should be added to the `extends` array _last_,
with `@cnsjs/eslint-config` first, and `@cnsjs/eslint-config-*` in any
order thereafter.

```js
module.exports = {
  root: true,

  extends: [
    // These should be added last unless you know what you're doing.
    '@cnsjs/eslint-config',
    '@cnsjs/eslint-config-mocha',
  ],
};
```

If your project has `prefer-arrow-callback` you will need to disable that and replace it with `mocha/prefer-arrow-callback`.
