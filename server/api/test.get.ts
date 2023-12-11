export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  await useStorage().setItem('fs:storage', query);
  return await useStorage().getItem('fs:storage');
});
