import Vue from 'vue'
import 'vue-googlemaps/dist/vue-googlemaps.css'
import VueGoogleMaps from 'vue-googlemaps'

console.log(process.env.GMAPS_API_KEY)

Vue.use(VueGoogleMaps, {
  load: {
    apiKey: process.env.GMAPS_API_KEY
  }
})
