module.exports = {
  extends: ['react-app', 'plugin:react/recommended'],
  rules: {
    'react/display-name': 0,
    "react/prop-types": [2, { ignore: ['children'] }],
    'prefer-const': 2,
  },
  overrides: [
    {
      files: ['*.test.js', '*.spec.js', '*.stories.js'],
      rules: {
        'react/prop-types': 'off',
        'react/jsx-key': 'off',
      },
    },
  ],
};