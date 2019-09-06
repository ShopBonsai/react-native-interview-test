module.exports = {
  "parser": "babel-eslint",
  "env": {
    "browser": true,
    "node": true
  },
  "extends": [
    'airbnb'
  ],
  "globals": {
  
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2018,
    "sourceType": 'module',
  },
  "plugins": ["react"],
  "rules": {
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
    "react/jsx-curly-spacing": 0,
    "react/jsx-curly-newline": 0,
    "react/state-in-constructor": 0,
    "react/static-property-placement": 0,
    "react/jsx-props-no-spreading": 0,
    "semi": ["error", "never"],
    "comma-dangle": ["error", "never"],
    "arrow-parens": ["error", "as-needed"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-param-reassign": 0,
    "no-prototype-builtins": 0
  },
  "overrides": [
    {
      "files": [
        "**/__mocks__/**",
        "**/*.test.js",
        "**/*.story.js"
      ],
      "env": {
        "jest": true
      },
      "rules": {
        "react/jsx-no-literals": "off",
        "react/prop-types": "off",
        "import/first": "off",
        "import/prefer-default-export": "off"
      }
    }
  ]
};
