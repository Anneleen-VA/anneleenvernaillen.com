<script setup lang="ts">
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
  <header class="w-full flex items-center p-10">
    <div class="container-fluid w-full">
      <div class="sm:flex justify-between relative">
        <div class="max-w-full pt-20 sm:pt-0">
          <router-link to="/">
            <nuxt-img
              src="/avembleem-temp.png"
              class="h-[96px] pr-0 sm:pr-[32px] lg:pr-[40px] max-w-none mx-auto md:mx-0"
            />
          </router-link>
        </div>
        <div class="max-w-full">
          <router-link to="/">
            <div class="pt-[33px]">
              <svg
                class="mx-auto sm:mx-0 sm:w-[200px]" width="246" height="25"
                viewBox="0 0 246 25"
              >
                <text
                  id="Anneleen_Vernaillen" data-name="Anneleen Vernaillen" transform="translate(0 20)" fill="#222"
                  font-size="22" font-family="'Poppins', Helvetica Neue" font-weight="500"
                >
                  <tspan x="0" y="0">ANNELEEN VERNAILLEN</tspan>
                </text>
              </svg>
            </div>
            <h4 class="leading-10 sm:leading-4 table mx-auto sm:block sm:mx-0">
              VISUAL ARTIST
            </h4>
          </router-link>
        </div>
        <div class="flex px-4 justify-end items-center w-full">
          <button
            id="navbarToggler"
            class="block absolute cursor-pointer translate-y-[-50%] xl:hidden left-0 top-0 sm:top-8 sm:left-auto sm:right-0 px-3 py-[6px] rounded-lg z-30"
            :class="navbarTogglerClass" @click="navbarToggler"
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
          <div class="absolute top-0 flex sm:relative justify-end pt-2 sm:pr-20 xl:pr-0 mr-[-10px]">
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
