<template>
  <div class="iconcard-list">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.iconcard-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1em 1em 0;
  width: 100%;

  > * {
    flex-basis: 33.3333%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
