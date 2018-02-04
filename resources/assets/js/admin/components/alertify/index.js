import Vue from 'vue'

const Alert = Vue.extend(require('./main.vue'))

const alertify = function (options) {
  options = options || {}
  if (typeof options === 'string') {
    options = {
      text: options
    }
  }
  const alert = new Alert({
    data: options
  }).$mount()
  document.body.appendChild(alert.$el)
  alert.visible = true

  return alert
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.prototype.$alertify = alertify
}

export default alertify
