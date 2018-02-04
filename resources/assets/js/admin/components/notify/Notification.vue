<template>
  <div class="c-notification">
    <a role="button" class="c-notification__close" @click="close" v-if="closeable">
      <i class="i-remove"></i>
    </a>
    <div class="c-notification__media" v-if="type">
      <icon-danger v-if="type === 'danger'" />
      <icon-success v-else-if="type === 'success'" />
      <icon-warning v-else-if="type === 'warning'" />
    </div>
    <div class="c-notification__content">
      <div class="c-notification__title">{{title}}</div>
      <div class="c-notification__text">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
  import { IconDanger, IconSuccess, IconWarning } from '../icon'
  import { arrayHas } from '../../utils'

  export default {
    name: 'Notification',
    components: {
      IconDanger,
      IconSuccess,
      IconWarning
    },
    props: {
      title: {
        type: String,
        default: ''
      },
      type: {
        type: String,
        default: ''
      },
      closeable: {
        type: Boolean,
        default: true
      },
      timer: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        timeout: null
      }
    },
    mounted() {
      if (this.timer > 0) {
        this.timeout = setTimeout(this.close, this.timer)
      }
    },
    methods: {
      close() {
        if (this.timeout) {
          window.clearTimeout(this.timeout)
        }
        this.$emit('close')
      }
    }
  }
</script>
