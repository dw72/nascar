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
    const { data } = await this.$axios.get(
      '/.netlify/functions/getPremioSlider'
    )

    commit(FETCH_SLIDES_SUCCESS, data)
  }
}
