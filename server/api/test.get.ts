export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  await useStorage().setItem('fs:storage', query);
  console.log('Hello World')
  return await useStorage().getItem('fs:storage');
});
