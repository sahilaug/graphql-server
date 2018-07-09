module.exports = {
  parser: 'babel-eslint',
  extends: 'airbnb',
  globals: {
    window: true,
    document: true,
    alert: true,
  },
  rules: {
    'no-console': 1,
    'no-underscore-dangle': 0,
    'no-param-reassign': 0,
    'react/jsx-filename-extension': 0,
    'react/prop-types': 0,
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'react/no-danger': 1,
    'react/jsx-indent-props': [2, 4],
    'import/prefer-default-export': 0,
  },
};
