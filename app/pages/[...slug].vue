<template>
  <div :class="isHydrated ? '' : 'opacity-60'">
    <HeaderImage />
    <div class="container max-w-screen-xl my-12 sm:my-16 xl:my-20">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
          <div class="prose m-auto">
            <article ref="content">
              <ContentDoc v-slot="{ doc }" :excerpt="false" class="animate__animated animate__fadeIn animate__fasters">
                <h1 v-if="doc.isNews">
                  {{ doc.title }}
                  <span v-if="doc.titleLine2">{{ doc.titleLine2 }}</span>
                </h1>
                <ContentRenderer :value="doc" :excerpt="false" />
              </ContentDoc>
            </article>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
