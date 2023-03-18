<template>
  <main>
    <page-section
      title="Zawieszenie"
      description="Amortyzatory, resory, tulejki, sworznie, wahacze i inne pozostałe części układu kierowniczego i zawieszenia powinny być okresowo sprawdzane.
        Uszkodzone mogą znacznie utrudnić panowanie nad autem podczas jazdy, a nawet doprowadzić do całkowitej utraty kontroli nad pojazdem."
    >
      <flex-list item-width="1/2">
        <icon-card
          title="Wymiana amortyzatorów"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
          full-width
        >
          <p>
            Amortyzatory zapobiegają nadmiernemu kołysaniu się pojazdu oraz utrzymują ciągły kontakt kół z nawierzchnią, dlatego poprawne dobranie i zamontowanie
            daje nam gwarancję bezpieczeństwa podczas jazdy na różnych nawierzchniach. Uszkodzone amortyzatory wpływają negatywnie na sterowność pojazdu
            podczas skręcania i mniejszą efektywność ABS i ESP, co powoduje ściąganie samochodu na boki oraz na wydłużenie drogi hamowania.
            Dodatkowo występuje większe prawdopodobieństwo powstania zjawiska aquaplaningu i poślizgu na mokrej nawierzchni.
          </p>
          <p>
            Wymiana amortyzatorów jest konieczna średnio co 100 tysięcy km lub w zależności od stanu dróg i stylu jazdy kierowcy, a ich kontroli można dokonać
            jedynie przy użyciu urządzeń mierzących absorpcję energii przez amortyzator poprzez wymuszenie ruchów sprężania i rozprężania.
          </p>
        </icon-card>
        <icon-card
          title="Wymiana tulei wahacza"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Tuleja tłumi drgania przenoszone z nawierzchni, a jej wymiana może być konieczna już po przebyciu 30 000 km. Szarpanie podczas ruszania oraz stukanie
            w trakcie jazdy to objawy, które mogą świadczyć o tym, że tuleje są wyeksploatowane i należy sprawdzić, czy nie jest konieczna ich wymiana.
          </p>
        </icon-card>
        <icon-card
          title="Wymiana sworznia wahacza"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Jego zadaniem jest przenoszenie obciążenia zginającego, mocuje on również zwrotnicę do wahacza, narażony jest on na uszkodzenia podczas eksploatacji
            na dziurawych nawierzchniach.
          </p>
        </icon-card>
        <icon-card
          title="Wymianę końcówki drążka kierowniczego"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            W końcówce drążka zawiera się przegub kulowy, który pozwala na ruch zawieszenia koła i skręcanie zwrotnicy w stosunku do przekładni kierowniczej.
            Wyczuwalne luzy w kierownicy to znak, że konieczna jest jego wymiana, po której niezbędne jest wykonanie prawidłowego ustawienia geometrii zawieszenia.
          </p>
        </icon-card>
        <icon-card
          title="Wymiana wahacza"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Wahacz łączy zwrotnicę z nadwoziem i często wygina się lub pęka. W pojeździe występuje kilka wahaczy i mają one wpływ na ruch kół, co oznacza
            równorzędną współpracę nadwozia, podwozia i zawieszenia. Dlatego gdy tylko dojdzie do uszkodzenia, wahacz należy jak najszybciej wymienić.
          </p>
        </icon-card>
      </flex-list>
    </page-section>
    <page-section header="removed" full-width grey>
      <p
        class="centered bigger"
      >
        Dysponujemy nowoczesnym sprzętem do pomiaru i regulacji geometrii zawieszenia, wykonamy prace mechaniczne związane z wymianą wahaczy, tulei i drążków.
      </p>
    </page-section>
  </main>
</template>

<script>
import PageSection from '@/components/PageSection'
import FlexList from '@/components/FlexList'
import IconCard from '@/components/IconCard'

export default {
  components: { PageSection, FlexList, IconCard }
}
</script>
