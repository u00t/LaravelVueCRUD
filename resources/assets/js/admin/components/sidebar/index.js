import Sidebar from './main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Sidebar.name, Sidebar)
}

export default Sidebar
