<template>
  <main>
    <page-section
      title="Klimatyzacja"
      description="Nasz serwis oferuje szeroką gamę usług związanych z klimatyzacją w Twoim aucie. Diagnostyka układu, wymiana czynnika,
        odgrzybianie oraz naprawy uszkodzonych elementów zapewnią odpowiednią temperaturę wewnątrz pojazdu.
        Prawidłowo działająca klimatyzacja poza schładzaniem wnętrza pojazdu podczas upałów osusza powietrze,
        co jest niezwykle istotne w miesiącach jesienno-zimowych, by uniknąć zaparowania szyb samochodu od wewnątrz."
    >
      <flex-list item-width="1/2">
        <icon-card
          title="Odgrzybianie i czyszczenie klimatyzacji"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
          full-width
        >
          <p>
            Dezynfekcja klimatyzacji samochodowej powinna zostać przeprowadzona raz w roku, by zachować układ w czystości i pełnej sprawności.
            Stosując profesjonalne preparaty czyszczące i odgrzybiające układ klimatyzacji oczyszczamy go z bakterii i grzybów,
            które mają niekorzystny wpływ na nasze zdrowie, powodując alergie, infekcje a także nieprzyjemny zapach.
            Wymieniony na czas filtr kabiny pozwoli na neutralizację alergenów, chroniąc podróżujących przed zanieczyszczeniami i sezonowymi alergenami przez cały rok.
          </p>
        </icon-card>
        <icon-card
          title="Napełnianie klimatyzacji"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Utrata czynnika chłodzącego do ok. 10-15% rocznie jest naturalnym procesem wynikającym z eksploatacji auta.
            Dlatego też kontrola i wymiana czynnika powinny być dokonywane średnio co dwa lata, dzięki czemu zapobiegniemy uszkodzeniu całego układu chłodniczego.
            Podczas wykonywana usługi następuje opróżnienie układu, oczyszczenie czynnika z wilgoci, ocena szczelności oraz ponowne napełnienie systemu klimatyzacji.
          </p>
        </icon-card>
        <icon-card
          title="Przegląd i diagnostyka klimatyzacji"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Kontrola klimatyzacji pod kątem ogólnej sprawności obejmuje przede wszystkim sprawdzenie ciśnienia w układzie,
            temperatur powietrza przy dyszach nawiewowych, kontrolę i wymianę filtra oraz diagnostykę elektroniczną.
          </p>
        </icon-card>
      </flex-list>
      <p class="centered"/>
    </page-section>
    <page-section header="removed" full-width grey>
      <p
        class="centered bigger"
      >Sprawna klimatyzacja zapewnia nie tylko większy komfort jazdy, ale także neutralizuje alergeny, które niekorzystnie wpływają na nasze zdrowie.</p>
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
