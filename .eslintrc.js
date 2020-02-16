module.exports = {
    root: true,
    env: {
        es6: true,
        node: true,
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'jest', 'prettier'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    rules: {
        'prettier/prettier': 'warn',
    },
};
