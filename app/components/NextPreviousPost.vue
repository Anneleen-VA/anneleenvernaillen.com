<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
const route = useRoute()
const [prev, next] = await queryContent(localePath('/news'))
  .where({ isNews: true })
  .findSurround(route.path)
</script>

<template>
  <div class="w-full sm:columns-2 md:columns-4">
    <div
      class="justify-start"
    >
      <span v-if="prev">{{ '< ' }}</span>
      <NuxtLink
        v-if="prev" :to="prev._path" :aria-label="`${t('news.previous')}: ${prev.title}`"
        class="underline"
      >
        {{ t('news.previous') }}
      </NuxtLink>
      <span v-if="prev && next">{{ ' | ' }}</span>
      <NuxtLink
        v-if="next" :to="next._path" :aria-label="`${t('news.next')}: ${next.title}`"
        class="underline"
      >
        {{ t('news.next') }}
      </NuxtLink>
      <span v-if="next">{{ ' >' }}</span>
    </div>
    <div
      class="text-left sm:text-right pt-3 sm:pt-0"
    >
      <NuxtLink to="/news">
        <button class="text-white rounded-lg font-medium bg-black px-3 py-1 ">
          {{ t('news.overview') }}
        </button>
      </NuxtLink>
    </div>
  </div>
</template>
