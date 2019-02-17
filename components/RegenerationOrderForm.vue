<template>
  <div class="form-wrap">
    <transition name="fade" mode="out-in" @before-leave="beforeLeave" @before-enter="beforeEnter">
      <form v-if="!orderId" @submit.prevent="placeOrder">
        <div class="field-group">
          <div class="field">
            <label for="firstname">Imię</label>
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
            <span
              v-visible="errors.has('firstname')"
              class="message"
            >{{ errors.first('firstname') }}</span>
          </div>
          <div class="field">
            <label for="lastname">Nazwisko</label>
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
        </div>
        <div class="field-group">
          <div class="field">
            <label for="street">Ulica</label>
            <input
              id="street"
              v-model="order.street"
              v-validate="{ required: true, min: 3, regex: /^[0-9A-Za-ząćęłńóśźżĄĆĘŁŃÓŚŹŻ/ ]*$/ }"
              name="street"
              data-vv-as="'Ulica'"
              type="text"
              :class="{'has-error': errors.has('street')}"
              placeholder="Jesionowa 25/4"
            >
            <span v-visible="errors.has('street')" class="message">{{ errors.first('street') }}</span>
          </div>
          <div class="field">
            <label for="zip">Kod pocztowy</label>
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
          <div class="field">
            <label for="city">Miejscowość</label>
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
        </div>
        <div class="field-group">
          <div class="field">
            <label for="phone">Telefon</label>
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
            <label for="email">Email</label>
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
        </div>
        <div class="field-group">
          <button class="button button--primary button--rounded" type="submit">Wyślij</button>
        </div>
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
      order: {}
    }
  },
  computed: {
    ...mapState('regeneration', ['orderId', 'formHeight'])
  },
  methods: {
    ...mapMutations('regeneration', {
      setFormHeight: 'REGENERATION_SET_FORM_HEIGHT'
    }),
    placeOrder() {
      this.$validator.validateAll().then(result => {
        if (result) {
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
  width: 80%;
}

.field-group {
  display: flex;
  width: 100%;

  & > .field {
    margin-right: 2em;
    flex: 10;

    &:last-child {
      margin-right: 0;
    }
  }
}

.field-group:nth-child(2) .field:nth-child(2) {
  flex: 1;
}

.field-group:last-child {
  justify-content: center;
}

#zip {
  max-width: 100px;
}

.field {
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}

label {
  font-size: 0.8em;
  font-weight: bold;
  margin-bottom: 0.25em;
}

input {
  border: 1px solid #c4c7c8;
  padding: 0.75em;
  box-shadow: inset 0 1px 1px #f1f1f1;

  &::placeholder {
    opacity: 0.5;
  }

  &:focus {
    border-color: lighten($color-primary, 10%);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05),
      0 0 6px rgba($color-primary, 25%);
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 50px white inset;
    -webkit-text-fill-color: #333;
  }

  &:-webkit-autofill:focus {
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05),
      0 0 6px rgba($color-icon-footer, 25%), 0 0 0 50px white inset;
    -webkit-text-fill-color: #333;
  }

  &.has-error {
    border-color: lighten($color-secondary, 10%);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05),
      0 0 6px lighten($color-secondary, 25%);
  }
}

.message {
  color: red;
  font-size: 0.8em;
  height: 1em;
  margin-top: 0.25em;
}

button {
  cursor: pointer;
  font-size: 0.9em;
  justify-content: center;
  margin: 1em 0 2em;
  width: 20em;
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
