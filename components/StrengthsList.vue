<template>
  <page-section
    flex
    class="strengths"
    title="Dlaczego warto nam zaufać?"
    description="Wszyscy, którzy skorzystali z naszych usług jednoznacznie wskazują na nasz profesjonalizm i zaangażowanie w rozwiązywanie postawionych przed nami problemów. Zgodnie podkreślają nasze najważniejsze atuty."
  >
    <div class="strengths__wrapper">
      <div class="strengths__image">
        <img
          :data-src="require('@/assets/images/mechanic.png')"
          :data-srcset="require('@/assets/images/mechanic.png').srcSet"
          data-sizes="auto"
          alt
          class="lazyload"
        >
      </div>
      <div class="strengths__items">
        <icon-card
          v-for="(strength,idx) in strengths"
          :key="idx"
          class="strength"
          :title="strength.name"
          :icon="strength.icon"
        >{{ strength.description }}</icon-card>
      </div>
    </div>
  </page-section>
</template>

<script>
import PageSection from '@/components/PageSection'
import IconCard from '@/components/IconCard'

export default {
  components: { PageSection, IconCard },
  data() {
    return {
      strengths: [
        {
          name: 'Świetna reputacja',
          description:
            'Jesteśmy małym, niezależnym warsztatem, z tego powodu niska jakość wykonania usług nie wchodzi w grę.',
          icon: 'thumb-up'
        },
        {
          name: 'Doświadczenie',
          description:
            'Nasi pracownicy są dobrze wyszkoleni oraz doświadczeni, wiedzą co robią, dlatego można im zaufać.',
          icon: 'fire'
        },
        {
          name: 'Krótkie terminy',
          description:
            'Wiemy jak ciężko Ci funkcjonować bez pojazdu, więc naszą pracę wykonujemy bez zbędnych opóźnień.',
          icon: 'rocket'
        },
        {
          name: 'Konkurencyjne ceny',
          description:
            'Klienci do nas wracają, ponieważ są traktowani uczciwie i nie przepłacają za wykonane usługi.',
          icon: 'cash'
        }
      ]
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
    flex-basis: 50%;
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
