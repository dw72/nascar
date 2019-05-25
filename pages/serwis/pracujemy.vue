<template>
  <main>
    <page-section
      class="working"
      title="Zapraszamy później"
      description="
        Pracujemy nad tą sekcją naszej strony, zajrzyj tu za kilka dni..."
      flex
      no-divider
    >
      <div v-for="(service, idx) in services" :key="idx" class="service">
        <icon-card :title="service.name" :icon="service.icon" icon-size="lg" :bordered="false">
          <div class="repair__description">
            <p>{{ service.description }}</p>
            <nuxt-link to="/">Czytaj więcej</nuxt-link>
          </div>
        </icon-card>
      </div>
    </page-section>
  </main>
</template>

<script>
import PageSection from '@/components/PageSection'

export default {
  components: { PageSection }
}
</script>

<style lang="scss" scoped>
.working {
  align-items: center;
  display: flex;
  justify-content: center;
  height: 20em;
  margin-bottom: 3em;
}
</style>
