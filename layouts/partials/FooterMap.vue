<template>
  <div class="map__wrapper">
    <no-ssr>
      <googlemaps-map
        ref="gmap"
        :center="center"
        :zoom="zoom"
        :options="options"
        class="map"
        @tilesloaded="disableTabstops"
      >
        <googlemaps-marker :position="nascar" :icon="icon" :clickable="false" title="PPHU Nascar"/>
      </googlemaps-map>
    </no-ssr>
  </div>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 51.695021, lng: 17.445434 },
      nascar: { lat: 51.690021, lng: 17.463134 },
      zoom: 13,
      icon: '/images/map-marker.svg',
      options: {
        gestureHandling: 'cooperative',
        disableDefaultUI: true,
        styles: [
          {
            featureType: 'all',
            elementType: 'geometry',
            stylers: [{ color: '#0a416f' }, { saturation: '0' }]
          },
          {
            featureType: 'all',
            elementType: 'labels.text.fill',
            stylers: [{ gamma: 0.01 }, { lightness: 20 }, { color: '#b1d3e6' }]
          },
          {
            featureType: 'all',
            elementType: 'labels.text.stroke',
            stylers: [
              { saturation: -31 },
              { lightness: -33 },
              { weight: 2 },
              { gamma: 0.8 },
              { color: '#09253d' }
            ]
          },
          {
            featureType: 'all',
            elementType: 'labels.icon',
            stylers: [{ visibility: 'off' }]
          },
          {
            featureType: 'landscape',
            elementType: 'geometry',
            stylers: [
              { lightness: 30 },
              { saturation: 30 },
              { color: '#00325B' }
            ]
          },
          {
            featureType: 'landscape.man_made',
            elementType: 'geometry.fill',
            stylers: [{ visibility: 'on' }, { color: '#002C51' }]
          },
          {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [
              { lightness: 10 },
              { saturation: '-30' },
              { color: '#3470af' }
            ]
          },
          {
            featureType: 'road',
            elementType: 'geometry.stroke',
            stylers: [
              { saturation: 25 },
              { lightness: 25 },
              { color: '#0f3053' }
            ]
          }
        ]
      }
    }
  },
  methods: {
    disableTabstops() {
      const links = this.$refs.gmap.$el.querySelectorAll('a')
      links.forEach(link => {
        link.setAttribute('tabindex', '-1')
      })
    }
  }
}
</script>
