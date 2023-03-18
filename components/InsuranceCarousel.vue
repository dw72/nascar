<template>
  <div class="logos">
    <swiper :options="options">
      <swiper-slide v-for="(company, idx) in companies" :key="idx">
        <a
          :href="company.url"
          target="_blank"
          rel="nofollow noreferrer noopener"
          tabindex="-1"
        >
          <img
            :data-src="company.logo"
            :alt="company.name"
            class="swiper-lazy"
          />
        </a>
        <div class="swiper-lazy-preloader" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
  components: { swiper, swiperSlide },
  data() {
    return {
      options: {
        // http://idangero.us/swiper/api/
        autoplay: { delay: 3500 },
        keyboard: { enabled: true },
        loop: {
          loopedSlides: 3
        },
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
          loadOnTransitionStart: true
        },
        breakpoints: {
          960: {
            slidesPerView: 5
          },
          768: {
            slidesPerView: 3
          },
          580: {
            slidesPerView: 2
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        slidesPerView: 6,
        watchSlidesVisibility: true
      },
      companies: [
        {
          name: 'allianz',
          logo: require('~/assets/images/insurance/allianz.png'),
          url: 'https://www.allianz.pl'
        },
        {
          name: 'axa',
          logo: require('~/assets/images/insurance/axa.jpg'),
          url: 'https://axa.pl/'
        },
        {
          name: 'concordia',
          logo: require('~/assets/images/insurance/concordia.jpg'),
          url: 'https://www.concordiaubezpieczenia.pl/'
        },
        {
          name: 'ergohestia',
          logo: require('~/assets/images/insurance/ergohestia.jpg'),
          url: 'https://www.ergohestia.pl/'
        },
        {
          name: 'gefion',
          logo: require('~/assets/images/insurance/gefion.jpg'),
          url: 'http://ubezpieczenia-gefion.pl/'
        },
        {
          name: 'generali',
          logo: require('~/assets/images/insurance/generali.jpg'),
          url: 'https://www.generali.pl/'
        },
        {
          name: 'gothaer',
          logo: require('~/assets/images/insurance/gothaer.jpg'),
          url: 'https://www.gothaer.pl/'
        },
        {
          name: 'interrisk',
          logo: require('~/assets/images/insurance/interrisk.png'),
          url: 'https://www.interrisk.pl/'
        },
        {
          name: 'inter',
          logo: require('~/assets/images/insurance/inter.png'),
          url: 'https://interpolska.pl/'
        },
        {
          name: 'link4',
          logo: require('~/assets/images/insurance/link4.png'),
          url: 'https://www.link4.pl/'
        },
        {
          name: 'metlife',
          logo: require('~/assets/images/insurance/metlife.png'),
          url: 'https://www.metlife.pl/'
        },
        {
          name: 'mtu',
          logo: require('~/assets/images/insurance/mtu.png'),
          url: 'https://mtu.pl/'
        },
        {
          name: 'nationale nederlanden',
          logo: require('~/assets/images/insurance/nationale.png'),
          url: 'https://www.nn.pl/'
        },
        {
          name: 'prevoir',
          logo: require('~/assets/images/insurance/prevoir.png'),
          url: 'https://www.prevoir.pl/'
        },
        {
          name: 'proama',
          logo: require('~/assets/images/insurance/proama.jpg'),
          url: 'https://www.proama.pl/'
        },
        {
          name: 'pzu',
          logo: require('~/assets/images/insurance/pzu.jpg'),
          url: 'https://www.pzu.pl/'
        },
        {
          name: 'saltus',
          logo: require('~/assets/images/insurance/saltus.png'),
          url: 'https://saltus.pl/'
        },
        {
          name: 'tuz',
          logo: require('~/assets/images/insurance/tuz.jpg'),
          url: 'https://www.tuz.pl/'
        },
        {
          name: 'uniqa',
          logo: require('~/assets/images/insurance/uniqa.jpg'),
          url: 'https://www.uniqa.pl/'
        },
        {
          name: 'warta',
          logo: require('~/assets/images/insurance/warta.jpg'),
          url: 'https://www.warta.pl/'
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.logos {
  padding: 0 2em;

  .swiper-container {
    position: relative;
    display: flex;
    overflow: hidden;
  }

  img {
    width: 85%;
    height: auto;
  }

  .swiper-wrapper {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }

  .swiper-slide {
    align-items: center;
    display: flex;
    justify-content: center;
  }
}
</style>
