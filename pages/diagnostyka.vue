<template>
  <main>
    <page-section
      class="diagnostic-services"
      title="Stacja kontroli pojazdów"
      description="Posiadamy wieloletnie doświadczenie co przekłada się na wysoką jakość świadczonych przez nas usług. Wykonujemy:"
    >
      <flex-list>
        <icon-card
          icon="card-text-outline"
        >Obowiązkowe przeglądy rejestracyjne i badania okresowe samochodów osobowych, motocykli i ciągników rolniczych.</icon-card>
        <icon-card
          icon="alarm-plus"
        >Wstępne przeglądy pozwalające na wykrycie i usunięcie usterek, które mogą wpłynąć na wynik obowiązkowego badania okresowego.</icon-card>
        <icon-card
          icon="map"
        >Sprawdzenie pojazdu przed kupnem, okresem letnim bądź zimowym oraz przed dłuższą podróżą.</icon-card>
      </flex-list>
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
      <price-list :columns="columns" :data="pricelist"/>
    </page-section>
  </main>
</template>

<script>
import { mapState } from 'vuex'

import PageSection from '@/components/PageSection.vue'
import FlexList from '@/components/FlexList'
import IconCard from '@/components/IconCard'
import PriceList from '@/components/PriceList'

export default {
  components: { PageSection, FlexList, IconCard, PriceList },
  head() {
    return {
      title: 'Stacja kontroli'
    }
  },
  data() {
    return {
      columns: [
        { name: 'name', title: 'Usługa' },
        { name: 'price', title: 'Cena' }
      ]
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
  margin-bottom: -1em;

  p {
    text-align: center;
  }
}
</style>
