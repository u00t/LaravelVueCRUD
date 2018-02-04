export default {
  bind: function (el, binding, vnode) {
    const handler = function (e) {
      if (!vnode.context || el.contains(e.target)) {
        return false
      }
      if (binding.expression && vnode.context[binding.expression]) {
        vnode.context[binding.expression](e)
      } else {
        binding.value && binding.value(e)
      }
    }

    el.__clickoutside__ = handler
    document.addEventListener('click', handler)
  },
  unbind: function (el) {
    document.removeEventListener('click', el.__clickoutside__)
    delete el.__clickoutside__
  }
}
