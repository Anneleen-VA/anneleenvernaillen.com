<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  width: {
    type: Number,
    required: false,
  },
  height: {
    type: Number,
    required: false,
  },
  alt: {
    type: String,
    required: false,
    default: '',
  },
  fit: {
    type: String,
    required: false,
    default: '',
  },
  cssClass: {
    type: String,
    required: false,
    default: 'proseIframe',
  },
})
</script>

<template>
  <NuxtImg
    class="rounded-lg"
    :src="src" :alt="alt" :width="width" :height="height" :fit="fit" :class="cssClass"
  />
</template>
