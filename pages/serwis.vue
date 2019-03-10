<template>
  <main>
    <page-section
      class="description"
      title="Serwis pojazdów"
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
      title: 'Serwis pojazdów'
    }
  }
}
</script>
