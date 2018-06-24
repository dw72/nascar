<template>
  <div class="service">
    <div class="service__header">
      <h3 class="service__title">{{ name }}</h3>
      <img :src="image" alt="" class="service__image">
    </div>
    <div class="service__content">
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true }
  }
}
</script>

<style lang="scss">
.service {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

.service__header {
  position: relative;
}

.service__header h3 {
  background-color: $color-secondary;
  bottom: 0;
  color: $color-text-light;
  font-weight: 400;
  font-family: inherit;
  padding: 0.25em 1em;
  position: absolute;
  right: -0.5em;
}

.service__header h3::after {
  content: '';
  position: absolute;
  right: 0;
  bottom: -0.5em;
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 0.5em 0.5em 0 0;
  border-color: darken($color-secondary, 15%) transparent transparent transparent;
}

.service__content {
  border: 2px dashed rgba($color-primary, 0.25);
  border-top: 0;
  flex: 1;
  margin: 0;
  padding: 1em;
  padding-left: 2em;
}

.service__image {
  height: 100%;
  object-fit: cover;
  width: 100%;
}

@media screen and (min-width: 576px) {
  .service {
    flex: 1 1 40%;
    margin-right: 1em;
  }

  .service:nth-child(2n) {
    margin-right: 0;
  }

  .service__header h3 {
    font-size: 1.1em;
  }
}

@media screen and (min-width: 960px) {
  .service {
    flex-direction: row;
  }

  .service__header {
    flex: 1 1 50%;
  }

  .service__content {
    border-top: 2px dashed rgba($color-primary, 0.25);
    border-left: 0;
    flex: 1 1 50%;
  }
}
</style>
