module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:react/recommended',
    'plugin:jsx-a11y/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: [
    'react',
    'import',
    'jsx-a11y',
    '@typescript-eslint',
    'simple-import-sort',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2021,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    es6: true,
    browser: true,
    node: true
  },
  settings: {
    react: {
      version: 'detect'
    },
    "import/parsers": {
      "@typescript-eslint/parser": [".ts", ".tsx"]
    },
    "import/resolver": {
      typescript: {
        project: "./tsconfig.json"
      }
    }
  },
  rules: {
    'react/prop-types': 1,
    'linebreak-style': 1,
    "import/no-unresolved": 0,
    '@typescript-eslint/explicit-function-return-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    '@typescript-eslint/no-submodule-imports': 'off',
    '@typescript-eslint/no-unused-expressions': 'warn',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/jsx-no-lambda': 'off',
    '@typescript-eslint/prefer-interface': 'off',
    '@typescript-eslint/interface-name-prefix': 'off',
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/array-type': 'warn',
    '@typescript-eslint/ban-types': 'warn',
    'simple-import-sort/exports': 'warn',
    'sort-keys': 'off',
    'array-bracket-spacing': ['error', 'never'],
    'arrow-parens': ['error', 'as-needed'],
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],
    'camelcase': 0,
    'comma-dangle': ['error', 'never'],
    'eqeqeq': ['error', 'always'], // ?
    'indent': ['error', 2, { SwitchCase: 1 }], // ?
    'newline-after-var': 'error',
    'no-console': process.env.NODE_ENV === 'production' ? ['error', { allow: ['warn', 'error'] }] : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 0 }],
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'no-var': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-template': 'error',
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'space-before-blocks': 'error',
    'arrow-spacing': 'error',
    'block-spacing': 'error',
    'comma-spacing': ['error', { after: true, before: false }],
    'comma-style': ['error', 'last'],
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    'prefer-destructuring': 'error',
    'space-before-function-paren': 'error'
  }
}