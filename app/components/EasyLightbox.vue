<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { useLightbox } from '../stores/lightbox'

const lightbox = useLightbox()
const handleHide = () => {
  lightbox.hide()
}
</script>

<template>
  <VueEasyLightbox
    loop
    move-disabled
    :index="lightbox.index"
    :visible="lightbox.visible"
    :imgs="lightbox.images"
    @hide="handleHide"
  >
    <template #toolbar />
  </VueEasyLightbox>
</template>

<style>
.vel-modal {
  background: rgba(255, 254, 253, 0.7);
}
.vel-modal .vel-btns-wrapper svg.vel-icon {
  fill: black!important;
}
</style>
