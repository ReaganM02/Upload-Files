export default defineEventHandler(async(event) => {
  return await useStorage('test').getKeys()
})
