# `@coredomains/eslint-config-typescript`

CoreDAO Domains's [TypeScript](https://www.typescriptlang.org) ESLint configuration.

## Usage

```bash
yarn add --dev \
    @coredomains/eslint-config@^0.0.1 \
    @coredomains/eslint-config-typescript@^0.0.1 \
    @typescript-eslint/eslint-plugin@^5.51.0 \
    @typescript-eslint/parser@^5.51.0 \
    eslint@^8.27.0 \
    eslint-config-prettier@^8.33.0 \
    eslint-plugin-import@^2.27.5 \
    eslint-plugin-jsdoc@^39.8.0 \
    eslint-plugin-prettier@^4.2.1 \
    prettier@^2.8.4
```

The order in which you extend ESLint rules matters.
The `@coredomains/*` eslint configs should be added to the `extends` array _last_,
with `@coredomains/eslint-config` first, and `@coredomains/eslint-config-*` in any
order thereafter.

```js
module.exports = {
  root: true,

  extends: [
    // This should be added last unless you know what you're doing.
    '@coredomains/eslint-config',
  ],

  overrides: [
    // The TypeScript config disables certain rules that you want to keep for
    // non-TypeScript files, so it should be added in an override.
    {
      files: ['*.ts'],
      extends: ['@coredomains/eslint-config-typescript'],
    },
  ],

  // This is required for rules that use type information.
  // See here for more information: https://github.com/typescript-eslint/typescript-eslint/blob/master/docs/getting-started/linting/TYPED_LINTING.md
  parserOptions: {
    tsconfigRootDir: __dirname,
  },
};
```
