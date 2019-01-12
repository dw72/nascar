const pkg = require('./package')
require('dotenv').config()

module.exports = {
  mode: 'spa',

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
      {
        rel: 'stylesheet',
        href: 'https://fonts.googleapis.com/css?family=Montserrat%7CExo+2'
      },
      {
        rel: 'stylesheet',
        href:
          'https://cdn.materialdesignicons.com/2.0.46/css/materialdesignicons.min.css'
      }
    ]
  },

  /*
  ** Customize the progress-bar color
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
  ** Global CSS
  */
  css: ['swiper/dist/css/swiper.css', '@/assets/scss/theme.scss'],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: '@/plugins/swiper', ssr: false },
    { src: '@/plugins/vue-googlemaps', ssr: false }
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    'nuxt-sass-resources-loader'
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },
  /*
  ** Nuxt SASS resources loader module configuration
  */
  sassResources: [
    '@/assets/scss/variables/*.scss',
    '@/assets/scss/mixins/**/*.scss'
  ],

  /*
  ** Environment variables
  */
  env: {
    GMAPS_API_KEY: process.env.GMAPS_API_KEY
  },

  /*
  ** Nuxt generate config
  */
  generate: { fallback: true, subFolders: false },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
