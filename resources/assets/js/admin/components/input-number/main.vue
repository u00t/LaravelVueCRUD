<template>
  <div class="form-flex">
    <span class="form-addon" role="button" @click="decrement">-</span>
    <input type="number" class="form-input" pattern="[0-9]*"
        v-model.number="currentValue"
        :name="name"
        :class="inputClass"
        :readonly="readonly">
    <span class="form-addon" role="button" @click="increment">+</span>
  </div>
</template>

<script>
  export default {
    name: 'InputNumber',
    props: {
      min: Number,
      max: Number,
      step: {
        default: 1,
        type: Number
      },
      value: {
        default: 0
      },
      name: String,
      readonly: Boolean,
      disabled: Boolean,
      inputClass: String
    },
    data: function () {
      return {
        currentValue: Number(this.value)
      }
    },
    computed: {
      isMinDisabled: function () {
        return typeof this.min === 'undefined' ? false : this.currentValue <= this.min
      },
      isMaxDisabled: function () {
        return typeof this.max === 'undefined' ? false : this.currentValue >= this.max
      }
    },
    watch: {
      currentValue: function (newValue) {
        if (this.min && this.currentValue < this.min) {
          this.currentValue = this.min
        }
        if (this.max && this.currentValue > this.max) {
          this.currentValue = this.max
        }
        this.$emit('input', newValue)
      },
      value: function (newValue) {
        if (this.min && newValue < this.min) {
          this.currentValue = this.min
        } else if(this.max && newValue > this.max) {
          this.currentValue = this.max
        } else {
          this.currentValue = Number(newValue)
        }
      }
    },
    methods: {
      increment: function () {
        if (!this.isMaxDisabled) {
          this.currentValue += this.step
        }
      },
      decrement: function () {
        if (!this.isMinDisabled) {
          this.currentValue -= this.step
        }
      }
    }
  }
</script>
