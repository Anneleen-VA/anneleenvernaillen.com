<script setup lang="ts">
const { t } = useI18n()
const { setClosed, visible } = usePolitePopup()
const appConfig = useAppConfig()

async function onClickOk() {
  setClosed()
  window.open(appConfig.mailchimpLink)
}

function onClickClose() {
  setClosed()
}
</script>

<template>
  <div
    v-if="visible" class="
      fixed
      z-50
      left-3
      right-3
      bottom-3
      md:left-5
      md:right-5
      md:bottom-5
      lg:left-1/2
      p-5
      rounded-lg
      shadow-lg shadow-gray-500
      bg-opacity-[97%]
      bg-white
      animate__animated animate__slideInUp
    "
  >
    <span class="prose">
      <h3 class="text-lg !mb-2">{{ t('politePopup.thanks') }}</h3>
      <p class="text-lg">{{ t('politePopup.question') }}</p>
    </span>
    <div class="flex gap-4 mt-4">
      <button class="text-base font-medium text-white bg-black py-1 px-3 hover:bg-opacity-80 hover:shadow-signUp rounded-lg" @click="onClickOk">
        {{ t('politePopup.yes') }}
      </button>
      <button class="bg-gray-200 text-base font-medium bg-primary-500 py-1 px-3 hover:bg-opacity-80 hover:shadow-signUp rounded-lg" @click="onClickClose">
        {{ t('politePopup.no') }}
      </button>
    </div>
  </div>
</template>
