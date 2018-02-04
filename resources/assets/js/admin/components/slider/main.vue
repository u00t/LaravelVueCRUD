<template>
  <div class="c-slider">
    <template v-if="dots">
      <span class="c-slider__dot"
          v-for="item in stops"
          :style="{'left': item + '%'}">
      </span>
    </template>
    <template v-if="range">
      <div class="c-slider__bar" :style="barStyle"></div>
      <div class="c-slider__handle hint hint--top"
          @mousedown="startLowerDrag"
          @touchstart="startLowerDrag"
          :data-label="format(values[0])"
          :style="{'left': lowerHandlePosition + '%'}">
      </div>
      <div class="c-slider__handle hint hint--top"
          @mousedown="startUpperDrag"
          @touchstart="startUpperDrag"
          :data-label="format(values[1])"
          :style="{'left': upperHandlePosition + '%'}">
      </div>
    </template>
    <template v-else>
      <div class="c-slider__bar" :style="barStyle"></div>
      <div class="c-slider__handle hint hint--top"
          @mousedown="startLowerDrag"
          @touchstart="startLowerDrag"
          :data-label="format(values[0])"
          :style="{'left': lowerHandlePosition + '%'}">
      </div>
    </template>
  </div>
</template>

<script>
  import { filterColor } from '../../utils'
  let startDragMousePos = 0,
      startVal = 0,
      isDragingUpper = false
  export default {
    name: 'Slider',
    props: {
      value: {
        type: [Array, Number],
        default: 0
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: 100
      },
      step: {
        type: Number,
        default: 1
      },
      dots: {
        type: Boolean,
        default: false
      },
      range: {
        type: Boolean,
        default: false
      },
      color: {
        type: String,
        default: '#1BB934'
      },
      format: {
        type: Function,
        default(val) {
          return val
        }
      }
    },
    data() {
      return {
        isDragging: false,
        values: [this.min, this.max]
      }
    },
    watch: {
      value(newVal) {
        this.updateValue(newVal)
      }
    },
    computed: {
      lowerHandlePosition() {
        return (this.values[0] - this.min) / (this.max - this.min) * 100
      },
      upperHandlePosition() {
        return (this.values[1] - this.min) / (this.max - this.min) * 100
      },
      barStyle() {
        if (this.range) {
          return {
            'width': (this.values[1] - this.values[0]) / (this.max - this.min) * 100 + '%',
            'left': this.lowerHandlePosition + '%',
            'background-color': filterColor(this.color)
          }
        } else {
          return {
            'width': this.values[0] / (this.max - this.min) * 100 + '%',
            'background-color': filterColor(this.color)
          }
        }
      },
      stops() {
        let total = Math.floor((this.max - this.min) / this.step)
        let result = []
        let stepGutter = 100 * this.step / (this.max - this.min)
        for (let i = 1; i <= total; i++) {
          result.push(i * stepGutter)
        }
        return result
      }
    },
    created() {
      this.updateValue(this.value)
    },
    methods: {
      updateValue(newVal) {
        let values = []

        if (newVal instanceof Array) {
          values = [newVal[0], newVal[1]]
        } else {
          values[0] = newVal
        }

        if (typeof values[0] !== 'number') {
          values[0] = this.values[0]
        }
        if (typeof values[1] !== 'number') {
          values[1] = this.values[1]
        }

        values[0] = Math.round((values[0] - this.min)/this.step) * this.step + this.min
        values[1] = Math.round((values[1] - this.min)/this.step) * this.step + this.min
        if (values[0] > this.max) {
          values[0] = this.max
        } else if (values[0] < this.min) {
          values[0] = this.min
        }
        if (values[1] > this.max) {
          values[1] = this.max
        } else if (values[1] < this.min) {
          values[1] = this.min
        }

        if (values[0] > values[1]) {
          if (this.values[1] === values[1]) {
            values[0] = values[1]
          } else if (values[0] === values[0]) {
            values[1] = values[0]
          } else {
            return
          }
        }

        if (this.values[0] === values[0] && this.values[1] === values[1]) return

        this.values = values

        if (this.range) {
          this.$emit('change', this.values)
        } else {
          this.$emit('change', this.values[0])
        }

      },
      startLowerDrag(e) {
        e.preventDefault()
        e.stopPropagation()
        e = e.changedTouches ? e.changedTouches[0] : e
        startDragMousePos = e.pageX
        startVal = this.values[0]
        isDragingUpper = false
        this.isDragging = true
        window.addEventListener('mousemove', this.onDrag)
        window.addEventListener('touchmove', this.onDrag)
        window.addEventListener('mouseup', this.stopDrag)
        window.addEventListener('touchend', this.stopDrag)
      },
      startUpperDrag(e) {
        e.preventDefault()
        e.stopPropagation()
        e = e.changedTouches ? e.changedTouches[0] : e
        startDragMousePos = e.pageX
        startVal = this.values[1]
        isDragingUpper = true
        this.isDragging = true
        window.addEventListener('mousemove', this.onDrag)
        window.addEventListener('touchmove', this.onDrag)
        window.addEventListener('mouseup', this.stopDrag)
        window.addEventListener('touchend', this.stopDrag)
      },
      onDrag(e) {
        if (!this.isDragging) return
        e.preventDefault()
        e.stopPropagation()
        e = e.changedTouches ? e.changedTouches[0] : e
        window.requestAnimationFrame(() => {
          let diff = (e.pageX - startDragMousePos) / this.$el.offsetWidth * (this.max - this.min)
          let nextVal = startVal + diff
          if (isDragingUpper) {
            this.updateValue([null, nextVal])
          } else {
            this.updateValue([nextVal, null])
          }
        })
      },
      stopDrag(e) {
        this.isDragging = false
        isDragingUpper = false
        window.removeEventListener('mousemove', this.onDrag)
        window.removeEventListener('touchmove', this.onDrag)
        window.removeEventListener('mouseup', this.stopDrag)
        window.removeEventListener('touchend', this.stopDrag)
      }
    }
  }
</script>
