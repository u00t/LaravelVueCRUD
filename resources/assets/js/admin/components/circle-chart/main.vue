<template lang="html">
  <div class="c-circleChart" :style="circleSize">
    <svg viewBox="0 0 100 100">
      <path :d="pathString" :stroke="bg" :stroke-width="lineWidth" :fill-opacity="0"/>
      <path :d="pathString" :stroke-linecap="lineCap" :stroke="strokeColor" :stroke-width="lineWidth" fill-opacity="0" :style="pathStyle"/>
    </svg>
    <div class="c-circleChart__content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  import { filterColor } from '../../utils'
  export default {
    name: 'CircleChart',
    props: {
      percent: {
        type: Number,
        default: 0
      },
      size: {
        type: [String, Number],
        default: 75
      },
      color: {
          type: String,
          default: '#1BB934'
      },
      bg: {
        type: String,
        default: '#e5e5e5'
      },
      lineWidth: {
          type: Number,
          default: 6
      },
      lineCap: {
          default: 'round' // round, square
      }
    },
    computed: {
      circleSize() {
        let size = 75

        if (this.size === 'lg') {
          size = 120
        } else if (this.size === 'sm') {
          size = 40
        } else if (typeof this.size === 'number') {
          size = this.size
        }

        return {
          width: `${size}px`,
          height: `${size}px`
        }
      },
      strokeColor() {
        return filterColor(this.color)
      },
      radius() {
        return 50 - this.lineWidth / 2;
      },
      pathString () {
        return `M 50,50 m 0,-${this.radius}
          a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
          a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`;
      },
      len () {
        return Math.PI * 2 * this.radius;
      },
      pathStyle () {
        return {
          'stroke-dasharray': `${this.len}px ${this.len}px`,
          'stroke-dashoffset': `${((100 - this.percent) / 100 * this.len)}px`,
          'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
        };
      },
    }
  }
</script>
