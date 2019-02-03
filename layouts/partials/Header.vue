
<template>
  <header class="page__header">
    <div class="branding">
      <div class="branding__nascar">
        <h1 class="hidden">PPHU Nascar</h1>
        <nascar-logo/>
      </div>
      <div class="branding__premio">
        <h2 class="hidden">Przedstawiciel Premio - Opony i Autoserwis</h2>
        <premio-logo/>
      </div>
    </div>

    <navigation/>
  </header>
</template>

<script>
import NascarLogo from '@/assets/images/logo/nascar.svg'
import PremioLogo from '@/assets/images/logo/premio.svg'

import Navigation from './Navigation.vue'

export default {
  components: { NascarLogo, PremioLogo, Navigation }
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
