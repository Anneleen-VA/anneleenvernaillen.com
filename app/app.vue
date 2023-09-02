<script setup lang="ts">
import { useRoute } from '#imports'

useHead({
  htmlAttrs: {
    lang: 'en'
  },
  titleTemplate: (title?: string) => `${title} - Anneleen Vernaillen | Visual Artist`,
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'https://anneleenvernaillen.com/favicon.png' }
  ]
})
const route = useRoute()
const isIG = computed(() => {
  return route.path.startsWith('/instagram')
})
</script>

<template>
  <NuxtLoadingIndicator v-if="!isIG" id="pageTop" color="repeating-linear-gradient(to right,#DCD8D1 0%,#707070 50%,#DCD8D1 100%)" />
  <HeaderComponent v-if="!isIG" />
  <NuxtPage />
  <FooterComponent v-if="!isIG" />
  <easy-lightbox v-if="!isIG" />
  <PolitePopup v-if="!isIG" />
</template>

<style>
.nuxt-loading-indicator {
  opacity: 100% !important;
}
</style>
