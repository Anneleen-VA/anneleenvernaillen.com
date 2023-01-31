<script setup lang="ts">
const appConfig = useAppConfig()
const tagembedId = appConfig.tagembed.id
</script>

<template>
  <div v-if="tagembedId" class="bg-primary bg-opacity-[35%] w-full">
    <div class="container max-w-screen-xl">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8  mt-10 mb-10">
          <div class="mb-6 p-1">
            <SocialIcons filter-social="Instagram" :size="2" />
          </div>
          <iframe
            :src="`https://widget.tagembed.com/${tagembedId}?view`" style="width:100%;height:400px;overflow: auto;"
            frameborder="0" allowtransparency="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
