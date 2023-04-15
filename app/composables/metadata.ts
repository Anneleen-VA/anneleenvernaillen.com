export function setMetaData(pageTitle: string) {
  const { t } = useI18n()
  useHead({
    meta: [
      {
        name: 'og:title',
        content: `${pageTitle} - Anneleen Vernaillen | Visual Artist`,
      },
      {
        property: 'og:description',
        content: t('website.description'),
      },
      {
        property: 'og:image',
        content: 'https://anneleenvernaillen.com/anneleenvernaillen-og.png',
      },
    ],
  })
  useSeoMeta({
    ogTitle: `${pageTitle} - Anneleen Vernaillen | Visual Artist`,
    description: () => t('website.description'),
    ogDescription: () => t('website.description'),
    ogImageUrl: 'https://anneleenvernaillen.com/anneleenvernaillen-og.png',
  })
}
