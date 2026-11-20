// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const functionName = require('eslint-plugin-function-name');

const selectorRules = prefix => ({
  '@angular-eslint/directive-selector': ['error', { type: 'attribute', prefix, style: 'camelCase' }],
  '@angular-eslint/component-selector': ['error', { type: 'element', prefix, style: 'kebab-case' }],
});

module.exports = tseslint.config(
  {
    ignores: ['dist/**', 'node_modules/**', '.angular/**'],
  },
  {
    files: ['**/*.ts'],
    extends: [eslint.configs.recommended, ...tseslint.configs.recommended, ...angular.configs.tsRecommended],
    processor: angular.processInlineTemplates,
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      'function-name': functionName,
    },
    rules: {
      ...selectorRules('app'),
      // the v22 migration pinned ChangeDetectionStrategy.Eager to keep pre-v22 behavior
      '@angular-eslint/prefer-on-push-component-change-detection': 'off',
      eqeqeq: ['error', 'always'],
      'function-name/starts-with-verb': ['error', { whitelist: ['ng', 'by', 'migrate', 'die'] }],
      'max-params': ['error', 3],
      'no-console': 'error',
      'no-nested-ternary': 'error',
      'no-shadow': 'off',
      '@typescript-eslint/await-thenable': 'error',
      '@typescript-eslint/explicit-function-return-type': 'error',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unnecessary-condition': 'error',
      'require-await': 'off',
      '@typescript-eslint/require-await': 'error',
    },
  },
  {
    files: ['projects/components/**/*.ts'],
    rules: selectorRules('bpa'),
  },
  {
    files: ['**/*.html'],
    extends: [...angular.configs.templateRecommended],
    rules: {},
  },
);
