import Modal from './main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(Modal.name, Modal)
}

export default Modal
