<template>
  <table>
    <tr v-for="(price, idx) in prices" :key="idx">
      <td>{{ price.name }}</td>
      <td>{{ price.price }} zł</td>
    </tr>
  </table>
</template>

<script>
export default {
  props: {
    prices: {
      type: Array,
      default: null
    }
  }
}
</script>

<style lang="scss" scoped>
table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

td {
  margin: 0;
  padding: 1em;
}

td:nth-child(2) {
  text-align: right;
  font-weight: bold;
  white-space: nowrap;
}

tr:nth-child(2n + 1) td {
  background-color: rgba($color-primary, 0.1);
}
</style>
