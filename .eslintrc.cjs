// eslint-disable-next-line no-undef
module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    jsxPragma: 'React',
    ecmaFeatures: {
      jsx: true
    }
  },
  plugins: ['prettier'],
  extends: [
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    // 'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended'
  ],
  overrides: [
    {
      files: '*.html',
      processor: 'vue/.vue'
    }
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        semi: true,
        endOfLine: 'auto',
        singleQuote: true,
        trailingComma: 'none',
        bracketSpacing: true,
        jsxBracketSameLine: false,
        vueIndentScriptAndStyle: false,
        'jsxBracketSameLine:': true,
        htmlWhitespaceSensitivity: 'ignore',
        wrapAttributes: true,
        overrides: [
          {
            files: '*.html',
            options: {
              parser: 'html'
            }
          }
        ]
      }
    ],
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true
      }
    ],
    'vue/multi-word-component-names': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-console': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'new-cap': 'off',
    'no-shadow': 'off',
    'no-underscore-dangle': 'off',
    'vue/no-v-html': 'off',
    'no-restricted-syntax': 'off',
    'guard-for-in': 'off',
    'import/prefer-default-export': 'off'
  }
};
