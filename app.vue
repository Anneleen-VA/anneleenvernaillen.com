<template>
  <NuxtLoadingIndicator color="#707070" />
  <main>
    <HeaderComponent />
    <ClientOnly>
      <HeaderImage />
    </ClientOnly>
    <div class="container max-w-screen-xl my-20">
      <div class="flex flex-wrap">
        <div class="w-full px-4 sm:px-6 lg:px-8 mb-10">
          <NuxtPage />
        </div>
      </div>
    </div>
  </main>
</template>
