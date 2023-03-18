import base from '@/services/airtable'
import { getData, putData } from '@/services/storage'

export const DIAGNOSTICS_PRICELIST_REQUEST = 'DIAGNOSTICS_PRICELIST_REQUEST'
export const DIAGNOSTICS_PRICELIST_SUCCESS = 'DIAGNOSTICS_PRICELIST_SUCCESS'

const store = 'diagnostics-pricelist'

export const state = () => ({
  pricelist: []
})

export const getters = {}

export const mutations = {
  [DIAGNOSTICS_PRICELIST_SUCCESS]: (state, pricelist) => {
    state.pricelist = pricelist
  }
}

export const actions = {
  async [DIAGNOSTICS_PRICELIST_REQUEST]({ commit }) {
    const dbPromise = getData(store)
    const apiPromise = new Promise((resolve, reject) => {
      const prices = []
      base('Cennik - Stacja kontroli')
        .select({ view: 'Badania okresowe' })
        .eachPage(
          (data, fetchNextPage) => {
            data.forEach((item) => {
              prices.push({
                name: item.get('Usługa').trim(),
                price: `${item.get('Cena')} zł`
              })
            })

            fetchNextPage()
          },
          (err) => {
            if (err) {
              reject(err)
            } else {
              putData(store, prices)
              resolve(prices)
            }
          }
        )
    })

    const dbData = await dbPromise
    const pricelist = dbData.length ? dbData : await apiPromise

    commit(DIAGNOSTICS_PRICELIST_SUCCESS, pricelist)
  }
}
