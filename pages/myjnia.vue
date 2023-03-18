<template>
  <main>
    <page-section
      class="touchless-wash"
      title="Myjnia bezdotykowa"
      description="Mycie bezdotykowe to obecnie ciesząca się największym uznaniem metoda mycia samochodów. Kierowcy dostrzegają wiele zalet mycia bezdotykowego.
        Jednak trzy z nich uważane są przez wszystkich za najważniejsze."
    >
      <flex-list>
        <icon-card title="Bezpieczeństwo" icon="shield-check-outline">
          Korzystanie z myjni odbywa się bez użycia szczotek, które mogą
          uszkodzić lakier. Nanoszony na powierzchnię pojazdu wosk chroni lakier
          przed działaniem promieni UV, powstawaniem mikrozarysowań oraz
          ponownym zabrudzeniem.
        </icon-card>
        <icon-card title="Skuteczność" icon="thumb-up">
          Używany podczas mycia mikroproszek, temperatura i wysokie ciśnienie
          gwarantują rezultat, porównywalny z myciem przy użyciu szczotek.
          Używając kolejno wszystkich programów myjni otrzymujemy efekt połysku
          bez plam i zacieków.
        </icon-card>
        <icon-card title="Oszczędność" icon="cash">
          Koszty ponoszone na myjni bezdotykowej są zdecydowanie niższe niż na
          myjniach samochodowych innego typu. Dzięki samoobsłudze użytkownik sam
          decyduje w jakim czasie i za jaką cenę umyje swój pojazd.
          <strong>Minuta mycia = 1 zł</strong>.
        </icon-card>
      </flex-list>
    </page-section>
    <page-section
      class="howto"
      title="Jak skorzystać z myjni?"
      description="Jak umyć swój samochód bezpiecznie, skutecznie i tanio? Poniżej przedstawiamy wskazówki dotyczące korzystania z naszych myjni."
      full-width
      no-padding
    >
      <div class="howto__video">
        <div class="video-wrapper">
          <iframe
            src="https://www.youtube.com/embed/xdDMiiwlEY8?showinfo=0&loop=0"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          />
        </div>
      </div>
      <div class="howto__conditions">
        <ul class="before-begin__list">
          <li>
            <icon name="check" size="sm" />
            <p>
              Sprawdź czy posiadasz odpowiednią ilość monet:
              <span style="white-space: nowrap">
                1 zł / 2 zł / 5 zł / żeton 2 / żeton 5.
              </span>
              Możesz zapłacić też kartą i telefonem.
            </p>
          </li>
          <li>
            <icon name="check" size="sm" />
            <p>
              Zatrzymaj pojazd możliwie pośrodku stanowiska, abyś mógł swobodnie
              obejść go dookoła.
            </p>
          </li>
          <li>
            <icon name="check" size="sm" />
            <p>
              Na naszej myjni nie ma konieczności demontażu bagażnika, anten czy
              składania luster.
            </p>
          </li>
          <li>
            <icon name="check" size="sm" />
            <p>
              Po wrzuceniu monet wyjmij lancę i wciśnij przycisk wybranego
              programu. Rozpoczyna się naliczanie czasu.
            </p>
          </li>
        </ul>
      </div>
    </page-section>
    <page-section
      class="programs"
      title="Opis programów"
      description="To Ty decydujesz o wyborze programu mycia. Możesz go zmienić w każdej chwili. Pamiętaj jednak aby w przypadku awarii urządzenia niezwłocznie wciśnąć
        przycisk STOP (nie wstrzymuje biegu licznika) aby uniknąć większych uszkodzeń."
      full-width
    >
      <flex-list item-width="1/2">
        <icon-card
          v-for="(program, idx) in programs"
          :key="idx"
          class="program"
          :title="program.title"
          :icon="program.icon"
          :bordered="false"
          horizontal
        >
          {{ program.description }}
        </icon-card>
      </flex-list>
    </page-section>
    <page-section
      class="service-wash"
      title="Myjnia obsługowa"
      description="Z myślą o klientach, którzy cenią kompleksową obsługę uruchomiliśmy obsługową myjnię samochodową.
        Nasz pracownik zadba o Twój pojazd, m.in. umyje karoserię, wyczyści tapicerkę oraz nabłyszczy lakier. Myjnia obsługowa obejmuje wszystkie programy myjni bezdotykowej.
      "
    >
      <price-list :columns="columns" :data="pricelist" />
      <p class="disclaimer">* Cena usługi zależy od wielkości pojazdu.</p>
    </page-section>
  </main>
</template>

<script>
import { mapState } from 'vuex'

import PageSection from '@/components/PageSection'
import FlexList from '@/components/FlexList'
import IconCard from '@/components/IconCard'
import Icon from '@/components/Icon'
import PriceList from '@/components/PriceList'

import programs from '@/data/programs.json'

export default {
  components: { PageSection, FlexList, IconCard, Icon, PriceList },
  data() {
    return {
      columns: [
        { name: 'name', title: 'Usługa' },
        { name: 'price_1', title: 'Małe' },
        { name: 'price_2', title: 'Średnie' },
        { name: 'price_3', title: 'Duże' }
      ],
      programs
    }
  },
  head() {
    return {
      title: 'Myjnia samochodowa'
    }
  },
  computed: {
    ...mapState('wash', ['pricelist'])
  },
  async created() {
    await this.$store.dispatch('wash/WASH_PRICELIST_REQUEST')
  }
}
</script>

<style lang="scss" scoped>
.howto {
  background: darken($color-background, 5%);

  ul {
    padding: 0;
  }

  li {
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.5em;

    &:last-child {
      margin-bottom: 0;
    }

    .icon {
      flex-shrink: 0;
      margin-right: 0.5em;
    }

    p {
      margin: 0em;
    }
  }

  .howto__video {
    padding: 1em 0 0;
  }

  .howto__conditions {
    padding: 1em 2em 0;
  }

  @media screen and (min-width: 960px) {
    .howto__video {
      flex: 1 1 48%;
      padding-left: 1em;
      padding-bottom: 1em;
    }

    .howto__conditions {
      display: flex;
      flex: 1 1 52%;
      flex-direction: column;
      justify-content: center;
      padding-bottom: 1em;
    }
  }
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
}

.programs {
  background: darken($color-background, 5%);
}
</style>

<style lang="scss">
.howto .section__content {
  @media screen and (min-width: 960px) {
    align-items: center;
    display: flex;
  }
}
</style>
