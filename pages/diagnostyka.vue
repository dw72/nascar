<template>
  <main>
    <page-section class="diagnostic-services" title="Stacja kontroli" description="Oferujemy pełną dignostykę i badania techniczne motocykli, autobusów, ciągników rolniczych, przyczep, samochodów osobowych oraz ciężarowych. Także tych sprowadzonych z zagranicy, powypadkowych i zasilanych gazem.">
      <flex-list>
        <icon-card v-for="(service, idx) in services" :key="idx" :title="service.title" :icon="service.icon">
          {{ service.description }}
        </icon-card>
      </flex-list>
      <p class="centered">
        Posiadamy wieloletnie doświadczenie co przekłada się na wysoką jakość
        świadczonych przez nas usług. Do wykonywania badań wykorzystujemy
        nowoczesną linię diagnostyczną
        <a href="http://www.wsop.pl/produkty/certus-made-in-poland/" rel="nofollow">
          CERTUS Race Line EVO2
        </a>
        wykonaną przez lidera rynku wyposażenia stacji diagnostycznych - firmę
        WSOP.
      </p>
    </page-section>
    <page-section class="registration-review" title="Badania techniczne" description="Właściciel samochodu osobowego ma obowiązek zgłosić pojazd na przegląd okresowy. Celem jest ocena stanu technicznego, na której podstawie auto zostaje dopuszczone do użytkowania w ruchu drogowym." full-width>
      <flex-list item-width="1/2">
        <icon-card
          v-for="(question, idx) in questions" :key="idx" class="question" :title="question.title"
          :icon="question.icon" :bordered="false" horizontal
        >
          {{ question.answer }}
        </icon-card>
      </flex-list>
    </page-section>
    <call-to-action>
      <h2>Jeśli chcesz możemy Ci przypomninać o terminie przeglądu.</h2>
    </call-to-action>
    <page-section title="Cennik badań technicznych">
      <price-list :columns="columns" :data="pricelist" />
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

import services from '@/data/services.json'
import questions from '@/data/questions.json'

export default {
  components: { PageSection, FlexList, IconCard, CallToAction, PriceList },
  data() {
    return {
      columns: [
        { name: 'name', title: 'Usługa' },
        { name: 'price', title: 'Cena' }
      ],
      services,
      questions
    }
  },
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
.registration-review {
  background: darken($color-background, 5%);
}
</style>
