<template>
  <div
    class="icon"
    :class="{'icon--bordered': bordered, 'icon--small': size === 'small', 'icon--large': size === 'large'}"
  >
    <span class="mdi" :class="`mdi-${name}`" aria-hidden="true"/>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '', validator: value => !!value },
    size: {
      type: String,
      default: 'medium',
      validator: value =>
        value ? ['medium', 'small', 'large'].includes(value) : true
    },
    bordered: { type: Boolean, default: false },
    borderTop: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss">
.icon {
  align-items: center;
  color: $color-icon;
  display: flex;
  justify-content: center;
  font-size: 3em;
  width: 1.75em;
  height: 1.75em;
  position: relative;
}

.icon--bordered {
  border: 2px dashed rgba($color-primary, 0.25);
  border-radius: 50%;
}

.icon--small {
  font-size: 1.5em;
}

.icon--large {
  font-size: 4.5em;
}
</style>
