<template>
  <main>
    <page-section
      title="Stacja kontroli"
      description="Wykonujemy obsługę diagnostyczną i przeglądy rejestracyjne oraz badania techniczne samochodów osobowych, motocykli, ciągników rolniczych w tym pojazdów sprowadzonych z zagranicy, powypadkowych i zasilanych gazem."
    />
    <page-section
      title="Cennik usług"
    />
  </main>
</template>

<script>
import PageSection from '@/components/page/Section.vue'

export default {
  components: {PageSection},
  head() {
    return {
      title: 'Stacja kontroli'
    }
  }
}
</script>
