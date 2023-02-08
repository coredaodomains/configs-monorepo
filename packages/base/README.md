# `@coredomains/eslint-config`

CoreDomains's base ESLint configuration.

## Usage

Default export contains a base set of ESLint rules for ES6+:

```bash
yarn add --dev \
    @coredomains/eslint-config@^0.0.1 \
    eslint@^8.33.0 \
    eslint-config-prettier@^8.6.0 \
    eslint-plugin-import@^2.27.5 \
    eslint-plugin-jsdoc@^39.8.0 \
    eslint-plugin-prettier@^4.2.1 \
    jest@^29.4.2 \
    prettier@^2.8.4
```

The order in which you extend ESLint rules matters.
The `@coredomains/*` eslint configs should be added to the `extends` array _last_,
with `@coredomains/eslint-config` first, and `@coredomains/eslint-config-*` in any
order thereafter.

```js
module.exports = {
  extends: [
    //...
    '@coredomains/eslint-config',
  ],
};
```
