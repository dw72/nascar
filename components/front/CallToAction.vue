<template>
  <page-section class="section--full-width section--horizontal call-to-action">
    <template slot="header">
      <h2>Twoje auto potrzebuje fachowej pomocy?</h2>
      <!-- <h3>Zadzwoń: +48 62 7226848</h3> -->
    </template>
    <a href="https://nascar.premio.pl/reservation" class="button button--big button--secondary button--rounded button--shadow">
      <span class="mdi mdi-calendar-check button__icon" />
      <span>Zarezerwuj termin</span>
    </a>
  </page-section>
</template>

<script>
import PageSection from '@/components/page/Section.vue'

export default {
  components: { PageSection }
}
</script>

<style lang="scss">
.call-to-action {
  align-items: center;
  background: lighten($color-primary, 10%);
  color: $color-text-light;
  padding: 2em 1em;

  .not-android & {
    @supports (background-attachment: fixed) and (background-position-x: center) and (background-size: cover) {
      background: linear-gradient(
          to bottom,
          rgba(darken($color-primary, 10%), 0.9),
          rgba(darken($color-primary, 5%), 0.95)
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
