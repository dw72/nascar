import Vue from 'vue'
import VeeValidate, { Validator } from 'vee-validate'
import polish from 'vee-validate/dist/locale/pl'

Validator.localize('pl', polish)

const dict = {
  custom: {
    lastname: {
      regex: (fieldName, params, data) => {
        return `Pole ${fieldName} może zawierać litery oraz myślnik.`
      }
    },
    street: {
      regex: (fieldName, params, data) => {
        return `Pole ${fieldName} może zawierać litery, cyfry, spacje oraz znak '/'.`
      }
    },
    zip: {
      regex: 'Niepoprawny kod'
    },
    phone: {
      regex: 'Podaj numer wraz z kodem kraju (+48600123123).'
    }
  }
}

Validator.localize('pl', dict)

Vue.use(VeeValidate, { locale: 'pl' })
