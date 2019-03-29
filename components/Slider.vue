<template>
  <page-section class="slider" header="removed" title="Promocje" full-width no-padding>
    <swiper v-if="slides.length" :options="options">
      <swiper-slide v-for="(slide, idx) in slides" :key="idx">
        <a
          v-if="slide.url"
          :href="slide.url"
          target="_blank"
          rel="nofollow noreferrer noopener"
          tabindex="-1"
        >
          <img :data-src="slide.img" :alt="slide.alt" class="swiper-lazy">
        </a>
        <img v-else :data-src="slide.img" :alt="slide.alt" class="swiper-lazy">
        <div class="swiper-lazy-preloader"/>
      </swiper-slide>
      <div slot="pagination" class="swiper-pagination"/>
      <div slot="button-prev" class="swiper-button swiper-button-prev"/>
      <div slot="button-next" class="swiper-button swiper-button-next"/>
    </swiper>
  </page-section>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import { mapState } from 'vuex'
import PageSection from '@/components/PageSection.vue'

export default {
  components: { PageSection, swiper, swiperSlide },
  data() {
    return {
      options: {
        // http://idangero.us/swiper/api/
        autoplay: { delay: 5000 },
        keyboard: { enabled: true },
        loop: {
          loopedSlides: 1
        },
        preloadImages: false,
        lazy: {
          loadPrevNext: true,
          loadOnTransitionStart: true
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          renderBullet: (idx, className) =>
            `<a href="#" class="${className}">${idx + 1}</a>`
        },
        slidesPerView: 1,
        watchSlidesVisibility: true
      }
    }
  },
  computed: {
    ...mapState('slider', ['slides'])
  },
  mounted() {
    this.$store.dispatch('slider/FETCH_SLIDES_REQUEST')
  }
}
</script>

<style lang="scss">
.slider {
  .section__content {
    display: none;
    overflow: hidden;

    height: 0;
    padding-top: 19.75%;
    position: relative;

    @media screen and (min-width: 768px) {
      display: initial;
    }
  }

  .swiper-container {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
  }

  .swiper-slide {
    height: auto;
  }

  .swiper-lazy {
    display: none;

    &.swiper-lazy-loaded {
      display: block;
    }
  }

  .swiper-button {
    display: none;
  }

  .swiper-container:hover .swiper-button,
  .swiper-button:focus {
    display: initial;
  }

  .swiper-pagination {
    display: flex;
    justify-content: flex-end;
    font-family: 'Montserrat', sans-serif;
    font-size: 0.55em;
    padding-right: 2em;

    @media screen and (min-width: 960px) {
      font-size: 0.75em;
    }
  }

  .swiper-pagination-bullet {
    align-items: center;
    background: rgba($color-background, 0.75);
    color: $color-text;
    display: flex;
    justify-content: center;
    opacity: 1;
    padding: 1em;
    text-decoration: none;
  }

  .swiper-pagination-bullet:focus,
  .swiper-pagination-bullet:hover {
    background: rgba($color-secondary, 0.75);
    color: $color-text-light;
  }

  .swiper-pagination-bullet-active {
    background: $color-primary;
    color: $color-text-light;
  }
}
</style>
