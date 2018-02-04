<template>
  <div class="c-drop__content c-drop__content--always"
    :class="wrapperClass"
    :style="{'z-index': this.zIndex}"
    v-show="visible"
  >
    <slot></slot>
  </div>
</template>

<script>
  import popper from '../../mixins/popper'
  import popup from '../../mixins/popup'
  import { camelCase, arrayHas } from '../../utils'

  const placements = [
    'top-start', 'top', 'top-end',
    'right-start', 'right', 'right-end',
    'bottom-start', 'bottom', 'bottom-end',
    'left-start', 'left', 'left-end'
  ]

  export default {
    name: 'DropContent',
    mixins: [popup, popper],
    props: {
      placement: {
        type: String,
        default: 'bottom-start'
      },
      appendToBody: {
        type: Boolean,
        default: true
      },
      options: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    data () {
      return {
        visible: false,
        backdrop: false,
        zIndex: 0,
        currentPlacement: arrayHas(placements, this.placement, 'bottom-start')
      }
    },
    watch: {
      '$parent.visible': {
        immediate: true,
        handler (val) {
          this.visible = !!val
        }
      }
    },
    computed: {
      wrapperClass () {
        const cls = 'c-drop__content--' + camelCase(this.placement)
        return {
          [cls]: true
        }
      }
    },
    mounted () {
      this.$parent.popperEl = this.popperEl = this.$el
      this.referenceEl = this.$parent.$el
    }
  }
</script>

<style scoped>
  .c-drop__content {
    right: auto;
    bottom: auto;
  }
</style>
