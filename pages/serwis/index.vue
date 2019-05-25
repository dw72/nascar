<template>
  <main>
    <page-section
      class="repair"
      title="Serwis pojazdów"
      description="
        Od wielu lat pomagamy naszym klientom w obsłudze eksploatacyjnej oraz naprawie pojazdów w szerokim zakresie.
        Dysponujemy szerokim wahlarzem usług w zakresie mechaniki pojazdowej oraz obsługi pojazdów. Dziedziny, w których możemy pomóc to:"
      flex
    >
      <div v-for="(service, idx) in services" :key="idx" class="service">
        <icon-card :title="service.name" :icon="service.icon" icon-size="lg" :bordered="false">
          <div class="repair__description">
            <p>{{ service.description }}</p>
            <nuxt-link :to="`/serwis/${service.url}`">Czytaj więcej</nuxt-link>
          </div>
        </icon-card>
      </div>
    </page-section>
  </main>
</template>

<script>
// Ikony pochodza ze strony https://www.flaticon.com/packs/car-engine-16

import PageSection from '@/components/PageSection'
import IconCard from '@/components/IconCard'

export default {
  components: { PageSection, IconCard },
  head() {
    return {
      title: 'Serwis pojazdów'
    }
  },
  data() {
    return {
      services: [
        {
          name: 'Ogumienie',
          description:
            'Ogumienie jest jednym z najważniejszych elementów każdego pojazdu i ma bezpośredni wpływ na bezpieczeństwo na drodze.',
          icon: 'tire',
          url: 'opony'
        },
        {
          name: 'Zawieszenie',
          description:
            'Zadbaj o bezpieczeństwo w czasie jazdy i odwiedź nasz punkt, aby sprawdzić stan układu jezdnego swojego samochodu.',
          icon: 'suspension',
          url: 'pracujemy'
        },
        {
          name: 'Geometria',
          description:
            'Nieprawidłowo ustawione koła powodują zdecydowanie szybsze zużycie opon oraz zmniejszoną kontrolę kierowcy nad pojazdem.',
          icon: 'car-engine',
          url: 'pracujemy'
        },
        {
          name: 'Układ hamulcowy',
          description:
            'Sprawny układ hamulcowy ma bezpośredni wpływ na bezpieczeństwo w ruchu drogowym. Od niego może zależeć Twoje "być" albo "nie być".',
          icon: 'brake-disc',
          url: 'pracujemy'
        },
        {
          name: 'Układ wydechowy',
          description:
            'Zmniejsza ilość szkodliwych gazów występujących w spalinach, reguluje poziomu hałasu oraz zapewnia optymalną pracę silnika.',
          icon: 'exhaust-pipe',
          url: 'pracujemy'
        },
        {
          name: 'Układ kierowniczy',
          description:
            'Układ kierowniczy jest kluczowym elementem każdego pojazdu, ponieważ to właśnie on pozwala użytkownikowi sprawnie nawigować pojazdem.',
          icon: 'steering-wheel',
          url: 'pracujemy'
        },
        {
          name: 'Klimatyzacja',
          description:
            'Sprawna klimatyzacja to nie tylko większy komfort jazdy, ale także neutralizacja alergenów, które niekorzystnie wpływają na nasze zdrowie.',
          icon: 'fan',
          url: 'pracujemy'
        },
        {
          name: 'Oleje',
          description:
            'Wymiana oleju, filtrów i płynów eksploatacyjnych jest istotna, by ochronić silnik oraz zapewnić bezawaryjną i długotrwałą eksploatację.',
          icon: 'oil',
          url: 'pracujemy'
        },
        {
          name: 'Akumulatory',
          description:
            'Wymiana akumulatora może być konieczna w momencie, kiedy auto ma problemy z uruchomieniem zimnego silnika a kontrolki przygasają.',
          icon: 'battery',
          url: 'pracujemy'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.service {
  flex: 1 1 100%;
  justify-content: center;
  margin: 0;

  @media screen and (min-width: 580px) {
    flex-basis: 45%;
  }

  @media screen and (min-width: 960px) {
    flex-basis: 30%;
  }

  p {
    margin-bottom: 1.5em;
    margin-top: 0;
  }

  a {
    border-bottom: 2px dashed transparent;
    color: $color-primary;
    font-size: 0.8em;
    padding: 0.1em;
    position: relative;
    text-decoration: none;
    transition: all 0.2s ease-in-out;

    &::after {
      content: '⤑';
      font-weight: 600;
      margin-left: 0.25em;
      position: absolute;
      top: 0em;
    }

    &:hover,
    &:focus {
      border-bottom-color: rgba($color-secondary, 0.45);

      &::after {
        animation: pulse 0.75s infinite 0.25s;
      }
    }
  }
}

.repair__description {
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 100%;

  p {
    flex: 1;
  }
}

@keyframes pulse {
  from {
    margin-left: 0.25em;
  }
  to {
    margin-left: 0.75em;
  }
}
</style>
