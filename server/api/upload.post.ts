export default defineEventHandler(async (event) => {
  const data = await useStorage().getItemRaw('fs:test.txt');
  return {
    data
  }
})
