<template>
  <main>
    <page-section
      title="Serwis ogumienia"
      description="Ogumienie jest jednym z najważniejszych elementów każdego pojazdu i ma bezpośredni wpływ na bezpieczeństwo na drodze.
        Dlatego każdy kierowca powinien pamiętać, że właściwy dobór opon (letnich, zimowych), ich sezonowa wymiana i eksploatacja zgodna z przeznaczeniem
        to podstawa bezpiecznego ruchu na drodze i komfortowego podróżowania."
    >
      <flex-list item-width="1/2">
        <icon-card
          title="Montaż i wymiana opon"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Od prawidłowo przeprowadzonego procesu wymiany zależy bezpieczeństwo kierowcy, bezawaryjne użytkowanie opony oraz jej żywotność.
            Podczas wymiany ogumienia sprawdzany jest ich stan ogólny oraz głębokość bieżnika. Nowoczesny sprzęt jakim dysponujemy pozwala na sprawny i precyzyjny
            przebieg złożonego procesu serwisowania opon, piast i felg.
          </p>
          <p>
            Sprawdzamy głębokość bieżnika, ciśnienie powietrza, zużycie i wiek opon oraz ewentualne uszkodzenia ściany bocznej.
            Jeżeli zauważymy nieprawidłowość bądź defekt, niezwłocznie przywrócimy Twoje opony do stanu optymalnego lub sprawnie wymienimy na nowe.
          </p>
        </icon-card>
        <icon-card title="Wyważanie kół" icon="check" icon-size="md" :bordered="false" horizontal>
          <p>
            Nieprawidłowo wyważone koła powodują wibracje kierownicy, szybsze zużycie elementów zawieszenia, układu kierowniczego i łożysk oraz nierównomierne zużycie opon.
            Zmniejsza się przyczepność co pogarsza efektywność hamowania. Istotą wyważania kół jest równomierne rozłożenie mas wokół osi jego obrotu,
            przedłużenie żywotności opony i poprawa komfortu podczas jazdy.
          </p>
          <p>
            Wyważanie kół jest konieczne podczas każdej sezonowej wymiany opon, po kolizji czy wypadku,
            natomiast okresową kontrolę należy przeprowadzać po przejechaniu ok. 5 tysięcy kilometrów.
          </p>
        </icon-card>
      </flex-list>
      <p class="centered">
        Odwiedzając nasz serwis, możesz liczyć na profesjonalną obsługę i fachową poradę dotyczącą właściwego doboru opon dostosowanych do konkretnego modelu auta,
        a szeroka gama produktów oponiarskich pozwala nam na realizację usług zgodnie z możliwościami finansowymi właścicieli pojazdów.
      </p>
    </page-section>
    <page-section header="removed" full-width grey>
      <p
        class="centered bigger"
      >Stawiamy na najwyższą jakość, dlatego oferujemy opony takich marek, jak Goodyear, Dunlop, Fulda, Sava czy Dębica.</p>
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
