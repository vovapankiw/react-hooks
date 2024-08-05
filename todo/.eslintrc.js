module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  parserOptions: {
    project: "./tsconfig.json",
  },
  settings: {
    react: {
      version: "detect",
    },
    "import/resolver": {
      typescript: true,
      node: true,
    },
  },
  plugins: ["filenames"],
  extends: [
    "plugin:@next/next/recommended",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "prettier",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:tailwindcss/recommended",
    "plugin:compat/recommended",
    "plugin:security/recommended-legacy",
    "plugin:unicorn/recommended",
  ],
  rules: {
    "no-console": "error",
    "filenames/match-exported": "error",
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "import/no-deprecated": "warn",
    "unicorn/filename-case": [
      "error",
      { cases: { camelCase: true, pascalCase: true } },
    ],
    "unicorn/no-null": "off",
    "unicorn/prevent-abbreviations": "off",
  },
  overrides: [
    {
      files: ["*.js"],
      extends: ["plugin:@typescript-eslint/disable-type-checked"],
    },
    {
      files: [".*rc.js", "*.config.js"],
      env: {
        commonjs: true,
        node: true,
      },
      rules: {
        "unicorn/prefer-module": "off",
      },
    },
    {
      files: [".*rc.js", "*.config.js", "*.config.ts", "**/*.d.ts"],
      rules: {
        "filenames/match-exported": "off",
        "unicorn/filename-case": "off",
        "@typescript-eslint/consistent-type-definitions": "off",
      },
    },
    {
      files: ["**/*.tsx"],
      rules: {
        "unicorn/filename-case": [
          "error",
          {
            cases: { pascalCase: true },
            ignore: ["\\.stories\\.tsx$", "\\.test\\.tsx$"],
          },
        ],
      },
    },
    {
      files: [
        "app/providers.tsx",
        "app/**/{page,layout,loading,error,not-found}.tsx",
      ],
      rules: {
        "unicorn/filename-case": ["error", { cases: { kebabCase: true } }],
      },
    },
    {
      files: ["api/**/*.ts"],
      rules: {
        "unicorn/filename-case": ["error", { cases: { camelCase: true } }],
        "filenames/match-exported": "off",
      },
    },
  ],
};
