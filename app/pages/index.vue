<script setup lang="ts">
const { t } = useI18n()
const { trigger } = usePolitePopup()
trigger()

setMetaData('Home')
</script>

<template>
  <div>
    <NuxtLayout>
      <HeaderImage />
      <HighlightPages />
      <div class="bg-primary-500 bg-opacity-[35%] w-full">
        <div class="container max-w-screen-xl my-12 sm:my-16 xl:my-20">
          <div class="flex flex-wrap">
            <div class="w-full px-4 sm:px-6 lg:px-8 my-12 sm:my-16 xl:my-20 mb-16">
              <div class="prose m-auto">
                <article class="animate__animated animate__fadeIn">
                  <ContentDoc />
                </article>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container max-w-screen-xl my-20">
        <div class="flex flex-wrap">
          <div class="w-full px-4 sm:px-6 lg:px-8">
            <h2>{{ t('news.titleOnHomepage') }}</h2>
            <BlogPostList :nr-of-posts="1" />
          </div>
        </div>
      </div>
      <InstagramPosts />
    </NuxtLayout>
  </div>
</template>
