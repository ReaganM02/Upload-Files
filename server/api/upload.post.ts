export default defineEventHandler(async (event) => {
  const data = await useStorage().getItem('root:public:hello');
  return {
    data
  }
})
