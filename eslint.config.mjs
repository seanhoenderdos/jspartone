import js from "@eslint/js";
import eslintConfigPrettier from "eslint-config-prettier/flat";
import globals from "globals";

export default [
  { ignores: [".npm-cache/**"] },
  js.configs.recommended,
  {
    files: ["scripts/**/*.js"],
    languageOptions: {
      sourceType: "script",
      globals: globals.browser,
    },
  },
  {
    files: ["scripts/game-controller.js"],
    languageOptions: {
      globals: {
        // These functions are supplied by the other scripts in index.html.
        computerPlay: "readonly",
        getPlayerChoice: "readonly",
        playRound: "readonly",
      },
    },
  },
  eslintConfigPrettier,
];
