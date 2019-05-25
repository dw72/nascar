<template>
  <div class="flex-list">
    <slot/>
  </div>
</template>

<style lang="scss" scoped>
.flex-list {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  > * {
    flex-basis: 33%;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
}
</style>
