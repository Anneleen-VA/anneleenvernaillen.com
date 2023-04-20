import { logger } from '@nuxt/kit'
import { version } from './package.json'

logger.success(`nuxt app v${version} for anneleenvernaillen.com created by Wouter Vernaillen`)

export default defineNuxtConfig({
  extends: [
    './app',
  ],

  devtools: {
    enabled: true
  }
})
