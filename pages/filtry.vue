<template>
  <main>
    <page-section
      class="regeneration"
      title="Regeneracja filtrów DPF / FAP"
      description="Filtr cząstek stałych sprawia kłopoty? Jeżeli na skutek długotrwałej eksploatacji samochodu w warunkach miejskich lub awarii układu sterowania,
        filtr cząstek stałych DPF w twoim samochodzie został całkowicie zablokowany cząstkami sadzy nie musisz go już usuwać!
      "
    >
      <flex-list item-width="1/4">
        <icon-card
          title="Innowacyjna, ekologiczna metoda regeneracji."
          icon="leaf"
        />
        <icon-card
          title="Obsługujemy wszystkie modele samochodów."
          icon="car-multiple"
        />
        <icon-card
          title="Regeneracja i wysyłka tego samego dnia."
          icon="calendar"
        />
        <icon-card
          title="Pełny raport dotyczący procesu regeneracji."
          icon="file-chart"
        />
      </flex-list>
    </page-section>
    <page-section
      class="method-cons"
      title="Zalety naszej metody"
      description="
        Wykorzystujemy siłę hydrodynamiki przepływu wody oraz siłę impulsu sprężonego powietrza z kompresora.
        Ruch płynu roboczego wymuszany jest przez zewnętrzne ciśnienie, które musi pokonać opory przepływu w kanałach filtra.
        Strugi cieczy mieszają się tworząc wiry, które w łatwy sposób przenikają i usuwają cząstki stałe w mikroporowatych przegrodach kanałów filtra.
      "
    >
      <div class="method-cons__content">
        <div class="method-cons__image">
          <img
            :data-src="require('@/assets/images/dpf.png')"
            :data-srcset="require('@/assets/images/dpf.png').srcSet"
            data-sizes="auto"
            alt
            class="lazyload"
          />
        </div>
        <ul class="method-cons__list">
          <li>
            <icon name="check" size="sm" />
            <p>Brak ingerencji mechanicznej w strukturę filtra.</p>
          </li>
          <li>
            <icon name="check" size="sm" />
            <p>Na filtr nie oddziałuje wysoka temperatura.</p>
          </li>
          <li>
            <icon name="check" size="sm" />
            <p>Brak uszkodzeń powłoki katalitycznej filtra.</p>
          </li>
          <li>
            <icon name="check" size="sm" />
            <p>Usuwa wszystkie rodzaje cząstek stałych.</p>
          </li>
          <li>
            <icon name="check" size="sm" />
            <p>Nie narusza wkładu ceramicznego filtra.</p>
          </li>
          <li>
            <icon name="check" size="sm" />
            <p>Brak obciążeń silnika i układu wydechowego.</p>
          </li>
        </ul>
      </div>
      <p>
        Przed przystąpieniem do regeneracji filtra dokonamy jego dokładnych
        oględzin, aby upewnić się, czy Twój filtr DPF kwalifikuje się do
        naprawy, nie jest wytopiony, popękany, ukruszony i czy nie jest
        zaklejony jakimiś substancjami chemicznymi lub uszczelniającymi.
      </p>
    </page-section>
    <call-to-action>
      <h2>Gwarantujemy nawet do 99% skuteczności regeneracji !</h2>
    </call-to-action>
    <page-section
      title="Cennik regeneracji"
      description="Poniższe ceny sa cenami brutto i nie zawierają kosztu demontażu i montażu filtra."
    >
      <!-- <div class="pricelist"> -->
      <flex-list item-width="1/4">
        <price-card
          v-for="(price, idx) in pricelist"
          :key="idx"
          class="pricelist__card"
          :icon="price.icon"
          :title="price.name"
          :price="price.price"
          :promo-price="price.promoPrice"
        >
          <ul>
            <li>Odbiór od klienta</li>
            <li>Diagnostyka</li>
            <li>Regenracja</li>
            <li>Raport kontrolny</li>
            <li>Odesłanie klientowi</li>
          </ul>
        </price-card>
      </flex-list>
      <!-- </div> -->
    </page-section>
    <page-section
      key="form"
      class="order-form"
      title="Zamów usługę"
      description="Wypełnij poniższy formularz, a wyślemy do Ciebie kuriera, który odbierze filtr DPF / FAP do regenracji.
          Po wykonaniu usługi i dokonaniu opłaty ten sam kurier dostarczy filtr spowrotem do Ciebie."
      full-width
    >
      <order-form />
    </page-section>
  </main>
</template>

<script>
import { mapState } from 'vuex'

import PageSection from '@/components/PageSection'
import FlexList from '@/components/FlexList'
import IconCard from '@/components/IconCard'
import Icon from '@/components/Icon'
import CallToAction from '@/components/CallToAction'
import PriceCard from '@/components/PriceCard'
import OrderForm from '@/components/RegenerationOrderForm'

export default {
  components: {
    PageSection,
    FlexList,
    IconCard,
    Icon,
    CallToAction,
    PriceCard,
    OrderForm
  },
  head() {
    return {
      title: 'Regeneracja filtrów DPF / FAP'
    }
  },
  computed: {
    ...mapState('regeneration', ['pricelist', 'orderId'])
  },
  async created() {
    await this.$store.dispatch('regeneration/REGENERATION_PRICELIST_REQUEST')
  }
}
</script>

<style lang="scss" scoped>
.regeneration {
  margin-bottom: -2em;
}

.method-cons {
  p {
    text-align: center;
  }

  &__content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    @media screen and (min-width: 960px) {
      flex-direction: row;
    }
  }

  &__image {
    align-items: center;
    display: flex;
    justify-content: center;
    width: 100%;

    img {
      padding: 1em;
      width: 80%;
    }

    @media screen and (min-width: 580px) {
      img {
        width: 60%;
      }
    }

    @media screen and (min-width: 960px) {
      width: 48%;

      img {
        width: 90%;
      }
    }
  }

  ul {
    flex-basis: 45%;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;

    @media screen and (min-width: 580px) {
      display: flex;
    }

    @media screen and (min-width: 960px) {
      display: initial;
    }
  }

  li {
    align-items: flex-start;
    display: flex;
    justify-content: flex-start;
    flex-basis: 45%;
    margin-bottom: 0.25em;

    .icon {
      flex-shrink: 0;
      margin-right: 0.5em;
    }

    p {
      margin-top: 0em;
      text-align: left;
    }
  }
}

.order-form {
  background: darken($color-background, 5%);
}
</style>
