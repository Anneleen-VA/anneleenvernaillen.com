// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  extends: [
    '../av-theme',
  ],
  image: {
    provider: 'twicpics',
    twicpics: {
      baseURL: 'https://vernaillen.twic.pics/anneleen',
    },
  },
  generate: {
    routes: ['/', '/about', '/art-initiation', '/ceramics', '/contact', '/graphic-design', '/news-archive', '/wall-art'],
  },
})
