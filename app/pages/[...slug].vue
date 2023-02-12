<script setup lang="ts">
const { t } = useI18n()
</script>

<template>
  <div :class="isHydrated ? '' : 'opacity-20 blur-sm'">
    <HeaderImage />
    <div class="container max-w-screen-xl my-12 sm:my-16 xl:my-20">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
          <div class="prose m-auto">
            <article ref="content" class="animate__animated animate__fadeIn">
              <ContentDoc v-slot="{ doc }" :excerpt="false">
                <h3 v-if="doc.isNews" class="!my-0">
                  {{ doc.title }}
                </h3>
                <h3 v-if="doc.titleLine2" class="!mt-0 mb-5">
                  {{ doc.titleLine2 }}
                </h3>
                <div v-if="doc.isNews" class="flex mb-5">
                  <div
                    class="flex pr-5"
                  >
                    <div class="w-full">
                      <div class="text-xs text-body-color">
                        {{ doc.date }}
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
              </ContentDoc>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
