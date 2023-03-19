declare module 'nuxt/schema' {
    interface AppConfigInput {
        /** Theme configuration */
        socials: {
          title: string,
          url: string,
          icon: string,
        }
        tagembed: {
          id: string,
        },
        dateFormat: string,
        mailchimpLink: string,
    }
}
// It is always important to ensure you import/export something when augmenting a type
export { }
