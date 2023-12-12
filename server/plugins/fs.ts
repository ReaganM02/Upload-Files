import fileSystem from 'unstorage/drivers/fs'

export default defineNitroPlugin(() => {
  const storage = useStorage()

  const driver = fileSystem({
    base: './images'
  })
  storage.mount('fs', driver)
})