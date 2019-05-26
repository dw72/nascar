<template>
  <main>
    <page-section
      class="diagnostic-services"
      title="Stacja kontroli"
      description="
        Oferujemy pełną dignostykę i badania techniczne motocykli, autobusów, ciągników rolniczych, przyczep, samochodów osobowych oraz ciężarowych.
        Także tych sprowadzonych z zagranicy, powypadkowych i zasilanych gazem."
    >
      <flex-list>
        <icon-card
          v-for="(service, idx) in services"
          :key="idx"
          :title="service.title"
          :icon="service.icon"
        >{{ service.description }}</icon-card>
      </flex-list>
      <p class="centered">
        Posiadamy wieloletnie doświadczenie co przekłada się na wysoką jakość świadczonych przez nas usług.
        Do wykonywania badań wykorzystujemy nowoczesną linię diagnostyczną
        <a
          href="http://www.wsop.pl/produkty/certus-made-in-poland/"
          rel="nofollow"
        >CERTUS Race Line EVO2</a>
        wykonaną przez lidera rynku wyposażenia stacji diagnostycznych - firmę WSOP.
      </p>
    </page-section>
    <page-section
      class="registration-review"
      title="Badania techniczne"
      description="
        Właściciel samochodu osobowego ma obowiązek zgłosić pojazd na przegląd okresowy. Celem jest ocena stanu technicznego,
        na której podstawie auto zostaje dopuszczone do użytkowania w ruchu drogowym."
      full-width
    >
      <flex-list item-width="1/2">
        <icon-card
          v-for="(question, idx) in questions"
          :key="idx"
          class="question"
          :title="question.title"
          :icon="question.icon"
          :bordered="false"
          horizontal
        >{{ question.answer }}</icon-card>
      </flex-list>
    </page-section>
    <call-to-action>
      <h2>Jeśli chcesz możemy Ci przypomninać o terminie przeglądu.</h2>
    </call-to-action>
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
import CallToAction from '@/components/CallToAction'
import PriceList from '@/components/PriceList'

export default {
  components: { PageSection, FlexList, IconCard, CallToAction, PriceList },
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
      ],
      services: [
        {
          title: 'Przeglądy rejestracyjne',
          icon: 'card-text-outline',
          description:
            'Obowiązkowe przeglądy rejestracyjne i badania okresowe samochodów osobowych, motocykli i ciągników rolniczych.'
        },
        {
          title: 'Diagnostyka pojazdowa',
          icon: 'alarm-plus',
          description:
            'Wstępne przeglądy pozwalające na wykrycie i usunięcie usterek, które mogą wpłynąć na wynik obowiązkowego badania okresowego.'
        },
        {
          title: 'Sprawdzenie przed kupnem',
          icon: 'map',
          description:
            'Sprawdzenie pojazdu przed kupnem, okresem letnim bądź zimowym oraz przed dłuższą podróżą.'
        }
      ],
      questions: [
        {
          title: 'Jak często należy wykonywać przeglądy?',
          icon: 'calendar',
          answer:
            'Większość właścicieli pojazdów prywatnych zobowiązana jest odbywać przegląd techniczny co roku. \
            Wyjątkiem są nowe auta, które muszą przejść pierwszy przegląd nie później niż po upływie trzech lat od zakupu, zaś następny po kolejnych dwóch latach. \
            Jeśli jednak pojazd ma zainstalowaną instalację gazową, musi przechodzić badanie co roku, niezależnie od jego wieku.'
        },
        {
          title: 'Co grozi za brak ważnego przeglądu?',
          icon: 'alert-outline',
          answer:
            'Bez ważnego przeglądu auto nie może poruszać się po drogach. \
            Jeśli zatrzyma nas Policja zabierze dowód rejestracyjny i wystawi skierowanie na obowiązkowe badanie techniczne. \
            Może również wystawić mandat od 20 do 500 zł lub odholować samochód na parking policyjny. \
            Ubezpieczenie pojazdu traci ważność a w przypadku kolizji ubezpieczyciel nie wypłaci odszkodowania.'
        },
        {
          title: 'Co należy zabrać na przegląd?',
          icon: 'check-all',
          answer:
            'Oczywiście pojazd a także jego dowód rejestracyjny. Przed przeglądem warto także sprawdzić czy działają wszystkie żarówki, jest gaśnica i trójkąt ostrzegawczy. \
            Nie musisz być właścicielem pojazdu żeby skorzystać z przeglądu technicznego.'
        },
        {
          title: 'Ile czasu trwa badanie techniczne?',
          icon: 'clock',
          answer:
            'Kompleksowe wykonanie badania oraz dopełnienie wszelkich formalności (pieczątka do dowodu rejestracyjnego, wpisanie samochodu do bazy danych stacji, \
            omówienie stanu technicznego i ew. listy usterek, płatność) powinno zająć około 30-45 min.'
        }
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
  // margin-bottom: -2em;
}

.registration-review {
  background: darken($color-background, 5%);
}
</style>
