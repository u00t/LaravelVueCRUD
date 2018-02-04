import Notice from './main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Notice.name, Notice)
}

export default Notice
