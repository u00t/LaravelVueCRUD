import InputNumber from './main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(InputNumber.name, InputNumber)
}

export default InputNumber
