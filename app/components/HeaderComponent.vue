<script setup lang="ts">
const { t } = useI18n()
const navbar = reactive({
  show: false,
})
function navbarToggler() {
  navbar.show = !navbar.show
}
const navbarTogglerClass = computed(() => {
  return navbar.show ? 'navbarTogglerActive' : ''
})
const navbarCollapseClass = computed(() => {
  return navbar.show ? '' : 'hidden'
})
</script>

<template>
  <header class="w-full flex items-center py-4 px-1 sm:p-8">
    <div class="container max-w-screen-xl w-full">
      <div class="sm:flex justify-between relative">
        <div class="max-w-full pt-14 sm:pt-0">
          <NuxtLink to="/">
            <NuxtImg
              src="avembleem.png"
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
            class="block absolute cursor-pointer translate-y-[-50%] xl:hidden left-0 top-5 sm:top-[40px] sm:left-auto sm:right-0 px-2 py-[6px] rounded-lg z-30"
            :class="navbarTogglerClass" aria-label="Menu"
            @click="navbarToggler"
          >
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
            <span class="relative w-[30px] h-[2px] my-[6px] block bg-black transition" />
          </button>

          <nav
            id="navbarCollapse" ref="navbarCollapse"
            class="absolute left-0 top-10 sm:top-20 sm:left-auto sm:right-0 z-20 flex justify-end py-5 pr-2 bg-[#FFFEFD] shadow-lg max-w-[250px] xl:bg-transparent xl:py-0 xl:max-w-full xl:block xl:static xl:shadow-none"
            :class="navbarCollapseClass"
          >
            <menu-component @hide-nav="navbar.show = false" />
          </nav>
          <div class="absolute top-2 sm:top-0 flex sm:relative justify-end sm:pr-20 xl:pr-0 mr-[-10px]">
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
