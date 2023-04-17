<script setup lang="ts">
const { page } = useContent()
const { t } = useI18n()
const localePath = useLocalePath()

const { trigger } = usePolitePopup()
trigger()

if (page.value) {
  setMetaData(page.value.title)
}
else {
  const event = useRequestEvent()
  setResponseStatus(event, 404)
}

const notFoundPage = await queryContent(localePath('/_404')).findOne()
</script>

<template>
  <div>
    <NuxtLayout>
      <HeaderImage />
      <div class="container max-w-screen-xl my-12 sm:my-16 xl:my-20">
        <div class="flex flex-wrap">
          <div class="w-full px-4 sm:px-6 lg:px-8">
            <div class="prose m-auto">
              <article class="block animate__animated animate__fadeIn">
                <ContentDoc :excerpt="false">
                  <template #default="{ doc }">
                    <h3 v-if="doc.isNews" class="!mb-1">
                      {{ doc.title }}
                    </h3>
                    <div v-if="doc.isNews" class="flex mb-7">
                      <div class="flex pr-5">
                        <div class="w-full">
                          <div class="text-body-color uppercase">
                            {{ useFormattedDate(doc.date) }}
                          </div>
                        </div>
                      </div>
                      <div v-if="doc.author" class="inline-block pl-5 border-l border-body-color border-opacity-10 dark:border-white dark:border-opacity-10">
                        <div class="text-xs text-body-color">
                          {{ t ('news.by') }} {{ doc.author }}
                        </div>
                      </div>
                    </div>
                    <ContentRenderer :value="doc" :excerpt="false" />
                  </template>
                  <template #not-found>
                    <h2>{{ notFoundPage.title }}</h2>
                    <ContentRenderer v-if="notFoundPage" :value="notFoundPage">
                      <ContentRendererMarkdown :value="notFoundPage" />
                    </ContentRenderer>
                  </template>
                </ContentDoc>
              </article>
            </div>
            <NextPreviousPost v-if="page && page.isNews" />
          </div>
        </div>
      </div>
    </NuxtLayout>
  </div>
</template>
