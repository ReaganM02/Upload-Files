export default defineEventHandler(async (event) => {
  const data = await useStorage().getKeys('fs');
  return {
    data
  }
})
