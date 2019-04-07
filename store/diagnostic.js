import airtable from '@/services/airtable'
import { getData, putData } from '@/services/storage'

export const DIAGNOSTIC_PRICELIST_REQUEST = 'DIAGNOSTIC_PRICELIST_REQUEST'
export const DIAGNOSTIC_PRICELIST_SUCCESS = 'DIAGNOSTIC_PRICELIST_SUCCESS'

const store = 'diagnostics-pricelist'

export const state = () => ({
  pricelist: []
})

export const getters = {}

export const mutations = {
  [DIAGNOSTIC_PRICELIST_SUCCESS]: (state, pricelist) => {
    state.pricelist = pricelist
  }
}

export const actions = {
  async [DIAGNOSTIC_PRICELIST_REQUEST]({ commit }) {
    const dbPromise = getData(store)
    const apiPromise = new Promise((resolve, reject) => {
      let prices = []
      airtable('Cennik - Stacja kontroli')
        .select({ view: 'Badania okresowe' })
        .eachPage(
          (data, fetchNextPage) => {
            data.forEach(item => {
              prices.push({
                name: item.get('Usługa').trim(),
                price: `${item.get('Cena')} zł`
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

    commit(DIAGNOSTIC_PRICELIST_SUCCESS, pricelist)
  }
}
