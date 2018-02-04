import Slider from './main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Slider.name, Slider)
}

export default Slider
