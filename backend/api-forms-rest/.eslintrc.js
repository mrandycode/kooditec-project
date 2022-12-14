module.exports = {
    root: true,
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    extends: ['eslint:recommended', 'prettier'],
    env: {
        es2021: true,
        node: true,
    },
    rules: {
        'comma-dangle': [
            1,
            {
                objects: 'always',
                arrays: 'always',
                imports: 'always',
                exports: 'always',
                functions: 'always',
            },
        ],
    },
}
