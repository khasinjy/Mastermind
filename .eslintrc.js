module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ["plugin:vue/essential", "eslint:recommended", "prettier"],
  parserOptions: {
    parser: "babel-eslint",
    ecmaVersion: 2022
  },
  rules: {
  },
  ignorePatterns: ["node_modules", "dist", "libs"]
};
