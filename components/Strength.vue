<template>
  <div class="strength">
    <!-- <span :class="`strength__icon mdi mdi-${icon}`" aria-hidden="true" /> -->
    <icon :name="icon" bordered/>
    <h3 class="strength__title">{{ name }}</h3>
    <p class="strength__text">{{ description }}</p>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: { Icon },
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

.strength__title {
  line-height: 1;
}

.strength__text {
  margin-top: 0;
  text-align: center;
}
</style>
