// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  nitro: {
    storage: {
      fs: {
        driver: 'fs',
        base: '.output/images'
      }
    },
    devStorage: {
      fs: {
        driver: 'fs',
        base: './images'
      }
    }
  },
});
