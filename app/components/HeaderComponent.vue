<script setup lang="ts">
import { useMobileNav } from '../stores/mobileNav'

const mobileNav = useMobileNav()
const { t } = useI18n()
const navbarTogglerClass = computed(() => {
  return mobileNav.visible ? 'navbarTogglerActive !fixed' : ''
})
const navbarCollapseClass = computed(() => {
  return mobileNav.visible ? '' : 'hidden'
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
            @click="mobileNav.toggle()"
          >
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
          </button>

          <nav
            id="navbarCollapse"
            class="fixed w-screen h-screen left-0 right-0 top-0 bottom-0 z-20 justify-start
          bg-[#FFFEFD]
            shadow-lg
            xl:hidden"
            :class="navbarCollapseClass"
            aria-label="mobile-nav"
          >
            <div
              class="bg-[#DCD8D1] bg-opacity-[35%]
              fixed w-screen h-screen justify-center items-center
              pt-24 pb-5 pr-2 sm:pt-36"
            >
              <div class="pl-14 sm:w-1/3 sm:pl-5 md:pl-20 mx-auto">
                <menu-component />
                <NuxtLink to="/" class="text-left block pt-5">
                  <NuxtImg
                    src="/images/avembleemblag.png"
                    class="object-contain h-[55px] my-5 ml-[-18px]"
                    width="110"
                    height="96"
                    alt="Logo Anneleen Vernaillen"
                    aria-label="Logo Anneleen Vernaillen"
                  />
                </NuxtLink>
              </div>
            </div>
          </nav>
          <nav
            id="navbarCollapse"
            class="hidden xl:block justify-end w-fit max-w-full pt-1 static bg-transparent py-0"
            aria-label="desktop-nav"
          >
            <menu-component class="pl-4 flex border-l-dark-900 border-l-2" />
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
