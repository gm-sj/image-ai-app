// .eslintrc.js
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
    ecmaVersion: 2021, // 최신 ECMAScript 버전 사용
    sourceType: 'module',
  },
  extends: ['@rushstack/eslint-config/profile/web-app', '@rushstack/eslint-config/mixins/react'],
  rules: {
    'no-console': 'warn',
    semi: ['error', 'always'],
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/naming-convention': 'off',
    '@rushstack/typedef-var': 'off', // 타입 추론을 허용하도록 규칙 비활성화
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
};
