<template>
  <div class="c-alert" :class="wrapperCls">
    <a role="button" class="c-alert__close" @click="remove" v-if="closeable">
      <i class="i-remove"></i>
    </a>
    <slot></slot>
  </div>
</template>

<script>
  import { arrayHas } from '../../utils'
  const types = ['primary', 'success', 'info', 'danger', 'warning']
  export default {
    name: 'Alert',
    props: {
      type: {
        type: String,
        default: ''
      },
      timer: {
        type: Number,
        default: 0
      },
      closeable: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      wrapperCls() {
        let cls = ''
        let type = arrayHas(types, this.type, '')
        if (type) {
          cls += 'c-alert--' + type
        }
        if (this.closeable) {
          cls += ' has-close'
        }
        return cls
      }
    },
    methods: {
      remove() {
        this.$destroy()
      }
    },
    mounted() {
      if (this.timer > 0) {
        setTimeout(() => {
          this.remove()
        }, this.timer)
      }
    },
    destroyed() {
      this.$el.remove()
    }
  }
</script>
