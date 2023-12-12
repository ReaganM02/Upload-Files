export default defineEventHandler(async (event) => {
  await useStorage().setItem('fs:test', "works");
  return await useStorage().getKeys('root');
});
