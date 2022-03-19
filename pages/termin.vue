<template>
  <main>
    <page-section
      class="timeblockr-section"
      title="Zarezerwuj termin"
      description="Użyj poniższej aplikacji aby umówić wizytę w naszym warsztacie w dogodnym dla Ciebie terminie."
      full-width
    >
      <div align="center">
        <iframe id="calendar" ref="calendar" :src="source" />
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
      source: 'https://www.bookingforsure.eu/bc?servis=4143&lng=pl&iframe=yes',
    }
  },
}
</script>

<style lang="scss">
#calendar {
  border: none;
  box-sizing: border-box;
  min-height: 70vh;
  width: 100%;
}
</style>