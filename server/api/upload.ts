export default defineEventHandler(async (event) => {
  const data = await useStorage().getItem('fs:test.txt');
  return {
    data
  }
})