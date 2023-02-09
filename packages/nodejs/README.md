# `@cnsjs/eslint-config-nodejs`

CoreDAO Domains's [Node.js](https://nodejs.org) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @cnsjs/eslint-config@workspace:^0.0.1 \
    eslint@^8.33.0 \
    eslint-config-prettier@^8.6.0 \
    eslint-plugin-import@^2.27.5 \
    eslint-plugin-jest@^27.2.1 \
    eslint-plugin-jsdoc@^39.8.0 \
    eslint-plugin-prettier@^4.2.1 \
    prettier@^2.8.4
```

The order in which you extend ESLint rules matters.
The `@cnsjs/*` eslint configs should be added to the `extends` array _last_,
with `@cnsjs/eslint-config` first, and `@cnsjs/eslint-config-*` in any
order thereafter.

```js
module.exports = {
  extends: [
    // These should be added last unless you know what you're doing.
    '@cnsjs/eslint-config',
    '@cnsjs/eslint-config-nodejs',
  ],
};
```

To lint the `.eslintrc.js` file itself, you will **need** to add this config in addition to the base config.
