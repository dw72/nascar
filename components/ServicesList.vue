<template>
  <page-section
    flex
    class="services"
    title="Wszystko czego potrzebuje Twój samochód"
    description="Już od 1997 roku dbamy o samochody mieszkańców Krotoszyna i okolic. Fachowo i rzetelnie wykonujemy najtrudniejsze zadania za uczciwe i konkurencyjne stawki."
  >
    <service
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
import PageSection from '@/components/Section.vue'
import Service from './Service.vue'

export default {
  components: { PageSection, Service },
  data() {
    return {
      services
    }
  }
}
</script>
