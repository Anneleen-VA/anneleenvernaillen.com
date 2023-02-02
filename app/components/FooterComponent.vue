<script setup lang="ts">
const { t } = useI18n()
const date: number = new Date().getFullYear()
</script>

<template>
  <div class="bg-black w-full">
    <div class="container max-w-screen-xl my-0">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8  mt-20 mb-10">
          Footer
        </div>
      </div>
    </div>
  </div>
  <div class="bg-black w-full border-t-2 border-white">
    <div class="container max-w-screen-xl my-0">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8 py-3 text-white text-xs">
          {{ t('footer.copyright') }} {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>
