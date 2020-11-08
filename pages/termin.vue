<template>
  <main>
    <page-section
      class="timeblockr-section"
      title="Zarezerwuj termin"
      description="Użyj poniższego formularza aby wybrać usługi a następnie umówić wizytę w naszym warsztacie w dogodnym dla Ciebie terminie."
      full-width
    >
      <timeblockr />
    </page-section>
  </main>
</template>

<script>
import PageSection from '@/components/PageSection'
import Timeblockr from '@/components/Timeblockr'

export default {
  components: { PageSection, Timeblockr },
}
</script>

<style lang="scss">
.timeblockr-section {
  padding-bottom: 1.5em;
}
</style>