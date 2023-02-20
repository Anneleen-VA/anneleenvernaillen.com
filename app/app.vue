<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  script: [{ src: 'https://identity.netlify.com/v1/netlify-identity-widget.js' }],
  link: [
    { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' },
  ],
})
</script>

<template>
  <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#DCD8D1 0%,#707070 50%,#DCD8D1 100%)" />
  <HeaderComponent />
  <NuxtPage />
  <FooterComponent />
  <easy-lightbox />
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
