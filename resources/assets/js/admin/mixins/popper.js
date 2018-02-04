import { arrayHas } from '../utils'
import PopperJS from 'popper.js'

const stop = e => e.stopPropagation()
const placements = [
  'top-start', 'top', 'top-end',
  'right-start', 'right', 'right-end',
  'bottom-start', 'bottom', 'bottom-end',
  'left-start', 'left', 'left-end'
]

export default {
  data () {
    return {
      visible: false,
      currentPlacement: arrayHas(placements, this.placement, 'bottom-start')
    }
  },
  watch: {
    visible (val) {
      val ? this.updatePopper() : this.destroyPopper()
    }
  },
  methods: {
    createPopper () {
      let $reference = this.referenceEl = this.referenceEl || this.reference || this.$refs.reference
      let $popperEl = this.popperEl = this.popperEl || this.popper || this.$refs.popper

      const options = Object.assign({
        gpuAcceleration: false,
        placement: this.currentPlacement,
        onUpdate: (data) => {
          this.currentPlacement = data.placement
        }
      }, this.popperOptions)

      if (!$reference && this.$slots.reference && this.$slots.reference[0]) {
        $reference = this.referenceEl = this.$slots.reference[0]
      }

      if (!$popperEl || !$reference) return

      if (this.appendToBody) {
        document.body.appendChild($popperEl)
      }
      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy()
      }
      this.popperJS = new PopperJS($reference, $popperEl, options)
      this.popperEl.addEventListener('click', stop)
    },
    updatePopper () {
      this.popperJS ? this.popperJS.update() : this.createPopper()
    },
    destroyPopper () {
      if (this.popperJS && this.popperJS.destroy) {
        this.popperJS.destroy()
      }
      this.popperJS = null
    }
  },
  beforeDestroy () {
    this.destroyPopper()
    this.popperEl.removeEventListener('click', stop)
  }
}
