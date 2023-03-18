<template>
  <main>
    <page-section
      title="Akumulatory"
      description="Żywotność nowych akumulatorów zależy od miejsca i sposobu użytkowania auta, ale producenci określają ją na ok 4-5 lat.
        Wymiana akumulatora może być konieczna w momencie, kiedy auto ma problemy z uruchomieniem zimnego silnika a kontrolki przygasają.
        Zazwyczaj jednak wystarczy jego doładowanie i uzupełnienie wody."
    >
      <flex-list item-width="1/2">
        <div class="list-item">
          <h3>Przyczyny rozładowania akumulatora</h3>
          <ul>
            <li>
              <icon name="check" size="sm" />
              <p>eksploatowanie auta na krótkich odcinkach w dużych odstępach czasu,</p>
            </li>
            <li>
              <icon name="check" size="sm" />
              <p>nadmierne obciążenie instalacji elektrycznej,</p>
            </li>
            <li>
              <icon name="check" size="sm" />
              <p>niesprawna instalacja elektryczna,</p>
            </li>
            <li>
              <icon name="check" size="sm" />
              <p>niesprawny alternator,</p>
            </li>
            <li>
              <icon name="check" size="sm" />
              <p>pozostawione otwarte drzwi lub klapa bagażnika, włączone światła podczas postoju.</p>
            </li>
          </ul>
        </div>
        <div class="list-item">
          <h3>Typy akumulatorów</h3>
          <ul>
            <li>
              <icon name="check" size="sm" />
              <p>
                <strong>kwasowo-ołowiowe</strong> – najczęściej spotykane i stosowane w prawie każdym typie pojazdów, a wśród nich wyróżniamy akumulatory obsługowe, które wymagają kontroli stanu elektrolitu oraz bezobsługowe, które posiadają tzw. „magiczne oczko” informujące kolorem o stopniu naładowania
              </p>
            </li>
            <li>
              <icon name="check" size="sm" />
              <p>
                <strong>żelowe</strong> – większa pojemność i odporność na rozładowania
              </p>
            </li>
            <li>
              <icon name="check" size="sm" />
              <p>
                <strong>akumulatory AGM</strong> – zbudowane z nasączonej elektrolitem maty włókna szklanego, stosowane zazwyczaj w autach hybrydowych lub pojazdach intensywnie eksploatowanych
              </p>
            </li>
          </ul>
        </div>
      </flex-list>
      <p class="centered">
        Wybierając nowy akumulator, należy poprosić o pomoc specjalistę, który dobierze odpowiedni typ i rozmiar.
        Pojemność akumulatora musi być adekwatna do potrzeb naszego samochodu. Kupując akumulator o zbyt małej pojemności,
        nasz pojazd będzie zmagał się z niedoborem prądu, podczas gdy przy zbyt dużej pojemności alternator nie będzie w stanie napełnić go w 100%.
        Należy zwrócić uwagę również na datę pierwszego napełnienia elektrolitem, gdyż może mieć to wpływ na jego żywotność.
      </p>
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
</style>
