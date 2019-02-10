import airtable from '@/services/airtable'
import { getData, putData } from '@/services/storage'

const REGENERATION_PRICELIST_REQUEST = 'REGENERATION_PRICELIST_REQUEST'
const REGENERATION_PRICELIST_SUCCESS = 'REGENERATION_PRICELIST_SUCCESS'

export const state = () => ({
  pricelist: []
})

const store = 'regeneration-pricelist'

export const getters = {}

export const mutations = {
  [REGENERATION_PRICELIST_SUCCESS]: (state, pricelist) => {
    state.pricelist = pricelist
  }
}

export const actions = {
  async [REGENERATION_PRICELIST_REQUEST]({ commit }) {
    const dbPromise = getData(store)
    const apiPromise = new Promise((resolve, reject) => {
      let prices = []
      airtable('Cennik - Regeneracja DPF')
        .select({ view: 'Cennik', maxRecords: 4 })
        .eachPage(
          (data, fetchNextPage) => {
            data.forEach(item => {
              prices.push({
                name: item.get('Typ pojazdu'),
                icon: item.get('Ikona'),
                price: item.get('Cena'),
                promoPrice: item.get('Promocja')
              })
            })

            fetchNextPage()
          },
          err => {
            if (err) {
              reject(err)
            } else {
              putData(store, prices)
              resolve(prices)
            }
          }
        )
    })

    let dbData = await dbPromise
    const pricelist = dbData.length ? dbData : await apiPromise

    commit(REGENERATION_PRICELIST_SUCCESS, pricelist)
  }
}
