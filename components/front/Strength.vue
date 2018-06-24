<template>
  <div class="strength">
    <span :class="`strength__icon mdi mdi-${icon}`" aria-hidden="true"/>
    <h3 class="strength__title">{{ name }}</h3>
    <p class="strength__text">{{ description }}</p>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, required: true },
    description: { type: String, required: true },
    icon: { type: String, required: true }
  }
}
</script>

<style lang="scss">
.strength {
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

.strength__icon {
  border: 2px dashed rgba($color-primary, 0.25);
  border-radius: 50%;
  color: $color-icon;
  font-size: 3em;
  padding: 0 0.25em;
}

.strength__title {
  line-height: 1;
}

.strength__text {
  margin-top: 0;
  text-align: center;
}
</style>
