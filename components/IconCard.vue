<template>
  <div :class="{'iconcard-item': true, 'iconcard-item--horizontal': horizontal}">
    <icon
      class="iconcard-item__icon"
      :name="icon || 'check'"
      :bordered="bordered"
      :size="iconSize"
    />
    <div>
      <h3 v-if="title" class="iconcard-item__title">{{ title }}</h3>
      <div v-if="!!$slots.default" class="iconcard-item__content">
        <slot/>
      </div>
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
    },
    horizontal: {
      type: Boolean,
      default: false
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
  text-align: center;

  .icon {
    margin-bottom: 0.5em;
  }

  h3 {
    font-size: 1em;
    margin-top: 0.25em;
    margin-bottom: 1em;

    @media screen and (min-width: 768px) {
      font-size: 1.1em;
    }
  }
}

.iconcard-item__content {
  flex: 1;
  margin-bottom: 1em;
}

.iconcard-item--horizontal {
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;

  .icon {
    margin-right: 0.5em;
  }
}
</style>
