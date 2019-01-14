import { openDb } from 'idb'

const IDB_NAME = 'pphu-nascar'
const IDB_VERSION = 1

let db

const getDB = () => {
  if (!db) {
    try {
      db = openDb(IDB_NAME, IDB_VERSION, upgradeDb => {
        switch (upgradeDb.oldVersion) {
          case 0:
            upgradeDb.createObjectStore('slider', { keyPath: 'id' })
        }
      })
    } catch (err) {
      console.error('Local database open failed:', err.stack)
    }
  }

  return db
}

const getStore = async (name, mode = 'readonly') => {
  const db = await getDB()
  return db.transaction(name, mode).objectStore(name)
}

export const getSlider = async () => {
  const store = await getStore('slider')
  return store.get(1)
}

export const putSlider = async slides => {
  const store = await getStore('slider', 'readwrite')
  await store.put({ id: 1, date: new Date(), slides })
}
