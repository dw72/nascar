<template>
  <div id="timeblockr" />
</template>

<script>
export default {
  head: {
    script: [
      {
        type: 'text/javascript',
        src: 'https://include.timeblockr.com/v1/js/core/timeblockr.js',
        'data-apikey': 'fcf7b2c9de2e42809e0ed75f9ff7d85e',
        'data-configuration':
          'https://include.timeblockr.com/v1/config/goodyear/config.js',
        charset: 'utf-8',
        id: 'timeblockr_app',
        body: true,
      },
    ],
  },
}
</script>

<style lang="scss">
#timeblockr {
  position: relative;

  .loader {
    background-color: rgba($color-secondary, 0.75);
    position: absolute;
    top: 25%;
    left: 50%;
  }
}

#timeblockr_disclaimer,
#timeblockr_datepicker {
  display: none;
}

.timeblockr_button {
  font-size: 1em;
  @extend .button;
  @extend .button--primary;
}

.timeblockr_head {
  border: 0;
  padding: 1em 0 0.25em 0;
}

.timeblockr_basket {
  border: 2px dashed rgba($color-primary, 0.25);
  padding: 1em;

  .timeblockr_product {
    align-items: center;
    display: flex;
    justify-content: space-between;
    padding: 0.75em;
  }

  .timeblockr_delete-product {
    font-size: 1em;
    position: initial;
    order: 1;

    a {
      height: auto;
      width: 1em;
    }

    .glyphicon {
      top: initial;
    }
  }

  .timeblockr_hide-text {
    display: none;
  }
}

.timeblockr_intro,
.timeblockr-calendar > p,
.timeblockr_location {
  display: none;
}

.timeblockr_timeslots {
  display: flex;
  flex-wrap: wrap;
}

.timeblockr_calendar_compact {
  a.timeblockr_slot {
    background: none;
    border: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
    margin: 0 0.25em 0.25em 0 !important;
    min-width: initial;
  }

  .timeblockr_time {
    background: $color-text-light;
    border: 1px solid rgba($color-primary, 0.25);
    color: $color-text;
    padding: 0.5em 1em;
    width: 5em;

    &:hover {
      background-color: $color-primary;
      color: $color-text-light;
    }
  }
}

.ui-widget-header {
  border-color: $color-primary;
  background: $color-primary;
  color: $color-text-light;
}

.select2-container .select2-selection--single {
  align-items: center;
  display: flex;
  height: auto;
  justify-content: space-between;
  padding: 0.4em;
}

.select2-container--default .select2-selection--single {
  background-color: #fff;
  border: 1px solid #c4c7c8;
  border-radius: 5px;
  box-shadow: inset 0 1px 1px #f1f1f1;
  font-family: 'Exo 2', sans-serif;
  font-size: 0.95em;

  .select2-selection__arrow {
    position: relative;
    height: auto;
  }

  .select2-selection__rendered {
    display: flex;
    justify-content: space-between;
    padding-right: 5px;
    width: 100%;
  }

  .select2-selection__clear {
    order: 1;
  }
}
</style>