<script lang="ts" setup>
const props = defineProps({
  filterSocial: {
    type: String,
    default: null,
    required: false,
  },
  size: {
    type: Number,
    default: 1.5,
    required: false,
  },
})
const appConfig = useAppConfig()
const socials = appConfig.socials.filter((social) => {
  if (social.title && social.url && social.icon)
    return (!props.filterSocial || props.filterSocial === social.title)

  return false
})
</script>

<template>
  <a
    v-for="social, index in socials"
    :key="index"
    :href="social.url" target="_blank" :title="social.title"
    :alt="social.title" :aria-label="social.title"
    class="text-gray hover:text-black mx-1"
  >
    <Icon v-if="social.icon" :name="social.icon" :size="`${size}em`" />
  </a>
</template>
