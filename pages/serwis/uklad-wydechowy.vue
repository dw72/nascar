<template>
  <main>
    <page-section
      title="Układ wydechowy"
      description="Układ wydechowy odpowiedzialny jest za zmniejszenie ilości szkodliwych gazów występujących w spalinach,
        za ich prawidłowe odprowadzenie, reguluje poziomu hałasu wydobywającego się z silnika oraz zapewnia jego optymalną pracę."
    >
      <flex-list item-width="1/2">
        <icon-card
          title="Wymiana tłumika i elementów układu wydechowego"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>W naszym serwisie wymienimy w razie konieczności tłumiki, rury i wieszaki, a więc wszystkie zużyte elementy układu.</p>
        </icon-card>
        <icon-card
          title="Czyszczenie filtra cząstek stałych (DPF)"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Zanieczyszczenie filtra skutkuje większym zużyciem paliwa, i prowadzi do rozrzedzenia oleju silnikowego,
            a w skrajnych przypadkach do unieruchomienia pojazdu.
          </p>
        </icon-card>
      </flex-list>
    </page-section>
    <page-section header="removed" full-width grey>
      <p class="centered bigger">
        Więcej o usłudze czyszczenia filtra przeczytasz na poświęconej tej usłudze
        <nuxt-link to="/filtry">
          podstronie
        </nuxt-link>
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
