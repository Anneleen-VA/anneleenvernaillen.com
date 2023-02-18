<script setup lang="ts">
defineEmits(['hideNav'])
const localePath = useLocalePath()
const { data: navigation } = await useAsyncData('navigation', () =>
  queryContent('/')
    .where({ navigation: true })
    .sort({ _file: 1 })
    .find(),
)

const linkClass = (path?: string) => {
  if (!path)
    return ''
  const currentRoute = useRoute().path
  let classToAdd = ''
  if (
    (path === '/' && currentRoute === localePath('/'))
    || (path !== '/' && currentRoute.startsWith(localePath(path)))
  )
    classToAdd = 'router-link-active router-link-exact-active'
  return classToAdd
}
</script>

<template>
  <ul class="block xl:flex xl:border-l-dark-900 xl:border-l-2 pl-4 columns-3">
    <li v-for="item, index in navigation" :key="index" class="relative group align-bottom">
      <NuxtLink
        :to="item._path"
        class="text-gray uppercase overflow-hidden leading-4 align-bottom flex py-2 pl-2 pr-10 xl:inline-flex xl:pl-1 xl:pr-0 xl:py-2 xl:ml-2 xl:mr-3"
        :class="linkClass(item._path)"
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
