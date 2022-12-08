// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    'av-theme',
  ],
  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/anneleen',
    },
  },
  head: {
    htmlAttrs: {
      lang: 'en',
    },
    title: 'Anneleen Vernaillen',
    meta: [
      { name: 'description', content: 'Anneleen Vernaillen. Visual Artist.' },
    ],
  },
  generate: {
    routes: ['/', '/about', '/art-initiation', '/ceramics', '/contact', '/graphic-design', '/news-archive', '/wall-art'],
  },
})
