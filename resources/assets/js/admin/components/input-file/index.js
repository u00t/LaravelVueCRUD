import InputFile from './main.vue'

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component(InputFile.name, InputFile)
}

export default InputFile
