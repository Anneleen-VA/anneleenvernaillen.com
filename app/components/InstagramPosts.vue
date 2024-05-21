<template>
  <div class="bg-primary-500 bg-opacity-[35%] w-full">
    <div class="container max-w-screen-xl">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8 mt-10 mb-2 animate__animated animate__fadeIn">
          <div class="mb-3 p-1">
            <SocialIcons filter-social="Instagram" :size="2" />
          </div>
          <InstagramIframe />
        </div>
      </div>
    </div>
  </div>
</template>
