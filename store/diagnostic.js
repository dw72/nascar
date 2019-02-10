import airtable from '@/services/airtable'

export const DIAGNOSTIC_PRICELIST_REQUEST = 'DIAGNOSTIC_PRICELIST_REQUEST'
export const DIAGNOSTIC_ADD_PRICE = 'DIAGNOSTIC_ADD_PRICE'
export const DIAGNOSTICS_CLEAR_PRICELIST = 'DIAGNOSTICS_CLEAR_PRICELIST'

export const state = () => ({
  pricelist: []
})

export const getters = {}

export const mutations = {
  [DIAGNOSTICS_CLEAR_PRICELIST]: state => {
    state.pricelist = []
  },
  [DIAGNOSTIC_ADD_PRICE]: (state, price) => {
    state.pricelist.push(price)
  }
}

export const actions = {
  async [DIAGNOSTIC_PRICELIST_REQUEST]({ commit }) {
    commit(DIAGNOSTICS_CLEAR_PRICELIST)
    airtable('Cennik - Stacja kontroli')
      .select({ view: 'Badania okresowe' })
      .eachPage(data =>
        data.forEach(item => {
          commit(DIAGNOSTIC_ADD_PRICE, {
            name: item.get('Usługa'),
            price: item.get('Cena')
          })
        })
      )
  }
}
