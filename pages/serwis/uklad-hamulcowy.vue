<template>
  <main>
    <page-section
      title="Układ hamulcowy"
      description="Sprawny układ hamulcowy ma bezpośredni wpływ na Twoje bezpieczeństwo w ruchu drogowym, dlatego kontrola układu hamulcowego
        powinna dobywać się przynajmniej raz w roku. Tarcze, klocki, bębny i szczęki to elementy, które w trakcie eksploatacji pojazdu ulegają zużyciu,
        a tempo ich zużycia zależy także od stylu jazdy prowadzącego."
    >
      <flex-list item-width="1/2">
        <icon-card
          title="Diagnostyka układu hamulcowego"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Nasi fachowcy sprawdzą stan zużycia klocków hamulcowych, jakość płynu hamulcowego oraz ślady nieprawidłowego zużycia opon.
            Serwis obejmuje także pomiar grubości okładzin i tarcz hamulcowych, pomiar bicia bocznego tarcz,
            sprawdzenie stanu przewodów hamulcowych oraz pomiar jakości płynu hamulcowego.
          </p>
        </icon-card>
        <icon-card
          title="Wymiana przewodów i zacisków hamulcowych"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Przewody, zaciski hamulcowe oraz cylinderki to elementy układu, które w równym stopniu co pozostałe elementy mają wpływ na skuteczność hamowania.
            W naszym serwisie możesz je naprawić lub wymienić.
          </p>
        </icon-card>
        <icon-card
          title="Wymiana tarcz i klocków hamulcowych"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Przyczyn piszczących (drgających) klocków hamulcowych podczas hamowania może być kilka, m.in. zły stan zacisku, zużyte tarcze hamulcowe
            lub zużycie elementów układu hamulcowego. Tarcze, klocki, bębny czy szczęki są elementami, które podlegają zużyciu podczas codziennej eksploatacji samochodu.
            Sprawny układ hamulcowy to nasze bezpieczeństwo, należy więc dokonywać systematycznych przeglądów jego stanu, a zużyte lub niesprawne elementy
            wymienić na nowe z zastosowaniem odpowiednich procedur i wiedzy na temat użytych części zamiennych. W samochodach z systemami stabilizacji toru jazdy
            wymianie podlega każdorazowo komplet tarcz z klockami oraz płyn hamulcowy.
          </p>
        </icon-card>
        <icon-card
          title="Wymiana płynu hamulcowego"
          icon="check"
          icon-size="md"
          :bordered="false"
          horizontal
        >
          <p>
            Zużyty płyn hamulcowy może doprowadzić do przegrzania układu hamulcowego, a co za tym idzie nawet do całkowitej utraty możliwości hamowania.
            Wymiana płynu hamulcowego zgodnie z zaleceniami producentów powinna odbywać się nie rzadziej niż raz na dwa lata lub nawet częściej,
            w dużej mierze jest to zależne od stylu jazdy kierowcy. Dysponujemy nowoczesnymi miernikami temperatury wrzenia oraz ciśnieniowe urządzenia
            do wymiany płynu hamulcowego, dzięki czemu usługa wykonywana w naszych serwisach jest zgodna z procedurą zalecaną przez producentów.
            Doradcy serwisowi dobiorą właściwy płyn hamulcowy, zależnie od konstrukcji samochodu oraz zastosowania dodatkowych układów, takich jak ABS lub ESP.
          </p>
        </icon-card>
      </flex-list>
    </page-section>
    <page-section header="removed" full-width grey>
      <p
        class="centered bigger"
      >Regularna kontrola i ocena sprawności układu hamulcowego to jedna z najważniejszych czynności związanych z eksploatacją auta.</p>
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
