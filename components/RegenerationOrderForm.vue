<template>
  <div class="form-wrap">
    <transition name="fade" mode="out-in" @before-leave="beforeLeave" @before-enter="beforeEnter">
      <form v-if="!orderId" @submit.prevent="placeOrder">
        <div class="field">
          <label for="firstname">
            Imię
            <span>*</span>
          </label>
          <input
            id="firstname"
            v-model="order.firstname"
            v-validate="'required|alpha|min:3'"
            name="firstname"
            data-vv-as="'Imię'"
            type="text"
            :class="{'has-error': errors.has('firstname')}"
            placeholder="Jan"
          >
          <span v-visible="errors.has('firstname')" class="message">{{ errors.first('firstname') }}</span>
        </div>
        <div class="field">
          <label for="lastname">
            Nazwisko
            <span>*</span>
          </label>
          <input
            id="lastname"
            v-model="order.lastname"
            v-validate="{ required: true, min: 3, regex: /^[A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ-]*$/ }"
            name="lastname"
            data-vv-as="'Nazwisko'"
            type="text"
            :class="{'has-error': errors.has('lastname')}"
            placeholder="Kowalski"
          >
          <span v-visible="errors.has('lastname')" class="message">{{ errors.first('lastname') }}</span>
        </div>
        <div class="field field--street">
          <label for="street">
            Ulica
            <span>*</span>
          </label>
          <input
            id="street"
            v-model="order.street"
            v-validate="{ required: true, min: 3, regex: /^[0-9A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ/,; ]*$/ }"
            name="street"
            data-vv-as="'Ulica'"
            type="text"
            :class="{'has-error': errors.has('street')}"
            placeholder="Jesionowa 25/4"
          >
          <span v-visible="errors.has('street')" class="message">{{ errors.first('street') }}</span>
        </div>
        <div class="field field--zip">
          <label for="zip">
            Kod pocztowy
            <span>*</span>
          </label>
          <input
            id="zip"
            v-model="order.zip"
            v-validate="{ required: true, regex: /^\d{2}-\d{3}$/ }"
            name="zip"
            data-vv-as="'Kod pocztowy'"
            type="text"
            :class="{'has-error': errors.has('zip')}"
            placeholder="63-700"
          >
          <span v-visible="errors.has('zip')" class="message">{{ errors.first('zip') }}</span>
        </div>
        <div class="field field--city">
          <label for="city">
            Miejscowość
            <span>*</span>
          </label>
          <input
            id="city"
            v-model="order.city"
            v-validate="'required|alpha_spaces|min:3'"
            name="city"
            data-vv-as="'Miejscowość'"
            type="text"
            :class="{'has-error': errors.has('city')}"
            placeholder="Krotoszyn"
          >
          <span v-visible="errors.has('city')" class="message">{{ errors.first('city') }}</span>
        </div>
        <div class="field">
          <label for="phone">
            Telefon
            <span>*</span>
          </label>
          <input
            id="phone"
            v-model="order.phone"
            v-validate="{ required: true, regex: /^\+48(?:[-\s])?(\d{9}|\d{3}((?:[-\s])?\d{3}){2}|(\d{2}|\(\d{2}\))(?:[-\s])?\d{3}((?:[-\s])?\d{2}){2})$/ }"
            name="phone"
            data-vv-as="'Telefon'"
            type="text"
            :class="{'has-error': errors.has('phone')}"
            placeholder="+48600123123"
          >
          <span v-visible="errors.has('phone')" class="message">{{ errors.first('phone') }}</span>
        </div>
        <div class="field">
          <label for="email">
            Email
            <span>*</span>
          </label>
          <input
            id="email"
            v-model="order.email"
            v-validate="'required|email'"
            name="email"
            data-vv-as="'Email'"
            type="text"
            :class="{'has-error': errors.has('email')}"
            placeholder="jan@kowalski.pl"
          >
          <span v-visible="errors.has('email')" class="message">{{ errors.first('email') }}</span>
        </div>
        <input ref="trap" v-model="order.trap" class="trap" type="text">
        <div class="field field--rodo">
          <label>Wyrażam zgodę na przetwarzanie moich danych osobowych przez firmę PPHU Nascar w celu wykonania usługi.</label>
          <input id="rodo" v-model="rodoChecked" type="checkbox" name="rodo">
        </div>
        <button
          class="button button--primary button--rounded"
          type="submit"
          :disabled="!rodoChecked"
        >Wyślij zamówienie</button>
      </form>
      <div v-else class="ordered" :style="{'min-height': formHeight + 'px'}">
        <div class="ordered__message">
          <h3>Twoje zamówienie zostało przyjęte.</h3>
          <p>Nasz przedstawiciel skontaktuje się z Tobą w celu omówienia szczegółów oraz umówienia wizyty kuriera...</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'

export default {
  data() {
    return {
      order: {},
      rodoChecked: false
    }
  },
  computed: {
    ...mapState('regeneration', ['orderId', 'formHeight'])
  },
  mounted() {
    this.$refs.trap.tabIndex = -1
  },
  methods: {
    ...mapMutations('regeneration', {
      setFormHeight: 'REGENERATION_SET_FORM_HEIGHT'
    }),
    placeOrder() {
      this.$validator.validateAll().then(result => {
        if (result && !this.order.trap) {
          this.$store.dispatch(
            'regeneration/REGENERATION_PLACE_ORDER',
            this.order
          )
          return
        }
      })
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
