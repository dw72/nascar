<template>
  <page-section
    flex
    full-width
    class="testimonials"
    title="Opinie naszych klientów"
    description="Opinie klientów są dla nas bardzo ważne, ponieważ pozwalają nam ciągle doskonalić naszą ofertę i jakość wykonywaych usług tak by wychodziły na przeciw ich oczekiwaniom."
  >
    <testimonial-card
      v-for="testimonial in testimonials"
      :key="testimonial.client"
      :client="testimonial.client"
      :city="testimonial.city"
      :opinion="testimonial.opinion"
    />
  </page-section>
</template>

<script>
import PageSection from '@/components/PageSection.vue'
import TestimonialCard from './TestimonialCard.vue'

export default {
  components: { PageSection, TestimonialCard },
  data() {
    return {
      testimonials: [
        {
          client: 'Tomasz',
          city: 'Krotoszyn',
          opinion:
            'Z czystym sumieniem polecam korzystanie z usług tego serwisu. Miła, pomocna i profesjonalna ekipa. Z moim autem mieli sporo pracy, a mimo to uporali się w ciągu jednego dnia. Co ważne nie zdarli ze mnie ostatniej złotówki.'
        },
        {
          client: 'Agnieszka',
          city: 'Krotoszyn',
          opinion:
            'Gorące podziękowania za przywrócenie do życia mojego silnika. Auto jeździ jak dawniej. Co mnie bardzo mile zaskoczyło to bardzo krótki czas naprawy i przystępna cena.'
        },
        {
          client: 'Grzegorz',
          city: 'Koźmin Wlkp.',
          opinion:
            'Silnik mojego auta stracił moc. Gdzie indziej proponowano mi naprawe za prawie 3 tyś zł. Tutaj uporali sie z usterką za połowę tej kwoty. Szczerze i gorąco mogę ich polecić. Wiedzą co robią i nie przeginają z cenami.'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.testimonials {
  background: darken($color-background, 5%);
}
</style>
