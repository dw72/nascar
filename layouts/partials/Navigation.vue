<template>
  <nav class="navbar">
    <h2 class="hidden">Menu główne</h2>
    <button
      :aria-label="active ? 'Zamknij menu' : 'Otwórz menu'"
      :aria-expanded="active"
      :class="{
        'navbar__toggle': true,
        'navbar__toggle--active': active
      }"
      aria-controls="main-menu"
      @click="toggle"
    >
      <span class="navbar__burger">
        <span/>
        <span/>
        <span/>
      </span>
      <span aria-hidden="true">Menu</span>
    </button>
    <ul
      id="main-menu"
      :class="{
        'menu': true,
        'navbar__menu': true,
        'navbar__menu--active': active
      }"
    >
      <li class="menu__item">
        <nuxt-link class="menu__link menu__link--main-page" to="/">
          <icon name="home" size="sm"/>
          <span>Strona główna</span>
        </nuxt-link>
      </li>
      <li v-for="route in routes" :key="route.title" class="menu__item">
        <nuxt-link :to="route.path" class="menu__link">{{ route.title }}</nuxt-link>
      </li>
    </ul>
    <ul class="navbar__actions menu">
      <li class="menu__item">
        <a class="menu__link" href="https://nascar.premio.pl/reservation">
          <icon name="calendar-check" size="sm" class="navbar__icon"/>
          <span>Zarezerwuj termin</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script>
import Icon from '@/components/Icon'

export default {
  components: { Icon },
  data() {
    return {
      routes: [
        { path: '/regeneracja-dpf', title: 'Regenracja DPF/FAP' },
        { path: '/stacja-kontroli', title: 'Stacja kontroli' },
        { path: '/serwis', title: 'Serwis' },
        { path: '/myjnia', title: 'Myjnia' },
        { path: '/uslugi-finansowe', title: 'Usługi finansowe' }
      ],
      active: false
    }
  },
  created() {
    this.$router.afterEach(() => {
      if (this.active) {
        this.active = false
      }
    })
  },
  methods: {
    toggle(event) {
      this.active = !this.active
    }
  }
}
</script>

<style lang="scss">
.navbar {
  align-items: stretch;
  background-color: $color-primary;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.navbar__toggle {
  background-color: transparent;
  display: flex;
  flex: 1;
  justify-content: flex-start;
}

.navbar__burger {
  display: flex;
  flex-direction: column;
  height: 1.5em;
  justify-content: space-around;
  margin: -0.25em 0.75em -0.25em 0;
  width: 1.25em;
}

.navbar__burger span {
  background-color: $color-text-light;
  display: block;
  height: 1px;
  transition-property: opacity, transform;
  transition-duration: 0.25s;
  transition-timing-function: ease-in-out;
}

.navbar__toggle--active .navbar__burger span:nth-child(1) {
  transform: translateY(0.5em) rotate(45deg);
}

.navbar__toggle--active .navbar__burger span:nth-child(2) {
  opacity: 0;
}

.navbar__toggle--active .navbar__burger span:nth-child(3) {
  transform: translateY(-0.5em) rotate(-45deg);
}

.navbar__menu {
  display: none;
  flex: 100%;
  order: 1;
  transition: all 0.3s ease-in-out;
}

.navbar__menu--active {
  display: flex;
  flex-direction: column;
}

.menu {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.menu__item {
  display: flex;
}

.menu__link,
.navbar__toggle {
  align-items: center;
  border: 1px solid transparent;
  color: $color-text-light;
  display: inline-flex;
  font-family: inherit;
  font-size: 1rem;
  padding: 0.75em 0.5em;
  text-decoration: none;
  text-transform: uppercase;
  width: 100%;
  white-space: nowrap;
  transition: background-color 0.2s ease-in-out;

  .icon {
    color: inherit;
  }
}

.menu__link {
  border-bottom-color: rgba(0, 0, 0, 0.1);
  justify-content: center;
}

.menu__link:first-child {
  border-top-color: rgba(0, 0, 0, 0.1);
}

.menu__link:last-child {
  border-bottom-color: transparent;
}

.menu__link:focus,
.menu__link:hover,
.navbar__toggle:focus,
.navbar__toggle:hover {
  background-color: darken($color-primary, 5%);
}

.navbar__actions .menu__link {
  background-color: $color-secondary;

  .icon {
    margin-right: 0.25em;
  }
}

.navbar__actions .menu__link:focus,
.navbar__actions .menu__link:hover {
  background-color: darken($color-secondary, 5%);
}

.menu__link--main-page .icon:first-child {
  display: none;
}

.menu__link--main-page .icon:last-child {
  display: initial;
}

@media (min-width: 960px) {
  .navbar__toggle {
    display: none;
  }

  .navbar__menu {
    background-color: transparent;
    flex: 1;
    flex-direction: row;
    order: initial;
  }

  .menu {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  .menu__link {
    border-bottom-color: transparent;
  }

  .menu__link:first-child {
    border-top-color: transparent;
  }

  .menu__link--main-page .icon:first-child {
    display: initial;
    margin-right: 0;
  }

  .menu__link--main-page .icon:last-child {
    display: none;
  }
}
</style>
