<script setup lang="ts">
// import * as dayjs from 'dayjs'

const props = defineProps({
  nrOfPosts: {
    type: Number,
    default: 1000,
    required: false,
  },
  excerpt: {
    type: Boolean,
    default: false,
    required: false,
  },
})

const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () =>
  queryContent('news')
    .where({ isNews: true })
    .sort({ _file: -1 })
    .limit(props.nrOfPosts)
    .find(),
)

const { t } = useI18n()

/* function formatDate(d: string) {
  const date = dayjs(d)
  return date.format('D MMM YYYY')
} */
const animateDurationClass = (index: number) => {
  return `animate-duration-${index * 1000}, animate-delay-${index * 100}`
}
</script>

<template>
  <div
    v-for="post, index in data" :key="index" class="w-full animate__animated animate__fadeIn"
    :class="animateDurationClass(index)"
  >
    <div class="relative bg-transparent mb-10">
      <h3>
        <NuxtLink
          :aria-label="post.title" :to="post._path"
          class="font-bold text-primary dark:text-white text-xl sm:text-2xl block mb-4 hover:bg-opacity-80"
        >
          {{ post.title }}
          <div v-if="post.titleLine2">
            {{ post.titleLine2 }}
          </div>
        </NuxtLink>
      </h3>

      <ContentRenderer v-if="excerpt" :value="post" excerpt />
      <ContentRenderer v-if="!excerpt" :value="post" />
      <NuxtLink :to="post._path" :aria-label="post.title">
        <button class="text-black font-medium bg-white mt-5 mb-5 py-1 px-3 hover:bg-opacity-80 hover:shadow-signUp">
          {{ t ('news.readmore') }}
        </button>
      </NuxtLink>
      <div class="flex">
        <div
          class="flex pr-5 mr-5 xl:pr-3 2xl:pr-5 xl:mr-3 2xl:mr-5 border-r border-body-color border-opacity-10 dark:border-white dark:border-opacity-10"
        >
          <div class="w-full">
            <div class="text-xs text-body-color">
              {{ post.date }}
            </div>
          </div>
        </div>
        <div class="inline-block">
          <div class="text-xs text-body-color">
            {{ t ('news.by') }} {{ post.author }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
