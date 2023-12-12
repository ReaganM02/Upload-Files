import fsDriver from 'unstorage/drivers/fs'
import { createStorage } from "unstorage"

export default defineNitroPlugin(() => {
  const storage = createStorage({});
  storage.mount('driver', fsDriver({base: './public'}))
})