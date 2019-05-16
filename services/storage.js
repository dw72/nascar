import { openDB } from 'idb'

const IDB_NAME = 'pphu-nascar'
const IDB_VERSION = 2

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
							idb.createObjectStore('diagnostics-pricelist', {
								keyPath: 'id'
							})
							idb.createObjectStore('regeneration-pricelist', {
								keyPath: 'id'
							})
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

export const getSlider = async () => {
	const store = await getStore('slider')
	return store.get(1)
}

export const putSlider = async slides => {
	const store = await getStore('slider', 'readwrite')
	await store.put({ id: 1, date: new Date(), slides })
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
