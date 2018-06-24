require('dotenv').config()

module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    htmlAttrs: {
      lang: 'pl'
    },
    title: 'Wszystko czego potrzebuje twój samochód',
    titleTemplate: '%s | PPHU Nascar',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { 'http-equiv': 'X-UA-Compatible', content: 'ie=edge' },
      { hid: 'description', name: 'description', content: 'Nascar website' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat%7CExo+2' },
      { rel: 'stylesheet', href: 'https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css' }
    ]
  },
  /*
  ** Environment variables
  */
  env: {
    GMAPS_API_KEY: process.env.GMAPS_API_KEY
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Router configuration
  */
  router: {
    linkActiveClass: 'menu__link--active',
    linkExactActiveClass: 'menu__link--exact'
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend(config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    },
    extractCSS: true
  },
  generate: { fallback: true, subFolders: false },
  css: ['swiper/dist/css/swiper.css', '@/assets/scss/theme.scss'],
  modules: ['@nuxtjs/dotenv', '@nuxtjs/axios', 'nuxt-sass-resources-loader'],
  sassResources: ['@/assets/scss/variables/*.scss', '@/assets/scss/mixins/**/*.scss'],
  plugins: [{ src: '@/plugins/swiper', ssr: false }, { src: '@/plugins/vue-googlemaps', ssr: false }]
}
