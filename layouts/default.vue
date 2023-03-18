<template>
  <div ref="container" class="container" :class="{'not-android': !isAndroid}">
    <page-header />
    <nuxt class="page__content" />
    <page-footer />
  </div>
</template>

<script>
import PageHeader from './partials/Header.vue'
import PageFooter from './partials/Footer.vue'

export default {
  components: { PageHeader, PageFooter },
  computed: {
    isAndroid() {
      if (this.userAgent) {
        return this.userAgent.toLowerCase().includes('android')
      }
      return false
    }
  }
}
</script>

<style lang="scss">
html {
  background: $color-background-page;
  color: $color-text;
  font-family: 'Exo 2', 'Helvetica Neue', Arial, sans-serif;

  @supports (background-attachment: fixed) and (background-position-x: center)
    and (background-size: cover) {
    background: linear-gradient(
        to bottom,
        rgba(darken($color-primary, 15%), 0.75),
        rgba($color-primary, 0.98)
      ),
      url('~assets/images/engine.jpg');
    background-attachment: fixed;
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
}

.container {
  margin: 0;
  max-width: calc(1140px);
  min-width: 360px;
}

@media screen and (min-width: 480px) {
  .container {
    margin: 0 auto;
    width: 95%;
  }
}

.page__content {
  background: $color-background;
  padding: 1em;
}
</style>
