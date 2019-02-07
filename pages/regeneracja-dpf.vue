<template>
  <main>
    <page-section class="desc" title="Regeneracja filtrów DPF / FAP">
      <p>
        Filtr cząstek stałych sprawia kłopoty? Jeżeli na skutek długotrwałej eksploatacji samochodu w warunkach miejskich lub awarii układu sterowania,
        filtr cząstek stałych DPF w twoim samochodzie został całkowicie zablokowany cząstkami sadzy nie musisz go już usuwać!
        <strong>Zregeneruj go u Nas!</strong>
      </p>
      <!-- <p>
        Przed przystąpieniem do regeneracji filtra dokonamy jego dokładnych oględzin, aby upewnić się, czy Twój filtr DPF kwalifikuje się do naprawy,
        nie jest wytopiony, popękany, ukruszony i czy nie jest zaklejony jakimiś substancjami chemicznymi lub uszczelniającymi.
      </p>-->
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
      description="Wykorzystujemy siłę hydrodynamiki przepływu wody oraz siłę impulsu sprężonego powietrza z kompresora. Ruch płynu roboczego wymuszany jest przez zewnętrzne ciśnienie, które musi pokonać opory przepływu w kanałach filtra. Strugi cieczy mieszają się tworząc wiry, które w łatwy sposób przenikają i usuwają cząstki stałe w mikroporowatych przegrodach kanałów filtra."
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
    </page-section>
    <call-to-action>
      <h2>Gwarantujemy nawet do 99% skuteczności regenracji !</h2>
    </call-to-action>
    <page-section title="Cena usługi">Tu będzie cennik</page-section>
    <page-section title="Zamów usługę">A tu formularz</page-section>
  </main>
</template>

<script>
import PageSection from '@/components/Section'
import Icon from '@/components/Icon'
import CallToAction from '@/components/CallToAction'

export default {
  components: { PageSection, Icon, CallToAction },
  head() {
    return {
      title: 'Regeneracja filtrów DPF / FAP'
    }
  }
}
</script>

<style lang="scss" scoped>
.desc {
  p {
    text-align: center;
  }

  p:first-child {
    margin-top: -1em;
  }
}

.method-cons__content {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (min-width: 980px) {
    flex-direction: row;
  }
}

.method-cons__image {
  align-items: center;
  display: flex;
  justify-content: center;
  flex-basis: 48%;

  img {
    padding: 1em;
    width: 60%;

    @media screen and (min-width: 980px) {
      width: 90%;
    }
  }
}

.method-cons__list {
  flex-basis: 45%;
  flex-wrap: wrap;
  justify-content: space-around;
  list-style-type: none;
  padding: 0;

  @media screen and (min-width: 580px) {
    display: flex;
  }

  @media screen and (min-width: 980px) {
    display: initial;
  }

  li {
    align-items: center;
    display: flex;
    justify-content: flex-start;
    flex-basis: 45%;

    .icon {
      flex-shrink: 0;
      margin-right: 0.25em;
    }
  }
}

.regeneration-const {
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
</style>
