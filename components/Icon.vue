<template>
  <div
    class="icon"
    :class="{'icon--bordered': bordered, 'icon--small': size === 'sm', 'icon--medium': size === 'md', 'icon--large': size === 'lg'}"
  >
    <svg-icon :name="name" fill="currentColor" height="1em" width="1em"/>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: 'check', validator: value => !!value },
    size: {
      type: String,
      default: 'xs',
      validator: value =>
        value ? ['xs', 'sm', 'md', 'lg'].includes(value) : true
    },
    bordered: { type: Boolean, default: false }
  }
}
</script>

<style lang="scss" scoped>
.icon {
  align-items: center;
  color: $color-icon;
  display: flex;
  justify-content: center;
  font-size: 1em;
  position: relative;
}

.icon--bordered {
  border: 2px dashed rgba($color-primary, 0.25);
  border-radius: 50%;
  width: 1.75em;
  height: 1.75em;
}

.icon--small {
  font-size: 1.5em;
}

.icon--medium {
  font-size: 2.5em;
}

.icon--large {
  font-size: 3.25em;
}
</style>
