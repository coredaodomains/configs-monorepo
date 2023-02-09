# `@coredomains/eslint-config-commonjs`

Coredomains's ESLint configuration for projects using CommonJS.

## Usage

```bash
yarn add --dev \
    @coredomains/eslint-config@^0.0.2 \
    @coredomains/eslint-config-commonjs@^0.0.1 \
    eslint@^8.27.0 \
    eslint-config-prettier@^8.5.0 \
    eslint-plugin-import@^2.26.0 \
    eslint-plugin-jsdoc@^39.6.2 \
    eslint-plugin-prettier@^4.2.1 \
    prettier@^2.7.1
```

The order in which you extend ESLint rules matters.
The `@coredomains/*` eslint configs should be added to the `extends` array _last_,
with `@coredomains/eslint-config` first, and `@coredomains/eslint-config-*` in any
order thereafter.

```js
module.exports = {
  extends: [
    // This should be added last unless you know what you're doing.
    '@coredomains/eslint-config',
    '@coredomains/eslint-config-commonjs',
  ],
};
```
