<template>
  <div class="form-wrap">
    <transition
      name="fade"
      mode="out-in"
      @before-leave="beforeLeave"
      @before-enter="beforeEnter"
    >
      <form v-if="!orderId" @submit.prevent="placeOrder">
        <div class="field">
          <label for="firstname">
            Imię
            <span>*</span>
          </label>
          <input
            id="firstname"
            v-model.trim="order.firstname"
            name="firstname"
            type="text"
            :class="{ 'has-error': $v.order.firstname.$error }"
            placeholder="Jan"
            @input="$v.order.firstname.$touch()"
          />
          <div v-visible="$v.order.firstname.$error">
            <span v-if="!$v.order.firstname.required" class="message">{{
              messages['required']
            }}</span>
            <span v-else-if="!$v.order.firstname.minLength" class="message">{{
              messages['minLength3']
            }}</span>
            <span v-else-if="!$v.order.firstname.alpha" class="message">{{
              messages['alpha']
            }}</span>
          </div>
        </div>
        <div class="field">
          <label for="lastname">
            Nazwisko
            <span>*</span>
          </label>
          <input
            id="lastname"
            v-model.trim="order.lastname"
            name="lastname"
            type="text"
            :class="{ 'has-error': $v.order.lastname.$error }"
            placeholder="Kowalski"
            @input="$v.order.lastname.$touch()"
          />
          <div v-visible="$v.order.lastname.$error">
            <span v-if="!$v.order.lastname.required" class="message">{{
              messages['required']
            }}</span>
            <span v-else-if="!$v.order.lastname.minLength" class="message">{{
              messages['minLength3']
            }}</span>
            <span v-else-if="!$v.order.lastname.lastname" class="message">{{
              messages['lastname']
            }}</span>
          </div>
        </div>
        <div class="field field--street">
          <label for="street">
            Ulica
            <span>*</span>
          </label>
          <input
            id="street"
            v-model.trim="order.street"
            name="street"
            type="text"
            :class="{ 'has-error': $v.order.street.$error }"
            placeholder="Jesionowa 25/4"
            @input="$v.order.street.$touch()"
          />
          <div v-visible="$v.order.street.$error">
            <span v-if="!$v.order.street.required" class="message">{{
              messages['required']
            }}</span>
            <span v-else-if="!$v.order.street.minLength" class="message">{{
              messages['minLength3']
            }}</span>
            <span v-else-if="!$v.order.street.street" class="message">{{
              messages['street']
            }}</span>
          </div>
        </div>
        <div class="field field--zip">
          <label for="zip">
            Kod pocztowy
            <span>*</span>
          </label>
          <input
            id="zip"
            v-model.trim="order.zip"
            name="zip"
            type="text"
            :class="{ 'has-error': $v.order.zip.$error }"
            placeholder="63-700"
            @input="$v.order.zip.$touch()"
          />
          <div v-visible="$v.order.zip.$error">
            <span v-if="!$v.order.zip.required" class="message">{{
              messages['required']
            }}</span>
            <span v-else-if="!$v.order.zip.zip" class="message">{{
              messages['zip']
            }}</span>
          </div>
        </div>
        <div class="field field--city">
          <label for="city">
            Miejscowość
            <span>*</span>
          </label>
          <input
            id="city"
            v-model.trim="order.city"
            name="city"
            type="text"
            :class="{ 'has-error': $v.order.city.$error }"
            placeholder="Krotoszyn"
            @input="$v.order.city.$touch()"
          />
          <div v-visible="$v.order.city.$error">
            <span v-if="!$v.order.city.required" class="message">{{
              messages['required']
            }}</span>
            <span v-else-if="!$v.order.city.minLength" class="message">{{
              messages['minLength3']
            }}</span>
            <span v-else-if="!$v.order.city.city" class="message">{{
              messages['city']
            }}</span>
          </div>
        </div>
        <div class="field">
          <label for="phone">
            Telefon
            <span>*</span>
          </label>
          <input
            id="phone"
            v-model.trim="order.phone"
            name="phone"
            type="text"
            :class="{ 'has-error': $v.order.phone.$error }"
            placeholder="+48600123123"
            @input="$v.order.phone.$touch()"
          />
          <div v-visible="$v.order.phone.$error">
            <span v-if="!$v.order.phone.required" class="message">{{
              messages['required']
            }}</span>
            <span v-else-if="!$v.order.phone.minLength" class="message">{{
              messages['minLength9']
            }}</span>
            <span v-else-if="!$v.order.phone.phone" class="message">{{
              messages['phone']
            }}</span>
          </div>
        </div>
        <div class="field">
          <label for="email">
            Email
            <span>*</span>
          </label>
          <input
            id="email"
            v-model.trim="order.email"
            name="email"
            type="email"
            :class="{ 'has-error': $v.order.email.$error }"
            placeholder="jan@kowalski.pl"
            @input="$v.order.email.$touch()"
          />
          <div v-visible="$v.order.email.$error">
            <span v-if="!$v.order.email.required" class="message">{{
              messages['required']
            }}</span>
            <span v-else-if="!$v.order.email.minLength" class="message">{{
              messages['minLength3']
            }}</span>
            <span v-else-if="!$v.order.email.email" class="message">{{
              messages['email']
            }}</span>
          </div>
        </div>
        <div class="field field--rodo">
          <label>
            Wyrażam zgodę na przetwarzanie moich danych osobowych przez firmę
            PPHU Nascar w celu wykonania usługi.
          </label>
          <input id="rodo" v-model="rodo" type="checkbox" name="rodo" />
        </div>
        <button class="button button--primary" type="submit" :disabled="!rodo">
          Wyślij zamówienie
        </button>
        <input ref="trap" v-model="order.trap" class="trap" type="text" />
      </form>
      <div v-else class="ordered" :style="{ 'min-height': formHeight + 'px' }">
        <div class="ordered__message">
          <h3>Twoje zamówienie zostało przyjęte.</h3>
          <p>
            Nasz przedstawiciel skontaktuje się z Tobą w celu omówienia
            szczegółów oraz umówienia wizyty kuriera...
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import {
  helpers,
  required,
  minLength,
  alpha,
  email
} from 'vuelidate/lib/validators'

const validations = {
  order: {
    firstname: {
      required,
      minLength: minLength(3),
      alpha
    },
    lastname: {
      required,
      minLength: minLength(3),
      lastname: helpers.regex('lastname', /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ-]*$/)
    },
    street: {
      required,
      minLength: minLength(3),
      street: helpers.regex('street', /^[0-9A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ ,/;]*$/)
    },
    zip: {
      required,
      zip: helpers.regex('zip', /^\d{2}-\d{3}$/)
    },
    city: {
      required,
      minLength: minLength(3),
      city: helpers.regex('city', /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ -]*$/)
    },
    phone: {
      required,
      minLength: minLength(9),
      phone: helpers.regex(
        'phone',
        /^(?:\+48)?(?:[-\s])?(\d{9}|\d{3}((?:[-\s])?\d{3}){2}|(\d{2}|\(\d{2}\))(?:[-\s])?\d{3}((?:[-\s])?\d{2}){2})$/
      )
    },
    email: {
      required,
      email
    }
  }
}

export default {
  data() {
    return {
      order: {},
      messages: {
        required: 'Pole jest wymagane.',
        minLength3: 'Wpisz co najmniej 3 znaki.',
        minLength9: 'Wpisz co najmniej 9 znaków.',
        alpha: 'Pole może zawierać tylko litery.',
        lastname: 'Pole może zawierać tylko litery i myślnik.',
        street: 'Pole może zawierać litery, cyfry, spację i znaki ",/;".',
        zip: 'Podaj poprawny kod pocztowy.',
        city: 'Pole może zawierać tylko litery, spację i myślnik.',
        phone: 'Podaj poprawny numer telefonu.',
        email: 'Podaj poprawny adres email.'
      },
      rodo: false
    }
  },
  computed: {
    ...mapState('regeneration', ['orderId', 'formHeight'])
  },
  validations,
  mounted() {
    this.$refs.trap.tabIndex = -1
  },
  methods: {
    ...mapMutations('regeneration', {
      setFormHeight: 'REGENERATION_SET_FORM_HEIGHT'
    }),
    placeOrder() {
      this.$v.order.$touch()
      if (!this.$v.order.$invalid && !this.order.trap) {
        this.$store.dispatch(
          'regeneration/REGENERATION_PLACE_ORDER',
          this.order
        )
      }
    },
    beforeLeave(el) {
      this.setFormHeight(el.clientHeight)
    },
    beforeEnter(el) {
      el.style.height = this.formHeight + 'px'
    }
  }
}
</script>

<style lang="scss" scoped>
.form-wrap {
  align-items: center;
  display: flex;
  justify-content: center;
}

form {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;

  @media screen and (min-width: 960px) {
    width: 90%;
  }
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
  padding: 0 0.5em;
  width: 100%;

  @media screen and (min-width: 580px) {
    &.field--zip {
      width: 25%;
      flex-shrink: 1;
    }
    &.field--city {
      width: 75%;
      flex-shrink: 1;
    }
  }

  @media screen and (min-width: 768px) {
    width: 50%;

    &.field--street,
    &.field--city {
      width: 40%;
    }
    &.field--zip {
      width: 20%;
    }
  }

  &.field--rodo {
    flex-direction: row;
    justify-content: center;
    margin: 1em 0;
    width: 100%;

    label {
      font-size: 0.95em;
      font-weight: normal;
      order: 1;
    }
  }
}

.button {
  font-size: 0.95em;
  justify-content: center;
  margin: 1em auto 2em;
  width: 15em;
}

.trap {
  position: absolute;
  top: -9999px;
  left: -9999px;
  visibility: hidden;
}

label {
  font-size: 0.85em;
  font-weight: bold;
  margin-bottom: 0.25em;

  span {
    color: $color-secondary;
  }
}

input ~ div {
  height: 1em;
}

.message {
  color: red;
  font-size: 0.8em;
  height: 1em;
  margin-top: 0.25em;
}

.ordered {
  align-items: center;
  display: flex;
  justify-content: flex-start;
}

.ordered__message {
  background-color: #fcfcfc;
  border-radius: 1em;
  margin-top: -3em;
  padding: 2em 4em 3em;

  h3,
  p {
    text-align: center;
  }

  h3 {
    color: $color-secondary;
  }
}

/* Transitions */

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave {
  opacity: 1;
}
</style>
