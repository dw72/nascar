<template>
  <main>
    <page-section
      class="diagnostic-services"
      title="Stacja kontroli pojazdów"
      description="Posiadamy wieloletnie doświadczenie co przekłada się na wysoką jakość świadczonych przez nas usług. Wykonujemy:"
    >
      <icon-card-list>
        <icon-card
          icon="card-text-outline"
        >Obowiązkowe przeglądy rejestracyjne i badania okresowe samochodów osobowych, motocykli i ciągników rolniczych.</icon-card>
        <icon-card
          icon="alarm-plus"
        >Wstępne przeglądy pozwalające na wykrycie i usunięcie usterek, które mogą wpłynąć na wynik obowiązkowego badania okresowego.</icon-card>
        <icon-card
          icon="map"
        >Sprawdzenie pojazdu przed kupnem, okresem letnim bądź zimowym oraz przed dłuższą podróżą.</icon-card>
      </icon-card-list>
      <p>Obsługujemy także pojazdy sprowadzone z zagranicy, powypadkowe i zasilane gazem.</p>
      <p>
        Do wykonywania badań wykorzystujemy nowoczesną linię diagnostyczną
        <a
          href="http://www.wsop.pl/produkty/certus-made-in-poland/"
          rel="nofollow"
        >CERTUS Race Line EVO2</a>
        .
      </p>
    </page-section>
    <page-section title="Cennik badań technicznych">
      <price-list :prices="pricelist"/>
    </page-section>
  </main>
</template>

<script>
import { mapState } from 'vuex'

import PageSection from '@/components/PageSection.vue'
import IconCardList from '@/components/IconCardList'
import IconCard from '@/components/IconCard'
import PriceList from '@/components/PriceList'

export default {
  components: { PageSection, IconCardList, IconCard, PriceList },
  head() {
    return {
      title: 'Stacja kontroli'
    }
  },
  computed: {
    ...mapState('diagnostic', ['pricelist'])
  },
  async created() {
    await this.$store.dispatch('diagnostic/DIAGNOSTIC_PRICELIST_REQUEST')
  }
}
</script>

<style lang="scss" scoped>
.diagnostic-services {
  p {
    text-align: center;
  }
}
</style>
