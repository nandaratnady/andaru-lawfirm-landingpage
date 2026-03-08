// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  tailwindcss: {
    configPath: 'tailwind.config.js'
  },
  app: {
    head: {
      title: "Andaru Lawfirm | Konsultan Hukum Perusahaan",

      meta: [
        {
          name: "description",
          content: "Andaru Lawfirm adalah konsultan hukum perusahaan yang memberikan layanan legal corporate consultant, legal compliance, kontrak bisnis, dan pendampingan sengketa."
        },

        {
          name: "keywords",
          content: "konsultan hukum perusahaan, law firm bangkalan, jasa hukum perusahaan, legal corporate consultant"
        }
      ]
    }
  }
})
