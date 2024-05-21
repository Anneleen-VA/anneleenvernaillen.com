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
  colors: {
    type: String,
    default: 'text-gray-500 hover:text-black',
    required: false,
  },
})
const appConfig = useAppConfig()
const socials = appConfig.socials.filter((social) => {
  if (social.title && social.url && social.icon)
    return (!props.filterSocial || props.filterSocial === social.title)

  return false
})
function iconColors() {
  return `${props.colors} mx-1`
}
</script>

<template>
  <a
    v-for="social, index in socials"
    :key="index"
    :href="social.url"
    target="_blank"
    :title="social.title"
    :alt="social.title"
    :aria-label="social.title"
    :class="iconColors()"
  >
    <Icon v-if="social.icon" :name="social.icon" :size="`${size}em`" />
  </a>
</template>
