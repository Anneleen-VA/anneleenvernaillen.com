<script setup lang="ts">
const { page } = useContent()
const url = computed(() => {
  if (page.value && page.value.image)
    return `images/headers/${page.value.image.src}`
  else return 'images/headers/header.png'
})
</script>

<template>
  <div class="bg-primary h-[280px] xl:h-[350px] w-full">
    <NuxtImg
      :src="url"
      preload
      format="webp"
      height="350"
      width="100vw"
      fit="cover"
      style="object-fit: cover;"
      class="h-[280px] xl:h-[350px] w-full"
    />
  </div>
</template>
