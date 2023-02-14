<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  width: {
    type: String,
    required: false,
    default: '100%',
  },
  height: {
    type: String,
    required: false,
    default: '',
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
    class="rounded-md"
    :src="src" :alt="alt" :width="width" :height="height" :fit="fit" :class="cssClass"
  />
</template>
