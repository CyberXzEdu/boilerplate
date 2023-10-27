/** @type {import("prettier").Config} */
const prettierConfig = {
  printWidth: 120,
  endOfLine: "lf",
  singleQuote: false,
  trailingComma: "none",
  plugins: ["prettier-plugin-tailwindcss"]
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  overrides: [],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module"
  },
  plugins: ["react", "@typescript-eslint"],
  rules: {
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "@typescript-eslint/no-var-requires": "off",
    "prettier/prettier": ["warn", prettierConfig]
  },
  settings: {
    "import/resolver": {
      // See https://github.com/benmosher/eslint-plugin-import/issues/1396#issuecomment-575727774 for line below
      node: {},
      webpack: {
        config: require.resolve("./.erb/configs/webpack.config.eslint.ts")
      },
      typescript: {}
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    }
  }
};
