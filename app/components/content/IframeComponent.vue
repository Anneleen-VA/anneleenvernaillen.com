<script setup lang="ts">
defineProps({
  src: {
    type: String,
    required: true,
  },
  title: {
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
  <iframe
    :src="src"
    class="mb-3 rounded-lg"
    :class="cssClass"
    :title="title"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen
  />
</template>
