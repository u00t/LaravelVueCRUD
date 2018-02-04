import CircleChart from './main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(CircleChart.name, CircleChart)
}

export default CircleChart
