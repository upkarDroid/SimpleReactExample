module.exports = {
  env: {
    node: true,
    es6: true
  },
  extends: 'eslint:recommended',
  // extends: 'airbnb-base',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "indent": [
      "error",
      4
    ],
    "comma-dangle": 0
  },
};