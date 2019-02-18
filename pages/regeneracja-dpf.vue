<template>
  <main>
    <page-section
      class="description"
      title="Regeneracja filtrów DPF / FAP"
      description="Filtr cząstek stałych sprawia kłopoty? Jeżeli na skutek długotrwałej eksploatacji samochodu w warunkach miejskich lub awarii układu sterowania,
        filtr cząstek stałych DPF w twoim samochodzie został całkowicie zablokowany cząstkami sadzy nie musisz go już usuwać!
      "
    >
      <p>
        <strong>Zregeneruj go u Nas!</strong>
      </p>
    </page-section>
    <page-section class="regeneration-const" header="removed">
      <ul>
        <li>
          <icon name="leaf" bordered/>
          <h4>Innowacyjna, ekologiczna metoda regeneracji.</h4>
        </li>
        <li>
          <icon name="car-multiple" bordered/>
          <h4>Obsługujemy wszystkie modele samochodów.</h4>
        </li>
        <li>
          <icon name="calendar" bordered/>
          <h4>Regeneracja i wysyłka tego samego dnia.</h4>
        </li>
        <li>
          <icon name="file-chart" bordered/>
          <h4>Pełny raport dotyczący procesu regeneracji.</h4>
        </li>
      </ul>
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
          <img src="/images/dpf.png" alt>
        </div>
        <ul class="method-cons__list">
          <li>
            <icon name="check" size="small"/>
            <p>Brak ingerencji mechanicznej w strukturę filtra.</p>
          </li>
          <li>
            <icon name="check" size="small"/>
            <p>Na filtr nie oddziałuje wysoka temperatura.</p>
          </li>
          <li>
            <icon name="check" size="small"/>
            <p>Brak uszkodzeń powłoki katalitycznej filtra.</p>
          </li>
          <li>
            <icon name="check" size="small"/>
            <p>Usuwa wszystkie rodzaje cząstek stałych.</p>
          </li>
          <li>
            <icon name="check" size="small"/>
            <p>Nie narusza wkładu ceramicznego filtra.</p>
          </li>
          <li>
            <icon name="check" size="small"/>
            <p>Brak obciążeń silnika i układu wydechowego.</p>
          </li>
        </ul>
      </div>
      <p>
        Przed przystąpieniem do regeneracji filtra dokonamy jego dokładnych oględzin, aby upewnić się, czy Twój filtr DPF kwalifikuje się do naprawy,
        nie jest wytopiony, popękany, ukruszony i czy nie jest zaklejony jakimiś substancjami chemicznymi lub uszczelniającymi.
      </p>
    </page-section>
    <call-to-action>
      <h2>Gwarantujemy nawet do 99% skuteczności regeneracji !</h2>
    </call-to-action>
    <page-section
      flex
      title="Cennik regeneracji"
      description="Poniższe ceny sa cenami brutto i nie zawierają kosztu demontażu i montażu filtra."
    >
      <div class="pricelist">
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
      </div>
    </page-section>
    <page-section
      key="form"
      class="order-form"
      title="Zamów usługę"
      description="Wypełnij poniższy formularz, a wyślemy do Ciebie kuriera, który odbierze filtr DPF / FAP do regenracji.
          Po wykonaniu usługi i dokonaniu opłaty ten sam kurier dostarczy filtr spowrotem do Ciebie."
      full-width
    >
      <order-form/>
    </page-section>
  </main>
</template>

<script>
import { mapState } from 'vuex'

import PageSection from '@/components/Section'
import Icon from '@/components/Icon'
import CallToAction from '@/components/CallToAction'
import PriceCard from '@/components/PriceCard'
import OrderForm from '@/components/RegenerationOrderForm'

export default {
  components: { PageSection, Icon, CallToAction, PriceCard, OrderForm },
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
.description {
  p {
    margin-top: -1em;
    text-align: center;
  }
}

.regeneration-const {
  margin: -1em 0 -2em;

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    list-style-type: none;
    padding: 0;
  }

  li {
    align-items: center;
    display: flex;
    flex-basis: 40%;
    flex-direction: column;
    text-align: center;
    margin: 0 1em;

    @media screen and (min-width: 768px) {
      flex-basis: 20%;
    }
  }
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
    flex-basis: 48%;

    img {
      padding: 1em;
      width: 80%;

      @media screen and (min-width: 960px) {
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

    .icon {
      flex-shrink: 0;
      margin-right: 0.25em;
    }

    p {
      margin-top: 0.5em;
      text-align: left;
    }
  }
}

.pricelist {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;

  @media screen and (min-width: 580px) {
    flex-direction: row;
  }

  .pricelist__card {
    margin-bottom: 1em;
    flex-basis: 100%;

    @media screen and(min-width: 580px) {
      flex-basis: 45%;
    }

    @media screen and(min-width: 960px) {
      flex-basis: 23%;
    }
  }
}

.order-form {
  background: darken($color-background, 5%);
}
</style>
