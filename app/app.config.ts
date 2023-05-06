export default defineAppConfig({
  socials: [
    {
      title: 'Instagram',
      url: 'https://instagram.com/anneleenvernaillen',
      icon: 'mdi:instagram'
    },
    {
      title: 'LinkedIn',
      url: 'https://www.linkedin.com/in/anneleen-vernaillen',
      icon: 'mdi:linkedin'
    },
    {
      title: 'WhatsApp',
      url: 'https://wa.me/+32496568738',
      icon: 'mdi:whatsapp'
    }
  ],
  instagram: {
    enabled: true,
    wpPageId: 30201,
    wpBaseUrl: 'https://wpanneleen.vernaillen.com/'
  },
  dateFormat: 'MMMM YYYY',
  mailchimpLink: 'https://mailchi.mp/360379361b88/subscriptionpage'
})

// icon codes (zoals hierboven bij de socials) kunnen bij Iconify opgezocht worden:
// https://iconify.design/
