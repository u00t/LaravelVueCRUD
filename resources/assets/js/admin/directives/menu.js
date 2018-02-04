import { siblings } from '../utils/dom'

export default {
  bind: function (el) {
    const handler = function (e) {
      if (e.target && e.target.matches('.c-menu__item.has-sub > .c-menu__link, .c-menu__item.has-sub > .c-menu__link *')) {
        e.preventDefault()
        const target = e.target.closest('.c-menu__item')
        if (target) {
          siblings(target, (el) => {
            el.classList.remove('is-open')
          })
          target.classList.toggle('is-open')
        }
      }
    }

    el.__menuHandler__ = handler
    el.addEventListener('click', el.__menuHandler__)
  },
  unbind: function (el) {
    el.removeEventListener('click', el.__menuHandler__)
    delete el.__menuHandler__
  }
}
