<template>
  <span :class="`icon mdi mdi-${name}`" aria-hidden="true"/>
</template>

<script>
export default {
  props: {
    name: { type: String, default: '', validator: value => !!value }
  }
}
</script>

<style lang="scss">
.icon {
  align-items: center;
  border: 2px dashed rgba($color-primary, 0.25);
  border-radius: 50%;
  color: $color-icon;
  display: flex;
  justify-content: center;
  font-size: 3em;
  width: 1.75em;
  height: 1.75em;
}
</style>
