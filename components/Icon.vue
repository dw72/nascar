<template>
  <span class="icon mdi" :class="classNames" aria-hidden="true"/>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '', validator: value => !!value },
    size: {
      type: String,
      default: '',
      validator: value => (value ? ['small', 'large'].includes(value) : true)
    },
    bordered: { type: Boolean, default: false }
  },
  computed: {
    classNames() {
      const classes = {}
      classes['icon--bordered'] = this.bordered
      classes[`mdi-${this.name}`] = true
      if (this.size) classes[`icon--${this.size}`] = true
      return classes
    }
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
}

.icon--bordered {
  border: 2px dashed rgba($color-primary, 0.25);
  border-radius: 50%;
}

.icon--small {
  font-size: 1.5em;
}
</style>
