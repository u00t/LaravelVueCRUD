import Alert from './main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Alert.name, Alert)
}

export default Alert
