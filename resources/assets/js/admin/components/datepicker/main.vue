<template lang="html">
  <input type="text" class="form-input">
</template>

<script>
  import Vue from 'vue'
  import Flatpickr from 'flatpickr'

  export default {
    name: 'DatePicker',
    props: {
      value: {
        default: null
      },
      min: {
        default: null
      },
      max: {
        default: null
      },
      time: {
        type: Boolean,
        default: false
      },
      range: {
        type: Boolean,
        default: false
      },
      multiple: {
        type: Boolean,
        default: false
      },
      options: {
        type: Object,
        default: () => { return {} }
      }
    },
    watch: {
      min (val) {
        this.pickerJS.set('minDate', val)
      },
      max (val) {
        this.pickerJS.set('maxDate', val)
      },
      value (val) {
        this.pickerJS.setDate(val)
      }
    },
    mounted () {
      const self = this
      const options = Object.assign({
        defaultDate: this.value,
        mode: this.range ? "range" : this.multiple ? "multiple" : "single",
        time_24hr: true,
        enableTime: this.time,
        altInputClass: "flatpickr-input",
        maxDate: this.max,
        minDate: this.min,
        onChange (selectedDates) {
          self.$emit('input', selectedDates)
        },
        onReady () {
          // fix with calc bug when weekNumbers is true
          if (this.config.weekNumbers) {
            this.calendarContainer.style.width = "auto"
          }
        }
      }, this.options)

      this.pickerJS = new Flatpickr(this.$el, options)
    },
    beforeDestroy () {
      this.pickerJS.destroy()
    }
  }
</script>
