<template>
  <main>
    <page-section
      class="wheel"
      title="Felgi"
      description="Właściwy dobór felg znacznie poprawia wygląd pojazdu, nadając mu wyrazistego charakteru. W przypaadku felg aluminiowych skutkuje
        obniżeniem masy całkowitej pojazdu. Przekłada się to na zmniejszenie zużycia paliwa oraz osiągi, co stanowi niewątpliwą zaletę."
    >
      <p class="centered negative-margin">
        W naszej ofercie posiadamy felgi do wszystkich typów pojazdów z całej gamy felg, których producentem jest
        <strong>grupa ALCAR</strong>,
        dystrybuująca swoje produkty pod czterema markami felg aluminiowych
        <strong>AEZ, DEZENT, DOTZ, ENZOM</strong> oraz jedną marką felg stalowych
        <strong>KFZ Stahlrad</strong>.
      </p>
      <p class="centered">
        Chcąc ułatwić wybór właściwych alufelg, udostępniamy poniżej odnośnik do konfiguratora felg, który umożliwia dobranie najładniejszych felg z
        oferty dedykowanej do konkretnego modelu samochodu, a także zobaczenie jak auto będzie się prezentować z wybranym modelem.
      </p>
      <div class="button-wraper">
        <a
          class="button button--primary button--rounded button--medium"
          rel="nofollow"
          href="http://www.alcar.pl/3DKonfigurator/?lcs=rpkjdhla2a&country=pl;pl"
          target="_blank"
        >Dobierz felgi do auta</a>
      </div>
      <div>
        <p class="disclaimer">* Konfigurator otworzy się w nowym oknie przeglądarki.</p>
      </div>
    </page-section>
    <page-section full-width grey header="removed">
      <p class="centered bigger">W razie jakichkolwiek pytań zapraszamy do kontaktu.</p>
    </page-section>
  </main>
</template>

<script>
// Ikony pochodza ze strony https://www.flaticon.com/packs/car-engine-16

import PageSection from '@/components/PageSection'

export default {
  components: { PageSection },
  head() {
    return {
      title: 'Felgi aluminiowe'
    }
  }
}
</script>

<style lang="scss" scoped>
.negative-margin {
  margin-top: -1em;
}

.button-wraper {
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 8em;
}
</style>
