module.exports = {
    "env": {
        "node": true,
        "browser": true,
        "react-native/react-native": true,
        "es6": true,
        "jest": true
    },
    "parser": "babel-eslint",
    "extends": "airbnb",
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "react-native"
    ],
    "rules": {
      "comma-dangle": "off",
      "global-require": "off",
      "import/no-extraneous-dependencies": "off",
      "import/no-named-as-default": "off",
      "object-curly-newline": "off",
      "quotes": [2, "double"],
      "react/jsx-filename-extension": "off",
      "react/prop-types": "off",
      "react/jsx-one-expression-per-line": "off"
    }
};
