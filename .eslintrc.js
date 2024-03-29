module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'max-len': ['error', { code: 120 }],
    'no-console': 'off',
    'no-unused-vars': 'off',
    'no-param-reassign': 'off',
    'react/prop-types': 'off',
    'react/destructuring-assignment': 'off',
  },
};
