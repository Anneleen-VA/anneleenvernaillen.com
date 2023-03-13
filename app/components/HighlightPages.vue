<script setup lang="ts">
const { data } = await useAsyncData('data', () =>
  queryContent('/')
    .where({ highlight: true })
    .only(['highlightImg', '_path', 'title'])
    .sort({ order: 1 })
    .limit(4)
    .find(),
)
const gridColsClass = computed(() => data.value?.length === 4 ? 'grid-cols-2 md:grid-cols-4' : 'sm:grid-cols-3')
</script>

<template>
  <div class="container max-w-screen-xl my-6 sm:my-16">
    <div class="flex flex-wrap">
      <div class="w-full px-4 sm:px-6 lg:px-8">
        <div :class="gridColsClass" class="grid justify-items-center animate__animated animate__fadeIn">
          <div v-for="item, index in data" :key="index" class="text-center py-4">
            <NuxtLink :to="item._path" class="w-full m-auto">
              <NuxtImg
                :src="useImagePath(item.highlightImg, 'highlights')"
                :alt="item.title"
                width="220"
                format="webp"
                class="m-auto block w-[100px] sm:w-[140px] md:w-[170px] lg:w-[200px]"
              />
            </NuxtLink>
            <NuxtLink :to="item._path" class="w-full m-auto">
              <span class="text-lg font-medium uppercase">
                {{ item.title }}
              </span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
