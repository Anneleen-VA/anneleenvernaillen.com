<script setup lang="ts">
const { page } = useContent()
const url = computed(() => {
  if (page.value && page.value.image && page.value.image.src)
    return useImagePath(page.value.image.src, 'headers')
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
