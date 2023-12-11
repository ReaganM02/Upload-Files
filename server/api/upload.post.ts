export default defineEventHandler(async(event) => {
  const files = await readMultipartFormData(event);

  const uploadedFilePaths: string[] = [];
  
  // Use map instead of forEach to create an array of promises
  const uploadedPromises = files?.map(async (file) => {
    await useStorage().setItemRaw(`fs:${file.filename}`, file.data);
    uploadedFilePaths.push(`/${file.filename}`);
  });
  
  // Use Promise.all to wait for all promises to resolve
  await Promise.all(uploadedPromises!);
  
  return uploadedFilePaths;
  
})
