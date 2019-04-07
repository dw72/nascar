<template>
  <main>
    <page-section
      class="loans"
      title="Kredyty"
      description="Kredyty to bardzo popularny rodzaj finansowania swoich potrzeb i realizowania marzeń. W naszej ofercie posiadamy:"
    >
      <icon-card-list>
        <icon-card
          title="Kredyty samochodowe"
          icon="car-sports"
        >Oferta obejmuje każdy pojazd do 13 roku eksploatacji. Stosujemy procedurę uproszczoną, bez zaświadczeń o dochodach. Auto może pochodzić z salonu, komisu a także od osoby fizycznej.</icon-card>
        <icon-card
          title="Kredyty gotówkowe"
          icon="cash"
        >Kredyty tego typu udzielane są w wysokości do 90 tysięcy złotych, bez zabezpieczeń czy poręczycieli. Spłata rozkładana jest na dogodny okres kredytowania, który może wynosić nawet do 8 lat.</icon-card>
        <icon-card
          title="Kredyty konsolidacyjne"
          icon="cash-multiple"
        >Za ich pomocą możemy spłacić nie tylko kredyty gotówkowe, debet na koncie czy kredyt samochodowy lub mieszkaniowy, ale także pozostałą jego część przeznaczyć na dowolny cel.</icon-card>
      </icon-card-list>
    </page-section>
    <page-section
      class="leasing"
      title="Leasing"
      description="Leasing jest szczególną formą finansowania inwestycji bez obowiązku jej zakupu po umówionym okresie leasingowym."
      full-width
    >
      <p>
        Taka forma nabycia pojazdu czy maszyny pozwala zmniejszyć obciążenia podatkowe, ponieważ wydatki ponoszone przez Leasingobiorcę na spłatę wartości leasingowanego przedmiotu,
        zalicza się do kosztów uzyskania przychodu. Leasingowy pojazd czy maszyna, może być użytkowana natychmiast po uruchomieniu środków przez bank, bez angażowania większych środków własnych.
        W leasingu do 150tyś zł wartości pojazdu czy maszyny Bank nie wymaga zaświadczeń z ZUS czy US (w pełni procedura uproszczona) a wkład własny przy nowych pojazdach czy maszynach wynosi 1%.
      </p>
    </page-section>
    <page-section
      class="insurance"
      title="Ubezpieczenia"
      description="Posiadamy bogaty wachlarz ubezpieczeń komunikacyjnych spośród ponad 20 towarzystw ubezpieczeniowych."
    >
      <insurance-carousel/>
      <p>
        Nasi specjaliści fachowo i profesjonalnie udzielą informacji tak aby składka ubezpieczenia OC była jak najmniejsza, a polisa AC posiadała szeroki zakres ochrony.
        Ubezpieczenia NNW to niedrogi a trafny dodatek do polisy gwarantujący ochronę kierowcy i pasażerom w razie nieszczęśliwego wypadku.
      </p>
    </page-section>
  </main>
</template>

<script>
import PageSection from '@/components/PageSection'
import IconCardList from '@/components/IconCardList'
import IconCard from '@/components/IconCard'
import InsuranceCarousel from '@/components/InsuranceCarousel'

export default {
  components: { PageSection, IconCardList, IconCard, InsuranceCarousel },
  head() {
    return {
      title: 'Usługi finansowe'
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  text-align: center;
}

.leasing {
  background: darken($color-background, 5%);

  p {
    margin-top: 0;
    margin-bottom: 2em;
  }
}
</style>

