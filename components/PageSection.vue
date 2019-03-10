<template>
  <section :class="classNames">
    <header v-show="header === 'visible'" v-if="header !== 'removed'" class="section__header">
      <slot name="header">
        <h2 v-if="title">{{ title }}</h2>
        <divider v-if="(title || description) && !noDivider"/>
        <p v-if="description">{{ description }}</p>
      </slot>
    </header>
    <div class="section__content">
      <slot/>
    </div>
  </section>
</template>

<script>
import Divider from '@/components/Divider'

export default {
  components: { Divider },
  props: {
    title: { type: String, default: '' },
    description: { type: String, default: '' },
    noDivider: { type: Boolean, default: false },
    fullWidth: { type: Boolean, default: false },
    noPadding: { type: Boolean, default: false },
    horizontal: { type: Boolean, default: false },
    flex: { type: Boolean, default: false },
    header: {
      type: String,
      default: 'visible',
      validator: value => {
        return ['visible', 'hidden', 'removed'].includes(value)
      }
    }
  },
  computed: {
    classNames() {
      return {
        section: true,
        'section--full-width': this.fullWidth,
        'section--no-padding': this.noPadding,
        'section--horizontal': this.horizontal,
        'section--flex': this.flex
      }
    }
  }
}
</script>

<style lang="scss">
.section {
  background: inherit;
  display: flex;
  flex-direction: column;

  &:first-child {
    margin-top: -1em;
  }

  &:last-child {
    margin-bottom: -1em;
  }
}

.section--full-width {
  margin-left: -1em;
  margin-right: -1em;
  padding: 0 1em;
}

.section--no-padding {
  padding: 0;

  .section__content {
    margin: 0;
  }
}

@media screen and (min-width: 960px) {
  .section--horizontal {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}

.section__header {
  background: inherit;
  text-align: center;
  margin: 1em 0;
}

.section__header p {
  margin: 1em 1em 0;
}

.section__content {
  margin: 1em 0;
}

.section--flex {
  .section__content,
  .section__content > div[class$='wrapper'] {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }
}
</style>
