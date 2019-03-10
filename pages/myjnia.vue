<template>
  <main>
    <page-section
      class="description"
      title="Myjnia samochodowa"
      description="Pracujemy nad tą sekcją naszej strony, zajrzyj tu za kilka dni..."
    />
  </main>
</template>

<script>
import PageSection from '@/components/PageSection'
export default {
  components: { PageSection },
  head() {
    return {
      title: 'Myjnia samochodowa'
    }
  }
}
</script>
