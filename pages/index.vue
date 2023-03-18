<template>
  <main>
    <services-list />
    <call-to-action />
    <strengths-list />
    <testimonials-list />
  </main>
</template>

<script>
import ServicesList from '@/components/ServicesList.vue'
import CallToAction from '@/components/CallToAction.vue'
import StrengthsList from '@/components/StrengthsList.vue'
import TestimonialsList from '@/components/TestimonialsList.vue'

export default {
  components: {
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
  })
}
</script>
