<template>
  <page-section full-width header="removed" class="call-to-action">
    <slot>
      <h2>Twoje auto potrzebuje fachowej pomocy?</h2>
      <!-- <nuxt-link to="/termin" class="button button--big button--secondary">
        <icon name="calendar-check" size="sm" />
        <span>Zarezerwuj termin</span>
      </nuxt-link> -->
      <a
        href="https://www.bookingforsure.eu/bc?servis=4143&lng=pl"
        target="_blank"
        class="button button--big button--secondary"
      >
        <icon name="calendar-check" size="sm" />
        <span>Zarezerwuj termin</span>
      </a>
    </slot>
  </page-section>
</template>

<script>
import Icon from '@/components/Icon'
import PageSection from '@/components/PageSection'

export default {
  components: { Icon, PageSection },
}
</script>

<style lang="scss">
.call-to-action {
  align-items: center;
  background: lighten($color-primary, 10%);
  color: $color-text-light;
  padding: 2em 1em;

  .section__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: center;
    width: 100%;

    @media screen and (min-width: 960px) {
      flex-direction: row;
    }
  }

  .icon {
    color: inherit;
    margin-right: 0.5em;
  }

  .not-android & {
    @supports (background-attachment: fixed) and (background-position-x: center)
      and (background-size: cover) {
      background: linear-gradient(
          to bottom,
          rgba(darken($color-primary, 10%), 0.9),
          rgba(darken($color-primary, 5%), 0.95)
        ),
        url('~assets/images/engine.jpg');
      background-attachment: fixed;
      background-position-x: center;
      background-repeat: no-repeat;
      background-size: cover;
    }
  }
}
</style>
