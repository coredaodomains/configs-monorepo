const enviromentRules = require('./enviroment.json');

module.exports = {
    env: {
        es2018: true,
        "shared-node-browser": true
    },
    parserOptions: {
        ecmaVersion: 2018,
        // We want to default to 'script' and only use 'module' explicitly.
        sourceType: 'script',
    },
    plugins: ['jsdoc', 'prettier'],
}