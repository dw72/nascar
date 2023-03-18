<template>
  <main>
    <page-section
      class="timeblockr-section"
      title="Zarezerwuj termin"
      description="Użyj poniższej aplikacji aby umówić wizytę w naszym warsztacie w dogodnym dla Ciebie terminie."
      full-width
    >
      <div align="center" class="calendar-wrapper">
        <!-- <div v-show="!calendar.loaded" class="calendar-placeholder" /> -->
        <iframe
          v-show="calendar.loaded"
          id="calendar"
          ref="iframe"
          :src="calendar.source"
          @load="iframeLoaded"
        />
      </div>
      <div>
        <p class="disclaimer">
          * Dla Twojej wygody osadziliśmy zewnętrzną aplikację do rezerwacji na
          naszej stronie.
        </p>
      </div>
    </page-section>
  </main>
</template>

<script>
import PageSection from '@/components/PageSection'

export default {
  components: { PageSection },
  data() {
    return {
      calendar: {
        source:
          'https://www.bookingforsure.eu/bc?servis=4143&lng=pl&iframe=yes&nh&nf',
        loaded: false
      }
    }
  },
  methods: {
    iframeLoaded() {
      this.calendar.loaded = true
    }
  }
}
</script>

<style lang="scss">
.calendar-wrapper {
  min-height: 60vh;
}

#calendar {
  border: none;
  box-sizing: border-box;
  min-height: 58vh;
  width: 100%;
}
</style>
