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
    '@nuxt/fonts',
    '@nuxthq/studio',
    '@nuxtjs/i18n',
    '@nuxtjs/plausible',
    '@nuxt/test-utils/module',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    "@nuxt/ui"
  ],

  tailwindcss: {
    viewer: false
  },

  css: [
    resolve('./app/assets/css/main.css'),
    resolve('./app/assets/css/markdown.css'),
    resolve('./app/assets/css/prose.css')
  ],

  plausible: {
    apiHost: 'https://anneleenvernaillen.com/plio'
  },

  fonts: {
    families: [
      { name: 'Poppins', provider: 'google' },
    ],
    defaults: {
      weights: [200, 300, 400, 500, 700],
      styles: ['normal', 'italic'],
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
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://anneleen.twic.pics/av'
    },
    modifiers: {
      format: 'webp'
    }
  },

  future: {
    compatibilityVersion: 4,
  },

  compatibilityDate: '2024-07-16',
})
