import Tabs from './main.vue'
import TabPane from './tab-pane.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Tabs.name, Tabs)
  window.Vue.component(TabPane.name, TabPane)
}

export {
  Tabs,
  TabPane
}
