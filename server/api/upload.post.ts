export default defineEventHandler(async (event) => {
  const files = await readMultipartFormData(event)
  const uploadFilePaths:string[] = []
  files?.forEach((file) => {
    useStorage().setItemRaw(`fs:${file.filename}`, file.data)
    uploadFilePaths.push(`${getRequestURL(event).origin}/${file.filename}`)
  }) 
  return uploadFilePaths
});
