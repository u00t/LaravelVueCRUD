import DatePicker from './main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(DatePicker.name, DatePicker)
}

export default DatePicker
