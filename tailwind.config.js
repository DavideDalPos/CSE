import defaultTheme from 'tailwindcss/defaultTheme'
import typography from '@tailwindcss/typography'
import colors from 'tailwindcss/colors'

export default {
  content: ['./content/**/*.md', './nuxt.config.ts'],
  theme: {
    extend: {}
  },
  plugins: [typography]
}
