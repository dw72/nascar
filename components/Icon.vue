<template>
  <div
    class="icon"
    :class="{'icon--bordered': bordered, 'icon--small': size === 'sm', 'icon--medium': size === 'md', 'icon--large': size === 'lg'}"
  >
    <svg viewBox="0 0 24 24" width="1em" fill="currentColor" aria-hidden="true">
      <path :d="svgPath"/>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    name: { type: String, default: 'check', validator: value => !!value },
    size: {
      type: String,
      default: 'medium',
      validator: value =>
        value ? ['xs', 'sm', 'md', 'lg'].includes(value) : true
    },
    bordered: { type: Boolean, default: false }
  },
  data() {
    return {
      svgPath: ''
    }
  },
  async mounted() {
    const name = this.name
      .split('-')
      .map(
        item => `${item.charAt(0).toUpperCase()}${item.slice(1).toLowerCase()}`
      )
      .join('')

    const module = await import('@mdi/js')
    const path = module[`mdi${name}`]
    this.svgPath = path
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
  font-size: 2.75em;
}

.icon--large {
  font-size: 4em;
}
</style>
