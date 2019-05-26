<template>
  <main>
    <page-section
      title="Diagnostyka pojazdowa"
      description="Każdy samochód składa się z podzespołów, które poddawane są dużym obciążeniom. Pod wpływem eksploatacji,
        zużywają się i stają wadliwe. Osiągi Twojego pojazdu pogarszają się, a Ty ryzykujesz swoje bezpieczeństwo.
        Ponadto, usterki, które nie zostaną wykryte odpowiednio wcześniej, mogą prowadzić do kosztownych napraw w późniejszym etapie."
    >
      <flex-list item-width="1/2">
        <div class="list-item">
          <p>
            Właściwa diagnostyka pozwoli na błyskawiczne i trafne wykrycie wszelkich nieprawidłowości oraz usterek występujących w pojeździe,
            dzięki czemu naprawa będzie szybsza i łatwiejsza.
          </p>
          <p>
            Posiadamy uniwersalne komputerowe testery diagnostyczne, co pozwala nam na obsługę większości pojazdów na rynku.
            Jesteśmy w stanie szybko i bezbłędnie wskazać źródło dręczących usterek!
          </p>
          <p>
            W naszym warsztacie jesteśmy w stanie stwierdzić zużycie mechaniczne poszczególnych podzespołów. Połączenie doświadczenia z wiedzą
            oraz najwyższej klasy sprzętem diagnostycznym skutkuje zawsze trafną diagnozą, oszczędzając czas i pieniądze.
          </p>
          <p>Masz problem z uruchomieniem silnika, diagnozą uszkodzenia? Wystarczy do nas przyjechać i zostawić samochód na klika godzin.</p>
        </div>
        <div class="list-item">
          <h3>Diagnostyka obejmuje</h3>
          <ul>
            <li>
              <icon name="check" size="sm"/>
              <p>silnik,</p>
            </li>
            <li>
              <icon name="check" size="sm"/>
              <p>układ napędowy i jezdny,</p>
            </li>
            <li>
              <icon name="check" size="sm"/>
              <p>diagnostyka ABS i ESP,</p>
            </li>
            <li>
              <icon name="check" size="sm"/>
              <p>poduszki i pasy bezpieczeństwa,</p>
            </li>
            <li>
              <icon name="check" size="sm"/>
              <p>odczyt i kasowanie kodów błędów,</p>
            </li>
            <li>
              <icon name="check" size="sm"/>
              <p>odczyt bieżących parametrów,</p>
            </li>
            <li>
              <icon name="check" size="sm"/>
              <p>kodowanie i adaptacja,</p>
            </li>
            <li>
              <icon name="check" size="sm"/>
              <p>programowanie,</p>
            </li>
            <li>
              <icon name="check" size="sm"/>
              <p>kasowanie inspekcji serwisowych,</p>
            </li>
          </ul>
        </div>
      </flex-list>
    </page-section>
  </main>
</template>

<script>
import PageSection from '@/components/PageSection'
import FlexList from '@/components/FlexList'
import Icon from '@/components/Icon'

export default {
  components: { PageSection, FlexList, Icon }
}
</script>

<style lang="scss" scoped>
.list-item {
  padding: 1em;
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
    margin-right: 0.5em;
  }

  p {
    margin-top: 0em;
    text-align: left;
  }
}

.negative-margin {
  margin-top: -1em;
}
</style>
