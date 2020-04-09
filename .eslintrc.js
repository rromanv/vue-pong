module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended', '@vue/prettier'],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'comma-dangle': ['error', 'always-multiline'],
  },
}
