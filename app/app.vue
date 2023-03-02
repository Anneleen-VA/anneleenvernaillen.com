<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  titleTemplate: (title?: string) => `${title} - Anneleen Vernaillen | Visual Artist`,
  link: [
    { rel: 'icon', type: 'image/x-icon', href: 'https://anneleenvernaillen.com/favicon.png' },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#DCD8D1 0%,#707070 50%,#DCD8D1 100%)" />
  <HeaderComponent />
  <NuxtPage />
  <FooterComponent />
  <easy-lightbox />
  <PolitePopup />
</template>

<style>
.nuxt-loading-indicator {
  opacity: 100% !important;
}

.page-enter-active,
.page-leave-active {
  transition: all 0.1s;
}

.page-enter-from,
.page-leave-to {
  opacity: 85%;
}
</style>
