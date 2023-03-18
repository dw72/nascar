
<template>
  <header class="page__header">
    <div class="branding">
      <div class="branding__nascar">
        <h1 class="hidden">
          PPHU Nascar
        </h1>
        <svg-icon name="logo/nascar" width="12em" height="5em" />
      </div>
      <div class="branding__premio">
        <h2 class="hidden">
          Przedstawiciel Premio - Opony i Autoserwis
        </h2>
        <svg-icon name="logo/premio" width="19em" height="3em" />
      </div>
    </div>

    <navigation />
  </header>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  components: { Navigation }
}
</script>

<style lang="scss">
.branding {
  align-items: flex-end;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 1.25em 0;

  .branding__premio {
    display: none;
  }
}

@media screen and (min-width: 768px) {
  .branding {
    justify-content: space-between;
    .branding__premio {
      display: block;
    }
  }
}
</style>
