<script setup lang="ts">
const props = defineProps({
  nrOfPosts: {
    type: Number,
    default: 1000,
    required: false,
  },
})
const { t } = useI18n()
const { path } = useRoute()
const { data } = await useAsyncData(`content-${path}`, () =>
  queryContent('news')
    .where({ isNews: true })
    .sort({ _file: -1 })
    .limit(props.nrOfPosts)
    .find(),
)
const animateDurationClass = (index: number) => {
  return `animate-duration-${index * 1000}, animate-delay-${index * 100}`
}
</script>

<template>
  <div
    v-for="post, index in data" :key="index" class="w-full animate__animated animate__fadeIn"
    :class="animateDurationClass(index)"
  >
    <div class="relative bg-transparent mb-10 prose">
      <div class="col-left">
        <h3 class="!mb-1">
          <NuxtLink
            :aria-label="post.title" :to="post._path"
            class="!font-light text-primary dark:text-white text-xl sm:text-2xl block hover:bg-opacity-80"
          >
            {{ post.title }}
            <div v-if="post.titleLine2" class="!mt-1">
              {{ post.titleLine2 }}
            </div>
          </NuxtLink>
        </h3>
        <div class="flex mb-7">
          <div class="flex pr-5">
            <div class="w-full">
              <div class="text-body-color uppercase">
                {{ useFormattedDate(post.date) }}
              </div>
            </div>
          </div>
          <div v-if="post.author" class="inline-block pl-5 border-l border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
            <div class="text-xs text-body-color">
              {{ t ('news.by') }} {{ post.author }}
            </div>
          </div>
        </div>
        <ContentRenderer :value="post" excerpt />
        <NuxtLink :to="post._path" :aria-label="post.title">
          <button class="text-white rounded-lg font-medium bg-black px-5 py-1 ">
            {{ t ('news.readmore') }}
          </button>
        </NuxtLink>
      </div>
      <div class="col-right">
        <NuxtImg :src="useImagePath(post.thumbnail)" width="576" class="rounded-md" format="webp" />
      </div>
      <div class="col-clear" />
    </div>
  </div>
</template>

<style scoped>
.prose h3 {
  margin-top: 14px;
  text-decoration: none;
}
.prose h3 a {
  text-decoration: none;
}
</style>
