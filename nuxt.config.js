require('dotenv').config()

export default {
  ssr: false,
  target: 'static',

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
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    noscript: [
      {
        innerHTML: 'Strona do poprawnego działania wymaga włączonego Javascipt!'
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
  css: ['@/assets/scss/theme.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    { src: '@/plugins/vue-googlemaps', ssr: false },
    '@/plugins/vue-visible',
    '@/plugins/lazysizes',
    '@/plugins/vuelidate'
  ],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://github.com/nuxt-community/axios-module#usage
    '@nuxtjs/axios',
    ['@nuxtjs/gtm', { id: process.env.GTM_KEY }],
    '@nuxtjs/pwa',
    'nuxt-webfontloader'
  ],
  buildModules: [
    ['@nuxtjs/dotenv', { systemvars: true }],
    '@nuxtjs/eslint-module',
    '@nuxtjs/style-resources',
    '@nuxtjs/svg-sprite',
    'nuxt-responsive-loader'
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
        handler: 'staleWhileRevalidate',
        strategyOptions: {
          cacheName: 'premio-slider-images'
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
    scss: [
      '~assets/scss/variables/**/_*.scss',
      '~assets/scss/components/**/_*.scss'
    ]
  },
  webfontloader: {
    google: {
      families: ['Montserrat:400', 'Exo+2:400,700']
    }
  },
  responsiveLoader: {
    adapter: require('responsive-loader/sharp'),
    name: 'img/[hash:7]-[width].[ext]',
    limit: 8192,
    min: 250,
    max: 1140,
    steps: 9,
    quality: 75
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
  generate: { fallback: true, subFolders: false }
}
