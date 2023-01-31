<script setup lang="ts">
defineEmits(['hideNav'])
const { data: navigation } = await useAsyncData('navigation', () => {
  return fetchContentNavigation()
})
</script>

<template>
  <ul class="block xl:flex xl:border-l-dark-900 xl:border-l-2 pl-4">
    <li v-for="item, index in navigation" :key="index" class="relative group align-bottom">
      <NuxtLink
        :to="item._path"
        class="text-gray uppercase overflow-hidden leading-4 align-bottom flex py-2 pl-2 pr-10 xl:inline-flex xl:pl-1 xl:pr-0 xl:py-2 xl:ml-2 xl:mr-3"
        @click="$emit('hideNav')"
      >
        {{ item.title }}
      </NuxtLink>
    </li>
  </ul>
</template>

<style scoped>
a:hover,
a.router-link-active {
  text-shadow: -0.05ex 0 currentColor, 0.05ex 0 currentColor;
}
</style>
