<script setup lang="ts">
import { ref } from 'vue'
import { VuePDF, usePDF } from '@tato30/vue-pdf'

const page = ref(1)
const { pdf, pages, info } = usePDF('/pdf/CROSSMagazine_01midi_printfile.pdf')

console.log(`Document has ${pages} pages`)
console.log(`Document info: ${info}`)
</script>

<template>
  <div class="">
    <div class="mb-5 flex justify-center">
      <button
        class="text-white rounded-lg font-medium bg-black px-3 mx-3"
        :class="page === 1 ? 'opacity-50 cursor-not-allowed' : ''"
        @click="page = page > 1 ? page - 1 : page"
      >
        Prev
      </button>
      <span>{{ page }} / {{ pages }}</span>
      <button
        class="text-white rounded-lg font-medium bg-black px-3 mx-3"
        :class="page === pages ? 'opacity-50 cursor-not-allowed' : ''"
        @click="page = page < pages ? page + 1 : page"
      >
        Next
      </button>
    </div>
    <div class=" flex justify-center">
      <VuePDF :pdf="pdf" :page="page" />
    </div>
  </div>
</template>
