<template>
  <header class="page__header">

    <div class="branding">
      <div class="branding__nascar">
        <h1 class="hidden">PPHU Nascar</h1>
        <img src="/images/logo/nascar.svg" alt="">
      </div>
      <div class="branding__premio">
        <h2 class="hidden">Przedstawiciel Premio - Opony i Autoserwis</h2>
        <img src="/images/logo/premio.svg" alt="">
      </div>
    </div>

    <navigation/>
  </header>
</template>

<script>
import Navigation from './Navigation.vue'

export default {
  components: { Navigation }
}
</script>

<style>
  .branding {
    align-items: flex-end;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 2em;
    margin-bottom: 2em;
  }

  .branding__nascar img {
    width: 250px;
  }

  .branding__premio,
  .slider {
    display: none;
  }

  @media screen and (min-width: 768px) {
    .branding {
      justify-content: space-between;
    }

    .branding__premio,
    .slider {
      display: block;
    }
  }
</style>
