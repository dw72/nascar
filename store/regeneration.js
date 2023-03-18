import { format } from 'date-fns'
import airtable from '@/services/airtable'
import { getData, putData } from '@/services/storage'

export const REGENERATION_PRICELIST_REQUEST = 'REGENERATION_PRICELIST_REQUEST'
export const REGENERATION_PRICELIST_SUCCESS = 'REGENERATION_PRICELIST_SUCCESS'
export const REGENERATION_PLACE_ORDER = 'REGENERATION_PLACE_ORDER'
export const REGENERATION_ORDER_PLACED = 'REGENERATION_ORDER_PLACED'
export const REGENERATION_SET_FORM_HEIGHT = 'REGENERATION_SET_FORM_HEIGHT'

export const state = () => ({
  pricelist: [],
  orderId: '',
  formHeight: 0
})

const store = 'regeneration-pricelist'

export const getters = {}

export const mutations = {
  [REGENERATION_PRICELIST_SUCCESS]: (state, pricelist) => {
    state.pricelist = pricelist
  },
  [REGENERATION_ORDER_PLACED]: (state, orderId) => {
    state.orderId = orderId
  },
  [REGENERATION_SET_FORM_HEIGHT]: (state, height) => {
    state.formHeight = height
  }
}

export const actions = {
  async [REGENERATION_PRICELIST_REQUEST]({ commit }) {
    const dbPromise = getData(store)
    const apiPromise = new Promise((resolve, reject) => {
      const prices = []
      airtable('Cennik - Regeneracja DPF')
        .select({ view: 'Cennik', maxRecords: 4 })
        .eachPage(
          (data, fetchNextPage) => {
            data.forEach((item) => {
              prices.push({
                name: item.get('Typ pojazdu'),
                icon: item.get('Ikona'),
                price: item.get('Cena'),
                promoPrice: item.get('Promocja')
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

    commit(REGENERATION_PRICELIST_SUCCESS, pricelist)
  },
  [REGENERATION_PLACE_ORDER]({ commit }, order) {
    const date = new Date()
    const phone = order.phone.replace(/(\s|\(|\))/g, '')

    airtable('Regeneracja DPF').create(
      // prettier-ignore
      {
        'Nazwa': `${format(date, 'YYYYMMDDHHmm')}${phone}`,
        'Imię': order.firstname,
        'Nazwisko': order.lastname,
        'Ulica': order.street,
        'Kod pocztowy': order.zip,
        'Miejscowość': order.city,
        'Poczta': order.post,
        'Data wpływu': format(new Date(), 'YYYY-MM-DD'),
        'Telefon': phone,
        'Email': order.email
      },
      (err, record) => {
        if (err) {
          console.log(err)
          return
        }
        commit(REGENERATION_ORDER_PLACED, record.getId())
      }
    )
  }
}
