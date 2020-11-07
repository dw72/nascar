import { openDB } from 'idb'

const IDB_NAME = 'pphu-nascar'
const IDB_VERSION = 4

let db

const getDB = () => {
	if (!db) {
		try {
			db = openDB(IDB_NAME, IDB_VERSION, {
				upgrade(idb, oldVersion) {
					switch (oldVersion) {
						case 0:
							idb.createObjectStore('slider', { keyPath: 'id' })
						case 1:
							idb.createObjectStore('diagnostics-pricelist', { keyPath: 'id' })
							idb.createObjectStore('regeneration-pricelist', { keyPath: 'id' })
						case 2:
							idb.createObjectStore('wash-pricelist', { keyPath: 'id' })
						case 3:
							idb.deleteObjectStore('slider')
					}
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

export const getData = async storeName => {
	const store = await getStore(storeName)
	return store.getAll()
}

export const putData = async (storeName, data) => {
	const store = await getStore(storeName, 'readwrite')
	await Promise.all(
		data.map((item, index) => {
			store.put({ id: index, ...item })
		})
	)
}
