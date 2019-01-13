<template>
  <page-section
    class="section--full-width testimonials"
    title="Opinie naszych klientów"
    description="Opinie klientów są dla nas bardzo ważne, ponieważ pozwalają nam ciągle doskonalić naszą ofertę i jakość wykonywaych usług tak by wychodziły na przeciw ich oczekiwaniom."
  >
    <testimonial
      v-for="testimonial in testimonials"
      :key="testimonial.client"
      :client="testimonial.client"
      :city="testimonial.city"
      :opinion="testimonial.opinion"
    />
  </page-section>
</template>

<script>
import testimonials from '@/assets/data/testimonials.json'
import PageSection from '@/components/page/Section.vue'
import Testimonial from './Testimonial.vue'

export default {
  components: { PageSection, Testimonial },
  data() {
    return {
      testimonials
    }
  }
}
</script>

<style lang="scss">
.testimonials {
  background: darken($color-background, 5%);

  .not-android & {
    @supports (background-attachment: fixed) and (background-position-x: center) and (background-size: cover) {
      background: linear-gradient(
          to bottom,
          rgba(darken($color-background, 5%), 0.95),
          rgba(darken($color-background, 5%), 0.98)
        ),
        url("/images/engine.jpg");
      background-attachment: fixed;
      background-position-x: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>
