<template>
  <main>
    <page-section class="section--full-width images" header="hidden">
      <img src="images/dignostic_software.jpg" alt class="image">
    </page-section>
    <page-section title="Stacja kontroli pojazdów">
      <p>
        Każdy samochód składa się z podzespołów, które poddawane są dużym obciążeniom. Pod wpływem eksploatacji, zużywają się i stają wadliwe.
        Osiągi Twojego pojazdu pogarszają się, a Ty ryzykujesz swoje bezpieczeństwo. Ponadto, usterki, które nie zostaną wykryte odpowiednio wcześniej,
        mogą prowadzić do kosztownych napraw w późniejszym etapie. Dlatego
        <span
          class="strong"
        >przeglądy wykonywane regularnie to większa niezawodność pojazdu</span>.
      </p>
      <p>
        Oferujemy obsługę diagnostyczną, przeglądy rejestracyjne oraz badania techniczne samochodów osobowych, motocykli i ciągników rolniczych.
        W tym pojazdów sprowadzonych z zagranicy, powypadkowych i zasilanych gazem.
      </p>
      <p>
        Posiadamy wieloletnie doświadczenie w tej dziedzinie co przekłada się
        na wysoką jakość świadczonych przez nas usług. Pracujemy używając nowoczesnego sprzętu firmy
        <a
          href="http://www.wsop.pl"
          rel="nofollow"
        >WSOP</a> w tym profesjonalnej linii diagnostycznej drugiej generacji
        <a
          href="http://www.wsop.pl/produkty/certus-made-in-poland/"
          rel="nofollow"
        >CERTUS Race Line EVO2</a>.
      </p>
    </page-section>
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
import PageSection from '@/components/page/Section.vue'

export default {
  components: { PageSection },
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
.strong {
  font-weight: bold;
}

p {
  margin: 0 0 1em;
  // text-align: center;
}

p:last-child {
  margin-bottom: 0;
}

.images {
  display: block;
  padding: 0;

  .section__content {
    margin: 0;
  }
}

table {
  border-spacing: 0;
  border-collapse: collapse;
  width: 95%;
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
  background-color: #d0e0ed;
}
</style>
