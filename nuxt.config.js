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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
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
    { src: '@/plugins/vue-googlemaps', ssr: false },
    '@/plugins/vee-validate',
    '@/plugins/vue-visible'
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    '@nuxtjs/dotenv',
    '@nuxtjs/pwa',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    'nuxt-webfontloader'
  ],
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
    proxy: true
  },
  proxy: {
    'http://localhost:3000/.netlify/': {
      target: 'http://localhost:9000',
      pathRewrite: { '^/.netlify/functions/': '' }
    }
  },
  workbox: {
    runtimeCaching: [
      {
        urlPattern: '^https://www.premio.pl/assets/resized_images/.*',
        handler: 'cacheFirst',
        strategyOptions: {
          cacheName: 'premio-slider-images',
          cacheableResponse: { statuses: [0, 200] },
          cacheExpiration: {
            maxEntries: 10,
            maxAgeSeconds: 120
          }
        }
      }
    ]
  },
  manifest: {
    name: 'PPHU Nascar',
    short_name: 'Nascar',
    theme_color: '#00569d',
    background_color: '#00569d'
  },
  styleResources: {
    sass: [
      '~assets/scss/variables/_*.scss',
      '~assets/scss/components/**/_*.scss'
    ]
  },
  webfontloader: {
    google: {
      families: ['Montserrat', 'Exo+2']
    }
  },

  /*
  ** Environment variables
  */
  env: {
    AIRTABLE_API_KEY: process.env.AIRTABLE_API_KEY,
    AIRTABLE_BASE_ID: process.env.AIRTABLE_BASE_ID,
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
