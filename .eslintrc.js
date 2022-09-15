module.exports = {
  root: true,
  globals: {
    BodyInit: true,
    EventListener: true,
    ExtendableMessageEvent: true,
    HeadersInit: true,
    RequestInit: true,
    ScrollBehavior: true,
  },
  settings: {
    "import/resolver": {
      alias: {
        map: [
          ["app", "./src/app"],
          ["assets", "./src/assets"],
        ],
        extensions: [".ts", ".tsx", ".js"],
      },
    },
  },
  extends: [
    "prettier",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "airbnb-base",
  ],
  plugins: ["prettier", "@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  rules: {
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-ignore": "allow-with-description" },
    ],
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-unused-vars": [
      "error",
      { argsIgnorePattern: "next" },
    ],
    "arrow-body-style": "off",
    "class-methods-use-this": "off",
    "import/extensions": [
      "error",
      "always",
      { js: "ignorePackages", ts: "never" },
    ],
    "import/prefer-default-export": "off",
    indent: ["error", 4],
    "lines-between-class-members": [
      "error",
      "always",
      { exceptAfterSingleLine: true },
    ],
    "max-len": ["error", { code: 200, ignoreComments: true }],
    "no-plusplus": ["error", { allowForLoopAfterthoughts: true }],
    "no-shadow": "off",
    "no-unused-vars": ["error", { argsIgnorePattern: "next" }],
    "no-use-before-define": ["error", { functions: false }],
    "object-curly-newline": ["error", { ImportDeclaration: "never" }],
    semi: ["error", "never", { beforeStatementContinuationChars: "always" }],
    "dot-notation": [
      "error",
      { allowPattern: "^[a-z]+(__[a-z]+)*(--[a-z]+)*$" },
    ],
    // prefer "<></>" syntax over <React.Fragment></React.Fragment>
    "react/jsx-fragments": ["error", "syntax"],

    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "react/prefer-stateless-function": [
      "error",
      { ignorePureComponents: true },
    ],
    "react/no-unused-prop-types": ["error", { skipShapeProps: true }],
  },
};
