<template>
  <main>
    <page-section
      class="touchless-wash"
      title="Myjnia bezdotykowa"
      description="Mycie bezdotykowe to obecnie ciesząca się największym uznaniem metoda mycia samochodów. Kierowcy dostrzegają wiele zalet mycia bezdotykowego. Trzy najważniejsze z nich to:"
    >
      <icon-card-list>
        <icon-card
          title="Bezpieczeństwo"
          icon="shield-check-outline"
        >Korzystanie z myjni odbywa się bez użycia szczotek, które mogą uszkodzić lakier. Nanoszony na powierzchnię pojazdu wosk chroni lakier przed działaniem promieni UV, powstawaniem mikrozarysowań oraz ponownym zabrudzeniem.</icon-card>
        <icon-card
          title="Skuteczność"
          icon="thumb-up"
        >Używany podczas mycia mikroproszek, temperatura i wysokie ciśnienie gwarantują rezultat, porównywalny z myciem przy użyciu szczotek. Używając kolejno wszystkich programów myjni otrzymujemy efekt połysku bez plam i zacieków.</icon-card>
        <icon-card title="Oszczędność" icon="cash">
          Koszty ponoszone na myjni bezdotykowej są zdecydowanie niższe niż na myjniach samochodowych innego typu. Dzięki samoobsłudze użytkownik sam decyduje w jakim czasie i za jaką cenę umyje swój pojazd.
          <strong>Minuta mycia = 1 zł</strong>.
        </icon-card>
      </icon-card-list>
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
        <h3>Zanim zaczniesz</h3>
        <ul class="before-begin__list">
          <li>
            <icon name="check" size="sm"/>
            <p>
              Sprawdź czy posiadasz odpowiednią ilość monet o nominałach:
              <span
                style="white-space: nowrap;"
              >1 zł / 2 zł / 5 zł.</span>
            </p>
          </li>
          <li>
            <icon name="check" size="sm"/>
            <p>Zatrzymaj pojazd możliwie pośrodku stanowiska, abyś mógł swobodnie obejść go dookoła.</p>
          </li>
          <li>
            <icon name="check" size="sm"/>
            <p>Na naszej myjni nie ma konieczności demontażu bagażnika, anten czy składania luster.</p>
          </li>
          <li>
            <icon name="check" size="sm"/>
            <p>Po wrzuceniu monet wyjmij lancę i wciśnij przycisk wybranego programu. Rozpoczyna się naliczanie czasu.</p>
          </li>
        </ul>
      </div>
    </page-section>
    <page-section
      class="programs"
      title="Opis programów"
      description="To Ty decydujesz o wyborze programu mycia. Możesz go zmienić w każdej chwili. Pamiętaj jednak aby w przypadku awarii urządzenia niezwłocznie wciśnąć przycisk STOP (nie wstrzymuje biegu licznika) aby uniknąć większych uszkodzeń."
      no-divider
    >
      <p>Pracujemy nad opisem, zajrzyj tutaj wkrótce...</p>
    </page-section>
    <page-section
      class="service-wash"
      title="Myjnia obsługowa"
      description="
        Z myślą o klientach, którzy cenią kompleksową obsługę uruchomiliśmy obsługową myjnię samochodową. Nasz pracownik zadba o Twój pojazd, m.in. umyje karoserię, wyczyści tapicerkę oraz nabłyszczy lakier.
        Myjnia obsługowa obejmuje wszystkie programy myjni bezdotykowej.
      "
    >
      <price-list :columns="columns" :data="pricelist"/>
      <p class="disclaimer">* Cena usługi zależy od wielkości pojazdu.</p>
    </page-section>
  </main>
</template>

<script>
import { mapState } from 'vuex'

import PageSection from '@/components/PageSection'
import IconCardList from '@/components/IconCardList'
import IconCard from '@/components/IconCard'
import Icon from '@/components/Icon'
import PriceList from '@/components/PriceList'

export default {
  components: { PageSection, IconCardList, IconCard, Icon, PriceList },
  head() {
    return {
      title: 'Myjnia samochodowa'
    }
  },
  data() {
    return {
      columns: [
        { name: 'name', title: 'Usługa' },
        { name: 'price_1', title: 'Małe' },
        { name: 'price_2', title: 'Średnie' },
        { name: 'price_3', title: 'Duże' }
      ]
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

<style lang="scss">
.touchless-wash {
  margin-bottom: -2em;
}

.howto__conditions {
  h3 {
    text-align: center;
  }
}

.howto {
  ul {
    padding: 0;
    margin-bottom: 0;
  }

  li {
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    margin-bottom: 0.75em;

    &:last-child {
      margin-bottom: 0;
    }

    .icon {
      flex-shrink: 0;
      margin-right: 0.5em;
    }

    p {
      margin: 0em;
      text-align: left;
    }
  }

  .howto__video {
    padding: 1em 0 0;
  }

  .howto__conditions {
    padding: 1em 2em 0;
  }

  @media screen and (min-width: 960px) {
    h3 {
      font-size: 1.1em;
      margin-bottom: 0;
      margin-top: 0;
      line-height: 1;
    }

    .section__content {
      display: flex;
    }

    .howto__video {
      flex: 1;
      padding-left: 1em;
    }

    .howto__conditions {
      display: flex;
      flex: 1;
      flex-direction: column;
      justify-content: center;
    }
  }
}

.video-wrapper {
  position: relative;
  width: 100%;
  height: 0px;
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
  h2 {
    font-size: 1.1em;
  }

  p {
    text-align: center;
  }
}

.service-wash {
  p.disclaimer {
    font-size: 0.9em;
    margin-left: 1em;
    color: $color-secondary;
  }
}
</style>
