import Drop from './main.js'
import DropContent from './content.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Drop.name, Drop)
  window.Vue.component(DropContent.name, DropContent)
}

export {
  Drop,
  DropContent
}
