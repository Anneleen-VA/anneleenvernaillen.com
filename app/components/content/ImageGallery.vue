<script setup lang="ts">
import { useLightbox } from '../../stores/lightbox'

const props = defineProps({
  folder: {
    type: String,
    required: true,
  },
  filter: {
    type: String,
    required: false,
  },
})
const $img = useImage()
const lightbox = useLightbox()
const images: string[] = []
const imageThumbnails: string[] = []
Object.values(import.meta.glob('/public/**')).forEach((imageModule) => {
  if (
    imageModule.name
    && imageModule.name.startsWith(`/public${props.folder}`)
    && (props.filter == null
      || props.filter === ''
      || imageModule.name.indexOf(props.filter) > 0)
  ) {
    const imgPath = imageModule.name.substring('/public'.length)
    const imgTwicPicUrl = $img(imgPath, {
      format: 'webp',
    })
    images.push(imgTwicPicUrl)
    imageThumbnails.push(imgPath)
  }
})

function openGallery(i: number) {
  lightbox.setImages(images)
  lightbox.show(i)
}
</script>

<template>
  <div class="columns-2 md:columns-3 lg:columns-4 mx-[-8px] mb-20">
    <div v-for="(image, index) in imageThumbnails" :key="index" class="px-0 md:px-1">
      <div class="galleryImgWrapper rounded-lg overflow-hidden relative mb-4 md:mb-6 shadow-md shadow-gray-800">
        <NuxtImg :src="image" class="rounded-lg cursor-pointer w-full" :alt="image" @click="openGallery(index)" />
      </div>
    </div>
  </div>
</template>

<style>
.prose .galleryImgWrapper {
  position: relative;
  overflow: hidden;
}
.prose .galleryImgWrapper img {
  margin: 0;
  max-width: 100%;
  height: auto;
  -moz-transition: all 0.5s;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}

.prose .galleryImgWrapper img:hover {
  -moz-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
