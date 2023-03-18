<template>
  <table>
    <thead>
      <tr>
        <th v-for="(column, idx) in columns" :key="idx">
          {{ column.title }}
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(price, idx) in data" :key="idx">
        <td v-for="(column, cid) in columns" :key="cid">
          {{ price[column.name] }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    columns: {
      type: Array,
      default: null
    },
    data: {
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
  margin-bottom: 2em;
  width: 100%;
}

th,
td {
  margin: 0;
  padding: 0.75em;
}

th {
  border-bottom: 2px solid rgba($color-primary, 0.2);
}

th:first-child {
  text-align: left;
}

th:not(:nth-child(1)) {
  text-align: right;
}

td:not(:nth-child(1)) {
  font-weight: bold;
  text-align: right;
  white-space: nowrap;
}

tr:nth-child(2n) td {
  background-color: rgba($color-primary, 0.05);
}
</style>
