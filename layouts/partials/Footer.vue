<template>
  <footer class="page__footer">
    <div class="footer__content">
      <div class="footer__header hidden">
        <h2>Kontakt</h2>
      </div>

      <div class="footer-block contact">
        <div class="contact__data">
          <div class="contact__name">
            <h3>PPHU Nascar</h3>
          </div>
          <div class="contact__address">
            <icon name="map-marker" size="sm"/>
            <span>ul. Ostrowska 157,</span>
            <span>63-700 Krotoszyn</span>
          </div>
          <div class="contact__email">
            <icon name="email" size="sm"/>
            <span>biuro@nascar.com.pl</span>
          </div>
        </div>
        <div class="departments">
          <div v-for="department in departments" :key="department.name" class="department">
            <h4 class="department__name">{{ department.name }}</h4>
            <div class="department__content">
              <div class="department__phone">
                <icon name="phone" size="sm"/>
                <a :href="`tel:${department.phone.replace(/[ -]/gi,'')}`">{{ department.phone }}</a>
              </div>
              <div class="department__open">
                <icon name="clock" size="sm"/>
                <div>
                  <p v-for="item in department.opening" :key="item.day">
                    <span>{{ item.day }}</span>
                    <span>{{ item.hour }}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="footer-block footer-block--map">
        <footer-map/>
      </div>
    </div>

    <div class="footer__copyright">
      <div>
        <span>©2019 PPHU Nascar.</span>
        <span>
          Projekt i wykonanie
          <a href="//wlodarczyk.pro">Dariusz Włodarczyk</a>.
        </span>
      </div>
    </div>
  </footer>
</template>

<script>
import Icon from '@/components/Icon'
import FooterMap from './FooterMap.vue'

export default {
  components: { Icon, FooterMap },
  data() {
    return {
      departments: [
        {
          name: 'Biuro',
          phone: '+48 62 7226848',
          opening: [{ day: 'pn - pt', hour: '8:00 - 18:00' }]
        },
        {
          name: 'Myjnia',
          phone: '+48 668 675 342',
          opening: [{ day: 'pn - sb', hour: '9:00 - 19:00' }]
        },
        {
          name: 'Serwis',
          phone: '+48 668 124 983',
          opening: [
            { day: 'pn - pt', hour: '8:00 - 18:00' },
            { day: 'sb', hour: '9:00 - 14:00' }
          ]
        },
        {
          name: 'Stacja kontroli',
          phone: '+48 602 259 682',
          opening: [
            { day: 'pn - pt', hour: '8:00 - 20:00' },
            { day: 'sb', hour: '9:00 - 14:00' }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss">
.page__footer {
  background-color: darken($color-primary, 13%);
  color: $color-text-light;
  font-size: 0.8em;
}

@media screen and (min-width: 480px) and (max-width: 767px) {
  .page__footer {
    font-size: 0.9em;
  }
}

@media screen and (min-width: 960px) {
  .page__footer {
    font-size: 0.9em;
  }
}

.page__footer .icon {
  color: $color-icon-footer;
}

.footer__content {
  display: flex;
  flex-direction: column;
}

.footer-block {
  flex: 1;
  padding: 1em;
}

.footer-block .mdi {
  margin-right: 0.25em;
  font-size: 1.5em;
  transform: translateY(-0.25em);
}

.footer-block--map {
  margin-bottom: 0;
  padding: 0;
}

@media screen and (min-width: 768px) {
  .footer__content {
    flex-direction: row;
  }

  .footer-block--map {
    order: -1;
    flex: 0 0 50%;
  }
}

.contact {
  .icon {
    margin-right: 0.5em;
  }
}

.contact__data {
  text-align: center;
}

.contact__name {
  font-size: 1.25em;
  line-height: 1;
}

.departments {
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1em;
}

.department {
  flex: 1 1 45%;
}

.department:nth-child(2n + 1) {
  margin-right: 1em;
}

.department__name {
  position: relative;
  text-align: center;
}

.department__name::after {
  background-color: $color-secondary;
  bottom: -0.5em;
  content: '';
  height: 2px;
  left: 50%;
  position: absolute;
  width: 2em;
  transform: translateX(-50%);
}

.department__open p {
  margin: 0;
  text-align: center;
}

.department__phone a {
  border-bottom: 2px dotted transparent;
  color: $color-text-light;
  font-size: 1.2em;
  text-decoration: none;

  &:hover,
  &:focus {
    border-bottom-color: $color-icon-footer;
  }
}

.contact__address,
.contact__email,
.department__open,
.department__phone {
  align-items: flex-start;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5em;
}

.map__wrapper {
  width: 100%;
  height: 270px;
  min-height: 100%;
  overflow: hidden;
}

.map {
  width: 100%;
  height: 300px;
  height: 110%;
}

.footer__copyright {
  background-color: darken($color-primary, 15%);
  padding: 1.5em;
  text-align: center;
}

.footer__copyright span {
  white-space: nowrap;
  font-size: 0.95em;
}

.footer__copyright a {
  color: #fff100;
  text-decoration: none;

  &:focus,
  &:hover {
    border-bottom: 1px dotted currentColor;
  }
}
</style>
