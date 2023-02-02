<script setup lang="ts">
const { data } = await useAsyncData('data', () =>
  queryContent('/')
    .where({ highlight: true })
    .only(['highlightImg', '_path', 'title'])
    .sort({ order: 1 })
    .limit(4)
    .find(),
)
</script>

<template>
  <div class="grid grid-cols-2 md:grid-cols-4 justify-items-center">
    <div v-for="item, index in data" :key="index" class="text-center">
      <NuxtLink :to="item._path" class="w-full m-auto">
        <NuxtImg
          :src="useImagePath(item.highlightImg, 'highlights')"
          :alt="item.title"
          width="220"
          format="webp"
          class="m-auto block"
        />
      </NuxtLink>
      <NuxtLink :to="item._path" class="w-full m-auto">
        <h1>{{ item.title }}</h1>
      </NuxtLink>
    </div>
  </div>
</template>
