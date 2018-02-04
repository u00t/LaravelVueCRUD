import Vue from 'vue'

const NotificationList = Vue.extend(require('./NotificationList.vue'))
let notifications
let seed = 0
const Default = {
  id: 0,
  title: '',
  text: '',
  type: '',
  timer: 5000,
  closeable: false
}

const notify = function (options) {
  seed++

  if (typeof notifications === 'undefined') {
    notifications = new NotificationList().$mount()
    document.body.appendChild(notifications.$el)
  }

  if (typeof options === 'string') {
    options = Object.assign({
      id: seed,
      title: options
    }, Default)
  } else if (typeof options === 'object') {
    options = Object.assign({}, Default, options, {id: seed})
  }

  notifications.add(options)
}

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.prototype.$notify = notify
}

export default notify
