<template>
  <div class="c-note" :class="modifierCls">
    <a role="button" class="c-note__close" @click="close" v-if="closeable">
      <i class="i-remove"></i>
    </a>
    <slot></slot>
  </div>
</template>

<script>
  import { arrayHas } from '../../utils'
  const types = ['primary', 'info', 'success', 'danger', 'warning']
  export default {
    name: 'Note',
    props: {
      type: {
        type: String,
        default: ''
      },
      closeable: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      modifierCls() {
        let type = arrayHas(types, this.type, ''),
            cls = []

        if (this.type !== '') {
          cls.push('c-note--' + type)
        }
        if (this.closeable) {
          cls.push('has-close')
        }
        return cls.join(' ')
      }
    },
    methods: {
      close() {
        this.$destroy()
      }
    },
    destroyed() {
      this.$el.remove()
    }
  }
</script>
