<script setup lang="ts">
const { t } = useI18n()
const navbar = reactive({
  show: false,
})
function navbarToggler() {
  navbar.show = !navbar.show
}
const navbarTogglerClass = computed(() => {
  return navbar.show ? 'navbarTogglerActive !fixed' : ''
})
const navbarCollapseClass = computed(() => {
  return navbar.show ? '' : 'hidden'
})
</script>

<template>
  <header class="w-full flex items-center py-4 px-1 sm:p-8">
    <div class="container max-w-screen-xl w-full">
      <div class="sm:flex justify-between">
        <div class="max-w-full pt-14 sm:pt-0">
          <NuxtLink to="/">
            <NuxtImg
              src="/images/avembleem.png"
              class="object-contain h-[55px] sm:h-[80px] pr-0 sm:mr-[32px] max-w-none mx-auto"
              width="110"
              height="96"
              alt="Logo Anneleen Vernaillen"
              aria-label="Logo Anneleen Vernaillen"
            />
          </NuxtLink>
        </div>
        <div class="max-w-full">
          <router-link to="/">
            <div class="pt-[22px] sm:pt-[28px] whitespace-nowrap">
              <h1 class="mb-0 text-2xl sm:mx-0 mx-auto table block whitespace-nowrap">
                {{ t('header.title') }}
              </h1>
              <h4 class="leading-4 sm:mx-0 mx-auto table block whitespace-nowrap">
                {{ t('header.subtitle') }}
              </h4>
            </div>
          </router-link>
        </div>
        <div class="flex px-2 justify-end items-center w-full">
          <button
            id="navbarToggler"
            class="block absolute cursor-pointer translate-y-[-50%] xl:hidden left-8 top-10 sm:top-[68px] sm:left-auto sm:right-10 px-2 py-[6px] z-30"
            :class="navbarTogglerClass" aria-label="Menu"
            @click="navbarToggler"
          >
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
          </button>

          <nav
            id="navbarCollapse" ref="navbarCollapse"
            class="fixed sm:absolute left-0 right-0 top-0 bottom-0 sm:bottom-auto w-full sm:w-fit sm:max-w-[250px] sm:top-24 sm:left-auto sm:right-10 z-20 justify-start sm:justify-end py-5 pr-2 bg-[#DCD8D1] sm:bg-[#FFFEFD] shadow-lg xl:bg-transparent xl:py-0 xl:max-w-full xl:block xl:static xl:shadow-none"
            :class="navbarCollapseClass"
          >
            <menu-component @hide-nav="navbar.show = false" />
            <NuxtLink to="/" class="text-left sm:hidden">
              <NuxtImg
                src="/images/avembleemblag.png"
                class="object-contain h-[55px] my-5 mx-7"
                width="110"
                height="96"
                alt="Logo Anneleen Vernaillen"
                aria-label="Logo Anneleen Vernaillen"
              />
            </NuxtLink>
          </nav>
          <div class="absolute flex top-7 sm:top-0 sm:relative justify-end sm:pr-20 xl:pr-0 xl:mr-[-10px]">
            <social-icons />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
button#navbarToggler:hover,
button#navbarToggler:active,
button#navbarToggler:focus {
  background: inherit;
  background-color: inherit !important;
  box-shadow: inherit !important;
}
</style>
