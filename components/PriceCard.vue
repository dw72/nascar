<template>
  <div class="card-wraper">
    <div class="card">
      <icon
        v-if="!!icon"
        bordered
        :name="icon"
        size="md"
      />
      <h2>{{ title }}</h2>
      <div class="price">
        <div class="regular" :class="!!promoPrice ? 'striked' : null">
          {{ price }} zł
        </div>
        <div v-if="!!promoPrice" class="promo">
          {{ promoPrice }} zł
        </div>
      </div>
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: { Icon },
  props: {
    icon: { type: String, default: 'car' },
    title: { type: String, default: '' },
    price: { type: Number, default: 0 },
    promoPrice: { type: Number, default: 0 }
  }
}
</script>

<style lang="scss" scoped>
.card-wraper {
  padding: 0.75em;
}

.card {
  align-items: center;
  border: 2px dashed rgba($color-primary, 0.25);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 2em;
  margin-bottom: 1em;
  min-height: 380px;
  padding: 1em;
  width: 100%;

  .icon {
    background: white;
    margin-top: -1.25em;
  }

  h2 {
    color: $color-primary;
    font-size: 0.85em;
    line-height: 1;
    margin-bottom: 0;
    margin-top: 2em;
    text-align: center;
    text-transform: uppercase;
  }

  .price {
    flex: 1;

    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;

    font-size: 2.25em;
    margin: 0.5em 0;

    .striked {
      font-size: 0.6em;
      margin-bottom: -0.5em;
      margin-left: -2em;
      position: relative;

      &::after {
        background-color: $color-secondary;
        content: '';
        position: absolute;
        width: 130%;
        height: 2px;
        top: 50%;
        left: -15%;
        transform: rotate(-10deg);
      }
    }

    .promo {
      color: darken($color-secondary, 5%);
      margin-left: 1em;
    }
  }

  .content {
    border-top: 1px solid #f0f0f0;
    color: $color-primary;
    width: 90%;
  }

  &:hover {
    icon {
      background-color: #fcfcfc;
    }
  }
}
</style>
