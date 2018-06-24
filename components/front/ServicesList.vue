<template>
  <page-section
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
import services from '@/assets/data/services.json'
import PageSection from '@/components/page/Section.vue'
import ServiceCard from './ServiceCard.vue'

export default {
  components: { PageSection, ServiceCard },
  data() {
    return {
      services
    }
  }
}
</script>
