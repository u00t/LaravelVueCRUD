<template>
  <transition
    :name="transition"
  >
    <div class="c-modal c-modal--always" role="dialog"
        :class="wrapperClass"
        :style="{'z-index': this.zIndex}"
        v-show="visible">
        <div class="c-modal__content">
          <slot></slot>
        </div>
    </div>
  </transition>
</template>

<script>
  import popup from '../../mixins/popup'
  import { arrayHas } from '../../utils'

  const sizes = ['sm', 'lg']

  export default {
    name: 'Modal',
    mixins: [popup],
    props: {
      value: {
        type: Boolean,
        default: false
      },
      size: {
        type: String,
        default: ''
      },
      transition: {
        type: String,
        default: 'fade'
      },
      appendToBody: {
        type: Boolean,
        default: true
      }
    },
    data () {
      return {
        visible: false,
        backdrop: true,
        zIndex: 0
      }
    },
    watch: {
      value: {
        immediate: true,
        handler (val) {
          this.visible = !!val
        }
      },
      visible (val) {
        this.$emit('input', val)
      }
    },
    computed: {
      wrapperClass () {
        const size = arrayHas(sizes, this.size, '')
        if (size) {
          return 'c-modal--' + size
        } else {
          return ''
        }
      }
    },
    mounted () {
      if (this.appendToBody) {
        document.body.appendChild(this.$el)
      }
    }
  }
</script>
