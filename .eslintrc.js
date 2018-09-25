module.exports = {
    "parser": 'babel-eslint',
    "env": {
      "browser": true,
      "commonjs": true,
      "es6": true,
      "node": true,
      "jest": true,
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parserOptions": {
      "ecmaFeatures": {
        "experimentalObjectRestSpread": true,
        "jsx": true
      },
      "sourceType": "module"
    },
    "plugins": [ "react" ],
    "rules": {
      "react/prop-types": ["off"],
      "indent": ["error", 4],
      "linebreak-style": 0,
      "global-require": 0,
      "linebreak-style": [0, "error", "windows"],
      "quotes": ["error","single"],
      "semi": ["error","always"],
      "no-console": ["warn", { "allow": ["info", "error"] }]
    }
  };