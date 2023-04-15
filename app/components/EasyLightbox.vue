<script setup lang="ts">
import VueEasyLightbox from 'vue-easy-lightbox'
import { useLightbox } from '../stores/lightbox'

const lightbox = useLightbox()
function handleHide() {
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
  background: rgba(255, 254, 253, 0.9)!important;
}
.vel-modal .vel-img {
  max-height: 95vh;
  max-width: 80vw;
}
.vel-modal .vel-btns-wrapper svg.vel-icon {
  fill: black!important;
}
</style>
