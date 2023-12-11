import fsDriver from "unstorage/drivers/fs";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: {
    storage: {
      test: {
        driver: 'fs',
        base: './images'
      },
      fs: {
        driver: 'fs',
        base: './data',
      },
    }
  }
})
