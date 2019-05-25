<template>
  <div class="iconcard-item">
    <icon
      class="iconcard-item__icon"
      :name="icon || 'check'"
      :bordered="bordered"
      :size="iconSize"
    />
    <h3 v-if="title" class="iconcard-item__title">{{ title }}</h3>
    <div v-if="!!$slots.default" class="iconcard-item__content">
      <slot/>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: { Icon },
  props: {
    title: {
      type: String,
      default: null
    },
    icon: {
      type: String,
      default: 'check'
    },
    iconSize: {
      type: String,
      default: 'md',
      validator: value =>
        value ? ['xs', 'sm', 'md', 'lg'].includes(value) : true
    },
    bordered: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style lang="scss" scoped>
.iconcard-item {
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 1em;
}

.iconcard-item__icon {
  margin-bottom: 0.5em;
}

.iconcard-item__title {
  font-size: 1.1em;
  margin-top: 0;
  margin-bottom: 1em;
  text-align: center;
}

.iconcard-item__content {
  flex: 1;
  margin-bottom: 1em;
  text-align: center;
}
</style>
