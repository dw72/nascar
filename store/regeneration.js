import airtable from '@/services/airtable'

const REGENERATION_PRICELIST_REQUEST = 'REGENERATION_PRICELIST_REQUEST'
const REGENERATION_ADD_PRICE = 'REGENERATION_ADD_PRICE'
const REGENERATION_CLEAR_PRICELIST = 'REGENERATION_CLEAR_PRICELIST'

export const state = () => ({
  pricelist: []
})

export const getters = {}

export const mutations = {
  [REGENERATION_CLEAR_PRICELIST]: state => {
    state.pricelist = []
  },
  [REGENERATION_ADD_PRICE]: (state, price) => {
    state.pricelist.push(price)
  }
}

export const actions = {
  async [REGENERATION_PRICELIST_REQUEST]({ commit }) {
    commit(REGENERATION_CLEAR_PRICELIST)
    airtable('Cennik - Regenracja DPF')
      .select({ view: 'Cennik' })
      .eachPage(data =>
        data.forEach(item => {
          commit(REGENERATION_ADD_PRICE, {
            name: item.get('Typ pojazdu'),
            icon: item.get('Ikona'),
            price: item.get('Cena'),
            promoPrice: item.get('Promocja')
          })
        })
      )
  }
}
