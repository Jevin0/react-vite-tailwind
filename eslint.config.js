import antfu from '@antfu/eslint-config'
import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat()

export default antfu(
  {
    react: true,
  },
  {
    rules: {
      'no-console': 'off',
    },
  },
  ...compat.config({
    extends: ['plugin:tailwindcss/recommended'],
    rules: {
      'tailwindcss/no-custom-classname': 'off',
    },
  }),
)
