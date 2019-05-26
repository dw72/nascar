<template>
  <main>
    <page-section
      title="Oleje"
      description="Oleje silnikowe spełniają w samochodzie kilka podstawowych funkcji: zmniejszają tarcie i zużycie silnika, chłodzą,
        uszczelniają ruchome elementy układu, utrzymują silnik w czystości oraz zapobiegają wewnętrznej korozji."
    >
      <flex-list item-width="1/2">
        <icon-card
          title="Wymiana oleju i filtra oleju"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Zbyt niski poziom oleju grozi zatarciem, a więc uszkodzeniem silnika. Jego odpowiedni poziom i zachowane właściwości smarne i termiczne odgrywają główną rolę
            w zabezpieczeniu silnika przed zużyciem. Dlatego też stan oleju należy kontrolować regularnie i zgodnie ze wskazówkami producenta pojazdu dokonywać jego wymiany.
          </p>
        </icon-card>
        <icon-card
          title="Płukanie i czyszczenie układu olejowego"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Przed każdą wymianą oleju zaleca się płukanie układu smarowania, który podczas codziennej jazdy w naturalny sposób ulega zanieczyszczeniu.
            Płukania układu olejowego wymagają samochody z wydłużonymi okresami między przeglądami, eksploatowane w tzw. trybie „long life”
            oraz w szczególności samochody z silnikami Diesla, wyposażone w turbosprężarki.
          </p>
        </icon-card>
      </flex-list>
      <p class="centered">
        Oferujemy szeroką gamę produktów przeznaczonych do samochodów osobowych (oleje syntetyczne, półsyntetyczne, mineralne) oraz fachowe doradztwo
        przy doborze odpowiedniego oleju z uwzględnieniem norm lepkości i jakości a także zaleceń producentów aut.
      </p>
    </page-section>
    <page-section header="removed" full-width grey>
      <p
        class="centered bigger"
      >Wymiana oleju, filtrów i płynów eksploatacyjnych jest bardzo istotna, by ochronić silnik oraz zapewnić bezawaryjną i długotrwałą eksploatację.</p>
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
