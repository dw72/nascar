<template>
  <div class="testimonial">
    <div class="testimonial__header">
      <span class="mdi mdi-account-circle" />
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
export default {
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
}

.testimonial__header .mdi {
  color: rgba(52, 112, 175, 0.25);
  font-size: 4em;
  margin-right: 0.25em;
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
