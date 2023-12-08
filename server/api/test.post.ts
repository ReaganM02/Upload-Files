export default defineEventHandler(async(event) => {
  const files = await readMultipartFormData(event)

  const uploadedFilePaths:string[] = []

  files?.forEach(async (file) => {
    await useStorage().setItemRaw(`fs:${file.filename}`, file.data)
  })
  return 200
})
