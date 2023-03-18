<template>
  <div :class="classNames">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    itemWidth: {
      type: String,
      default: '1/3',
      validator: value =>
        value
          ? ['1/2', '1/3', '1/4', '50%', '33%', '25%'].includes(value)
          : true
    }
  },
  computed: {
    classNames() {
      const names = {
        'flex-list': true,
        'item-width--1/2': ['1/2', '50%'].includes(this.itemWidth),
        'item-width--1/3': ['1/3', '33%'].includes(this.itemWidth),
        'item-width--1/4': ['1/4', '25%'].includes(this.itemWidth)
      }
      return names
    }
  }
}
</script>

<style lang="scss" scoped>
.flex-list {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  & > * {
    flex-basis: 100%;
  }

  @media screen and (min-width: 580px) {
    flex-direction: row;
    &.item-width--1\/4 > * {
      flex-basis: 50%;
    }
  }

  @media screen and (min-width: 768px) {
    &.item-width--1\/2 > * {
      flex-basis: 50%;
    }

    &.item-width--1\/3 > * {
      flex-basis: 33.33%;
    }
  }

  @media screen and (min-width: 960px) {
    &.item-width--1\/4 > * {
      flex-basis: 25%;
    }
  }
}
</style>
