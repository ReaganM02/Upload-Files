export default defineEventHandler(async(event) => {
  return await useStorage().getKeys('assets');
})
