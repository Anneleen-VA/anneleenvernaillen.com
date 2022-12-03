<script setup lang="ts">
defineEmits(['hideNav'])
</script>

<template>
  <ul class="block xl:flex xl:border-l-dark-900 xl:border-l-2 pl-5">
    <li v-for="item, index in menuItems" :key="index" class="relative group align-bottom">
      <router-link
        :to="item.url"
        class="text-gray uppercase  overflow-hidden leading-4 align-bottom flex py-2 pl-2 pr-10 xl:inline-flex xl:pl-1 xl:pr-0 xl:pt-1 xl:pb-0 xl:mx-3"
        @click="$emit('hideNav')"
      >
        {{ item.title }}
      </router-link>
    </li>
  </ul>
</template>

<style scoped>
a:hover,
a.router-link-active {
  text-shadow: -0.05ex 0 currentColor, 0.05ex 0 currentColor;
}
</style>
