<template>
  <div class="testimonial">
    <div class="testimonial__header">
      <icon name="account-circle" size="lg"/>
      <h3>
        {{ client }}
        <small>- {{ city }}</small>
      </h3>
    </div>
    <div class="testimonial__content">
      <p>{{ opinion }}</p>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: { Icon },
  props: {
    client: { type: String, required: true },
    city: { type: String, required: true },
    opinion: { type: String, required: true }
  }
}
</script>

<style lang="scss">
.testimonial {
  background-color: darken($color-background, 2%);
  margin-bottom: 1em;
  padding: 0 1em;
}

.testimonial__header {
  align-items: center;
  display: flex;
  margin: 0.5em 0;
}

.testimonial__header .icon {
  color: rgba(52, 112, 175, 0.25);
  width: 1.25em;
  height: 1.25em;
  justify-content: flex-start;
}

.testimonial__header h3 {
  font-size: 0.95em;
  position: relative;
}

.testimonial__header h3::after {
  background-color: $color-secondary;
  bottom: -0.25em;
  content: '';
  height: 2px;
  left: 0;
  position: absolute;
  width: 3em;
}

.testimonial__header small {
  font-weight: normal;
  white-space: nowrap;
}

.testimonial__content {
  font-size: 0.95em;
  font-style: italic;
}

.testimonial__content p {
  margin-top: 0;
}

@media screen and (min-width: 768px) {
  .testimonial {
    flex: 1 1 calc(33% - 1em);
    margin-right: 1em;
  }

  .testimonial:last-child {
    margin-right: 0;
  }
}
</style>
