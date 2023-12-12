export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  // await useStorage().setItem('fs:hello', query);
  return await useStorage().getKeys();
});
