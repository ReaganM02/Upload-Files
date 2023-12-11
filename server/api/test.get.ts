export default defineEventHandler(async(event) => {
  return await useStorage('fs').getKeys()
})
