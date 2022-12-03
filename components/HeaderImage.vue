<script setup lang="ts">
const $img = useImage()
const { page } = useContent()
const url = computed(() => {
  return page.value.image.src
})

// settings
const imageRatio: number = 420 / 1920
const minimumHeight = 320

// calculations
const calculateImageHeight = (screenWidth: number) => {
  const calculatedHeight = screenWidth * imageRatio
  return calculatedHeight <= minimumHeight ? minimumHeight : calculatedHeight
}
const image = reactive({
  height: calculateImageHeight(window.innerWidth),
})
const imgWrapper = computed(() => {
  return {
    'height': `${image.height}px`,
    'background-color': '#DCD8D1',
  }
})
const imgBackground = computed(() => {
  const imgUrl = $img(url.value, { format: 'webp' })
  console.log(url.value)
  console.log(imgUrl)
  if (url.value && url.value.length > 0) {
    return {
      'height': `${image.height}px`,
      'background-image': `url(${imgUrl})`,
      'background-repeat': 'no-repeat',
      'background-position': 'center center',
      'background-size': 'cover',
    }
  }
  else {
    return {
      'height': `${image.height}px`,
      'background-color': '#DCD8D1',
    }
  }
})

onMounted(async () => {
  window.onresize = () => {
    image.height = calculateImageHeight(window.innerWidth)
  }
})
</script>

<template>
  <div :style="imgWrapper">
    <div :style="imgBackground" class="animate__animated animate__fadeIn" />
  </div>
</template>
