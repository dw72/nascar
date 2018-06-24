import * as HTMLParser from 'fast-html-parser'

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
    const { data } = await this.$axios.get('https://www.premio.pl')
    const page = HTMLParser.parse(data, {})
    // @ts-ignore
    const banners = page.querySelectorAll('#carousel-top-carousel .item .banner')
    const slides = banners.map(item => {
      const link = item.querySelector('a')
      const image = item.querySelector('img')
      return {
        url: link ? link.attributes.href : '',
        img: image.attributes.src,
        alt: image.attributes.alt
      }
    })

    commit(FETCH_SLIDES_SUCCESS, slides)
  }
}
