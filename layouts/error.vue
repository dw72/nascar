<template>
  <div class="page">
    <div class="number">{{ error.statusCode }}</div>
    <h2 class="message">Ops... coś poszło nie tak!</h2>
    <p>{{ message() }}</p>
    <button class="button button--primary button--rounded" @click="$router.go(-1)">⬅&nbsp;&nbsp;Wróć</button>
  </div>
</template>

<script>
export default {
  props: {
    error: { type: Object, required: true }
  },
  methods: {
    message() {
      switch (this.error.statusCode) {
        case 401:
          return 'Nieautoryzowany dostęp.'
        case 403:
          return 'Dostęp zabroniony.'
        case 404:
          return 'Nie znaleziono żądanej strony.'
        case 500:
          return 'Wystąpił wewnętrzny błąd serwera.'
        default:
          return this.error.message
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 45vh;
  min-height: 400px;
}

.number {
  font-size: 4em;
  font-weight: bold;
  margin-top: -1em;
  opacity: 0.25;
}

h2 {
  margin: 0;
  font-size: 1.75em;
}

p {
  font-weight: bold;
  margin: 0.25em 0 2em;
  opacity: 0.5;
}

.button {
  padding: 0.5em 1.5em;
}
</style>
