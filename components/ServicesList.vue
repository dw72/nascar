<template>
  <page-section
    flex
    class="services"
    title="Wszystko czego potrzebuje Twój samochód"
    description="Już od 1997 roku dbamy o samochody mieszkańców Krotoszyna i okolic. Fachowo i rzetelnie wykonujemy najtrudniejsze zadania za uczciwe i konkurencyjne stawki."
  >
    <service-card
      v-for="service in services"
      :key="service.name"
      :name="service.name"
      :description="service.description"
      :image="service.image"
    />
  </page-section>
</template>

<script>
import ServiceCard from './ServiceCard.vue'
import PageSection from '@/components/PageSection.vue'

export default {
  components: { PageSection, ServiceCard },
  data() {
    return {
      services: [
        {
          name: 'Serwis samochodu',
          description:
            'Dysponujemy wykwalifikowanym personelem oraz nowoczesnym sprzętem niezbędnym do naprawy Twojego samochodu.',
          image: 'serwis_samochodu.jpg'
        },
        {
          name: 'Stacja kontroli',
          description:
            'Nasi diagności rzetelnie sprawdzą elementy Twojego auta które mają wpływ na Twoje bezpieczeństwo oraz sprawność samochodu.',
          image: 'stacja_kontroli.jpg'
        },
        {
          name: 'Serwis ogumienia',
          description:
            'Pomożemy w wyborze najlepszego dla Twojego samochodu ogumienia, a także fachowo zajmiemy się jego wymianą oraz naprawą.',
          image: 'serwis_ogumienia.jpg'
        },
        {
          name: 'Myjnia',
          description:
            'Zapewniamy bezdotykowe mycie pojazdu, które jest skuteczną, bezpieczną, a także oszczędną metodą mycia samochodów.',
          image: 'myjnia.jpg'
        },
        {
          name: 'Kredyty i leasing',
          description:
            'Zaproponujemy ofertę kilku banków, z minimum formalności oraz możliwością uzyskania kredytu jeśli jesteś już właścicielem pojazdu.',
          image: 'kredyty_i_leasing.jpg'
        },
        {
          name: 'Ubezpieczenia',
          description:
            'Fachowo doradzimy Państwu najlepsze i najtańsze ubezpieczenie spośród bogatej oferty wielu towarzystw ubezpieczeniowych.',
          image: 'ubezpieczenia.jpg'
        }
      ]
    }
  }
}
</script>
