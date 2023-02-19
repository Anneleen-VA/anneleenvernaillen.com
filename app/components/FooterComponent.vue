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
    <div class="container max-w-screen-xl my-0 py-16">
      <div class="flex flex-wrap">
        <div class="w-1/4 md:w-1/5">
          <NuxtLink to="/">
            <NuxtImg
              src="avembleemgrey.png"
              class="object-contain h-[80px] pr-0 sm:mr-[32px] max-w-none"
              width="110"
              height="96"
              alt="Logo Anneleen Vernaillen"
              aria-label="Logo Anneleen Vernaillen"
            />
          </NuxtLink>
        </div>
        <div class="w-2/4 md:w-3/5 pr-10">
          <ul class="flex-wrap flex-col xl:border-l-dark-900 xl:border-l-2 pl-4 lg:columns-3 sm:columns-2">
            <li v-for="item, index in navigation" :key="index" class="relative group align-bottom">
              <NuxtLink
                :to="item._path"
                class="text-primary hover:text-white uppercase overflow-hidden leading-4 align-bottom flex py-2 pl-2 pr-10 xl:inline-flex xl:pl-1 xl:pr-0 xl:py-2 xl:ml-2 xl:mr-3"
                :class="linkClass(item._path)"
              >
                {{ item.title }}
              </NuxtLink>
            </li>
          </ul>
        </div>
        <div class="w-1/4 md:w-1/5 justify-end text-end">
          <SocialIcons colors="text-primary hover:text-white" />
        </div>
      </div>
    </div>
  </div>
  <div class="bg-black w-full border-t-[1px] border-primary">
    <div class="container max-w-screen-xl my-0">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8 py-3 text-white text-xs">
          {{ t('footer.copyright') }} {{ date }}
        </div>
      </div>
    </div>
  </div>
</template>
