<template>
  <main>
    <page-section
      title="Geometria"
      description="Nieprawidłowo ustawione koła samochodu powodują zdecydowanie szybsze zużycie opon oraz zmniejszoną kontrolę kierowcy nad pojazdem.
      Przy nieprawidłowo ustawionej geometrii już po przejechaniu kilkuset kilometrów może dojść do nadmiernego zużycia opon.
      Mogą wystąpić również problemy z utrzymaniem prawidłowego kierunku jazdy."
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
            Podczas wymiany ogumienia sprawdzany jest ich stan ogólny oraz głębokość bieżnika. Nowoczesny sprzęt jakim dysponujemy pozwala na
            sprawny i precyzyjny przebieg złożonego procesu serwisowania opon, piast i felg.
          </p>
          <p>
            Sprawdzamy głębokość bieżnika, ciśnienie powietrza, zużycie i wiek opon oraz ewentualne uszkodzenia ściany bocznej.
            Jeżeli zauważymy nieprawidłowość bądź defekt, niezwłocznie przywrócimy Twoje opony do stanu optymalnego lub sprawnie wymienimy na nowe.
          </p>
        </icon-card>
        <icon-card title="Wyważanie kół" icon="check" icon-size="md" :bordered="false" horizontal>
          <p>
            Nieprawidłowo wyważone koła powodują wibracje kierownicy, szybsze zużycie elementów zawieszenia, układu kierowniczego i łożysk
            oraz nierównomierne zużycie opon. Zmniejsza się przyczepność co pogarsza efektywność hamowania. Istotą wyważania kół jest równomierne
            rozłożenie mas wokół osi jego obrotu, przedłużenie żywotności opony i poprawa komfortu podczas jazdy.
          </p>
          <p>
            Wyważanie kół jest konieczne podczas każdej sezonowej wymiany opon, po kolizji czy wypadku, natomiast okresową kontrolę należy przeprowadzać
            po przejechaniu ok. 5 tysięcy kilometrów.
          </p>
        </icon-card>
      </flex-list>
      <p class="centered">
        Przed przystąpieniem do ustawienia geometrii sprawdzone zostaną luzy w zawieszeniu i gdy zajdzie taka potrzeba – wymienione zużyte elementy.
        Ustawienie geometrii należy obowiązkowo wykonać po wymianie elementów zawieszenia lub układu kierowniczego, gdyż wymiana któregokolwiek z nich powoduje rozregulowanie geometrii i zbieżności kół. Podczas badania serwisanci sprawdzą także prawidłowość ustawienia kierownicy
      </p>
    </page-section>
  </main>
</template>

<script>
import PageSection from '@/components/PageSection'
import FlexList from '@/components/FlexList'
import IconCard from '@/components/IconCard'

export default {
  components: {
    PageSection,
    FlexList,
    IconCard
  }
}
</script>

<style>
</style>
