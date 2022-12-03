import { resolve } from 'path'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
  ],
  css: [
    '@/assets/css/main.css',
    '@/assets/css/markdown.css',
    '@/assets/css/prose.css',
    'animate.css/animate.min.css',
  ],
  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/anneleen',
    },
  },
  content: {
    documentDriven: true,
    markdown: {
      remarkPlugins: ['remark-directive-rehype'],
    },
  },
  generate: {
    routes: ['/', '/about', '/art-initiation', '/ceramics', '/contact', '/graphic-design', '/news-archive', '/wall-art'],
  },
  i18n: {
    strategy: 'prefix_and_default',
    defaultLocale: 'en',
    langDir: './locales/',
    locales: [
      { code: 'en', iso: 'en-US', file: 'en-US.json' },
      { code: 'nl', iso: 'en-BE', file: 'nl-BE.json' },
    ],
    detectBrowserLanguage: {
      useCookie: true,
      redirectOn: 'root', // recommended
    },
  },
})
