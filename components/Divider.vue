<template>
  <div class="divider">
    <icon name="car"/>
  </div>
</template>

<script>
import Icon from '@/components/Icon'
export default {
  components: { Icon }
}
</script>

<style lang="scss" scoped>
.divider {
  display: flex;
  justify-content: center;
}

.icon {
  color: rgba($color-secondary, 0.45);
  height: 0.5em;
  position: relative;
  width: 6em;
  margin: -0.25em 0;
  padding: 0;
  font-size: 1.5em;

  &::before,
  &::after {
    background: rgba($color-primary, 0.25);
    content: '';
    height: 2px;
    position: absolute;
    width: 1.5em;
  }

  &::before {
    right: 0.5em;
  }

  &::after {
    left: 0.5em;
  }
}
</style>
