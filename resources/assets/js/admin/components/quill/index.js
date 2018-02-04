import QuillEditor from './main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(QuillEditor.name, QuillEditor)
}

export default QuillEditor
