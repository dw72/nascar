import { getSlider, putSlider } from '@/services/storage.js'
import { differenceInCalendarDays } from 'date-fns'

export const FETCH_SLIDES_REQUEST = 'FETCH_SLIDES_REQUEST'
export const FETCH_SLIDES_SUCCESS = 'FETCH_SLIDES_SUCCESS'

export const state = () => ({
  slides: []
})

export const getters = {}

export const mutations = {
  [FETCH_SLIDES_SUCCESS]: (state, slides) => (state.slides = slides)
}

export const actions = {
  async [FETCH_SLIDES_REQUEST]({ commit }) {
    let slider = await getSlider()

    if (
      !slider ||
      differenceInCalendarDays(new Date(), new Date(slider.date)) >= 1
    ) {
      const { data } = await this.$axios.get(
        '/.netlify/functions/getPremioSlider'
      )

      slider = { slides: data }

      putSlider(slider.slides)
    }

    commit(FETCH_SLIDES_SUCCESS, slider.slides)
  }
}
