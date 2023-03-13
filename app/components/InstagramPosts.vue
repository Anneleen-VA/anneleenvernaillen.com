<script setup lang="ts">
const appConfig = useAppConfig()
const tagembedId = appConfig.tagembed.id
</script>

<template>
  <div v-if="tagembedId" class="w-full bg-primary bg-opacity-[35%]">
    <div class="container max-w-screen-xl">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8 mt-10 mb-2 animate__animated animate__fadeIn">
          <div class="mb-6 p-1">
            <SocialIcons filter-social="Instagram" :size="2" />
          </div>
          <iframe
            :src="`https://widget.tagembed.com/${tagembedId}?view`" class="overflow-auto w-full h-[330px] sm:h-[470px] md:h-[640px] lg:h-[820px] mb-5"
            frameborder="0" allowtransparency="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
