import globals from 'globals'
import importPlugin from 'eslint-plugin-import'
import nodePlugin from 'eslint-plugin-n'
import pluginPromise from 'eslint-plugin-promise'
import config from 'eslint-config-standard'

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    languageOptions: {
      sourceType: 'module',
      globals: {
        ...globals.node,
        ...config.globals,
        ...config.env
      },
      parserOptions: config.parserOptions
    },
    plugins: {
      import: importPlugin,
      promise: pluginPromise,
      n: nodePlugin,
      standard: config.plugins
    },
    rules: config.rules
  }
]
