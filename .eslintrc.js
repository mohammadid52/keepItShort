module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['plugin:react/recommended', 'airbnb'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    'react/jsx-filename-extension': 0,
    'react/jsx-closing-bracket-location': 0,
    'import/no-extraneous-dependencies': 0,
    'react/jsx-props-no-spreading': 0,
    'import/no-cycle': 0,
    'object-curly-newline': 0,
    'no-unused-expressions': 0,
    'react/jsx-wrap-multilines': 0,
    'react/forbid-prop-types': 0,
    indent: 0,
    'implicit-arrow-linebreak ': 0,
  },
};
