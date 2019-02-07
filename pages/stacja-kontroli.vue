<template>
  <main>
    <page-section class="diagnostic-services" title="Stacja kontroli pojazdów">
      <div class="services-list">
        <div>
          <icon name="shield-check-outline" bordered/>
          <p>Obowiązkowe przeglądy rejestracyjne i badania okresowe samochodów osobowych, motocykli i ciągników rolniczych.</p>
        </div>
        <div>
          <icon name="alarm-plus" bordered/>
          <p>Wstępne przeglądy pozwalające na wykrycie i usunięcie usterek, które mogą wpłynąć na wynik obowiązkowego badania okresowego.</p>
        </div>
        <div>
          <icon name="map-outline" bordered/>
          <p>Sprawdzenie pojazdu przed kupnem, okresem letnim bądź zimowym oraz przed dłuższą podróżą.</p>
        </div>
      </div>
      <p>
        Posiadamy wieloletnie doświadczenie co przekłada się na wysoką jakość świadczonych przez nas usług.
        Wykorzystujemy nowoczesną linię diagnostyczną
        <a
          href="http://www.wsop.pl/produkty/certus-made-in-poland/"
          rel="nofollow"
        >CERTUS Race Line EVO2</a>.
        Obsługujemy także pojazdy sprowadzone z zagranicy, powypadkowe i zasilane gazem.
      </p>
    </page-section>
    <!-- <page-section full-width no-padding class="images" header="removed">
      <img src="images/dignostic_software.jpg" alt class="image">
    </page-section>-->
    <page-section title="Cennik badań technicznych">
      <table>
        <tr v-for="(price, idx) in prices" :key="idx">
          <td>{{ price.name }}</td>
          <td>{{ price.price }} zł</td>
        </tr>
      </table>
    </page-section>
  </main>
</template>

<script>
import PageSection from '@/components/Section.vue'
import Icon from '@/components/Icon'

export default {
  components: { PageSection, Icon },
  head() {
    return {
      title: 'Stacja kontroli'
    }
  },
  data() {
    return {
      prices: []
    }
  },
  created() {
    this.$base('Stacja kontroli')
      .select({
        view: 'Badania okresowe'
      })
      .eachPage(records => {
        records.forEach(record => {
          this.prices.push({
            name: record.get('Usługa'),
            price: record.get('Cena')
          })
        })
      })
    console.log(this.prices)
  }
}
</script>

<style lang="scss">
.diagnostic-services {
  h3 {
    margin-top: 0;
    text-align: center;
  }

  .services-list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 1em 1em 0;
    width: 100%;

    @media screen and (min-width: 768px) {
      flex-direction: row;
    }

    > div {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin-bottom: 1em;
      flex-basis: 30%;
    }
  }

  p {
    text-align: center;
  }
}

table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 100%;
}

td {
  margin: 0;
  padding: 1em;
}

td:nth-child(2) {
  text-align: right;
  font-weight: bold;
  white-space: nowrap;
}

tr:nth-child(2n + 1) td {
  background-color: rgba($color-primary, 0.1);
}
</style>
