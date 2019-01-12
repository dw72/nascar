<template>
  <main :class="{'not-android': !isAndroid}">
    <slider/>
    <services-list/>
    <call-to-action/>
    <strengths-list/>
    <testimonials-list/>
  </main>
</template>

<script>
import Slider from '@/components/front/Slider.vue'
import ServicesList from '@/components/front/ServicesList.vue'
import CallToAction from '@/components/front/CallToAction.vue'
import StrengthsList from '@/components/front/StrengthsList.vue'
import TestimonialsList from '@/components/front/TestimonialsList.vue'

export default {
  components: {
    Slider,
    ServicesList,
    CallToAction,
    StrengthsList,
    TestimonialsList
  },
  asyncData: ({ req }) => ({
    userAgent: req
      ? req.headers['user-agent']
      : typeof navigator !== 'undefined'
        ? navigator.userAgent
        : 'No user agent (generated)'
  }),
  computed: {
    isAndroid() {
      if (this.userAgent) {
        return this.userAgent.toLowerCase().includes('android')
      }
    }
  },
  async created() {
    await this.$store.dispatch('slider/FETCH_SLIDES_REQUEST')
  }
}
</script>
