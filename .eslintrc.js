module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': ['error', { code: 120 }],
    'no-underscore-dangle': 'off',
    'no-unused-vars': 'off',
    'no-console': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
    'no-use-before-define': 'off',
    'react/button-has-type': 'off',
    'react/prefer-stateless-function': 'off',
  },
};
