<script setup lang="ts">
const { t } = useI18n()
const date: number = new Date().getFullYear()

const { data: navigation } = await useAsyncData('navigation', () =>
  queryContent('/')
    .where({ navigation: true })
    .sort({ _file: 1 })
    .find(),
)

const localePath = useLocalePath()
const linkClass = (path?: string) => {
  if (!path)
    return ''
  const currentRoute = useRoute().path
  let classToAdd = ''
  if (
    (path === '/' && currentRoute === localePath('/'))
    || (path !== '/' && currentRoute.startsWith(localePath(path)))
  )
    classToAdd = 'text-white'
  return classToAdd
}
</script>

<template>
  <div class="bg-black w-full">
    <div class="container max-w-screen-xl my-0 py-10 sm:py-16">
      <div class="sm:flex sm:flex-wrap">
        <div class="sm:order-1 w-full px-10 mb-12 sm:mb-0 sm:w-1/4 lg:w-1/5">
          <NuxtLink to="/">
            <NuxtImg
              src="/images/avembleemgrey.png"
              class="object-contain h-[60px] pr-0 sm:ml-0 sm:mr-[40px] max-w-none mx-auto"
              width="110"
              height="96"
              alt="Logo Anneleen Vernaillen"
              aria-label="Logo Anneleen Vernaillen"
            />
          </NuxtLink>
        </div>
        <div class="sm:order-3 w-full sm:w-1/4 lg:w-1/5 px-10 mt-[50px] sm:my-0 sm:justify-end text-center sm:text-end">
          <SocialIcons colors="text-primary hover:text-white" />
        </div>
        <div class="sm:order-2 w-full sm:w-2/4 lg:w-3/5 mt-10 mb-6 sm:my-0">
          <ul class="flex-wrap flex-col xl:border-l-dark-900 xl:border-l-2 sm:columns-2 lg:columns-3 text-center sm:text-left">
            <li v-for="item, index in navigation" :key="index" class="relative group align-bottom text-center sm:text-left">
              <NuxtLink
                :to="item._path"
                class="text-primary hover:text-white uppercase overflow-hidden leading-4 align-bottom py-2 xl:inline-flex xl:pl-1 xl:pr-0 xl:py-2 xl:ml-2 xl:mr-3"
                :class="linkClass(item._path)"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <div class="bg-black w-full border-t-[1px] border-primary">
    <div class="container max-w-screen-xl my-0">
      <div class="text-center sm:text-left sm:flex sm:flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8 py-3 text-white text-xs">
          {{ t('footer.copyright') }} {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>
