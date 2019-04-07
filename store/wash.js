import airtable from '@/services/airtable'
import { getData, putData } from '@/services/storage'

export const WASH_PRICELIST_REQUEST = 'WASH_PRICELIST_REQUEST'
export const WASH_PRICELIST_SUCCESS = 'WASH_PRICELIST_SUCCESS'

const store = 'car-wash-pricelist'

export const state = () => ({
  pricelist: []
})

export const getters = {}

export const mutations = {
  [WASH_PRICELIST_SUCCESS]: (state, pricelist) => {
    state.pricelist = pricelist
  }
}

export const actions = {
  async [WASH_PRICELIST_REQUEST]({ commit }) {
    // const dbPromise = getData(store)
    const apiPromise = new Promise((resolve, reject) => {
      let prices = []
      airtable('Cennik - Myjnia')
        .select({ view: 'Usługi' })
        .eachPage(
          (data, fetchNextPage) => {
            data.forEach(item => {
              prices.push({
                name: item.get('Nazwa').trim(),
                price_1: `${item.get('Cena (małe)')} zł`,
                price_2: `${item.get('Cena (średnie)')} zł`,
                price_3: `${item.get('Cena (duże)')} zł`
              })
            })

            fetchNextPage()
          },
          err => {
            if (err) {
              reject(err)
            } else {
              // putData(store, prices)
              resolve(prices)
            }
          }
        )
    })

    // let dbData = await dbPromise
    // const pricelist = dbData.length ? dbData : await apiPromise
    const pricelist = await apiPromise

    commit(WASH_PRICELIST_SUCCESS, pricelist)
  }
}
