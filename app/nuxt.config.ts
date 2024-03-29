import { createResolver } from '@nuxt/kit'

const { resolve } = createResolver(import.meta.url)

export default defineNuxtConfig({
  extends: [
    '@vernaillen/nuxt-base-layer'
  ],
  app: {
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxtjs/tailwindcss',
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    'nuxt-icon'
  ],
  tailwindcss: {
    viewer: false
  },
  css: [
    resolve('./assets/css/main.css'),
    resolve('./assets/css/markdown.css'),
    resolve('./assets/css/prose.css')
  ],
  plausible: {
    apiHost: 'https://anneleenvernaillen.com/plio'
  },
  googleFonts: {
    download: true,
    display: 'swap',
    families: {
      Poppins: {
        wght: [200, 300, 400, 500, 700],
        ital: [200, 300, 400, 500, 700]
      }
    }
  },
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ['remark-directive-rehype']
    },
    highlight: {
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      },
      preload: ['json', 'js', 'ts', 'html', 'css', 'vue', 'diff', 'shell', 'markdown', 'yaml', 'bash', 'ini']
    }
  },
  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    langDir: '../locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en.yml' },
      { code: 'nl', iso: 'en-BE', file: 'nl.yml' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root' // recommended
    }
  },
  image: {
    provider: 'vercel',
    modifiers: {
      format: 'webp'
    }
  }
})
