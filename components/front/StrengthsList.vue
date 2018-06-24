<template>
  <page-section
    class="strengths"
    title="Dlaczego warto nam zaufać?"
    description="Wszyscy, którzy skorzystali z naszych usług jednoznacznie wskazują na nasz profesjonalizm i zaangażowanie w rozwiązywanie postawionych przed nami problemów. Zgodnie podkreślają nasze najważniejsze atuty."
  >
    <div class="strengths__wrapper">
      <div class="strengths__image">
        <img src="/images/mechanic.png" alt="">
      </div>
      <div class="strengths__items">
        <strength
          v-for="strength in strengths"
          :key="strength.name"
          :name="strength.name"
          :description="strength.description"
          :icon="strength.icon"
        />
      </div>
    </div>
  </page-section>
</template>

<script>
import strengths from '@/assets/data/strengths.json'
import PageSection from '@/components/page/Section.vue'
import Strength from './Strength.vue'

export default {
  components: { PageSection, Strength },
  data() {
    return {
      strengths
    }
  }
}
</script>

<style lang="scss">
.strengths__image {
  display: none;
  margin-bottom: -1em;
}

@media screen and (min-width: 576px) {
  .strengths__items {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .strength {
    flex-basis: 45%;
  }
}

@media screen and (min-width: 960px) {
  .strengths__image {
    align-self: flex-end;
    display: block;
    flex-basis: 40%;
  }

  .strengths__items {
    flex-basis: 55%;
  }
}

@media screen and (min-width: 1080px) {
  .strengths__image {
    flex-basis: 35%;
  }

  .strengths__items {
    flex-basis: 60%;
  }
}

@media screen and (min-width: 1200px) {
  .strengths__image {
    flex-basis: 30%;
  }
  .strengths__items {
    flex-basis: 65%;
  }
}
</style>
