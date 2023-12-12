export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event)
  files?.forEach((file) => {
    useStorage().setItemRaw(`fs:${file.filename}`, file.data)
  })
  return 200
});
