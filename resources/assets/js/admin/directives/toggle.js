export default {
  bind: function (el, binding, vnode) {
    const arg = binding.arg
    let target = el
    let cls = 'is-active'

    if (arg === 'sidebar') {
      target = document.body
      cls = 'is-sidebar-open'
    }

    const handler = function (e) {
      e.preventDefault()
      target.classList.toggle(cls)
    }

    el.__toggleHandler__ = handler

    el.addEventListener('click', el.__toggleHandler__)
  },
  unbind: function (el) {
    el.removeEventListener('click', el.__toggleHandler__)
    delete el.__toggleHandler__
  }
}
