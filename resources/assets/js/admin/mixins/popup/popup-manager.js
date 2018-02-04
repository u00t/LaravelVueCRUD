import Vue from 'vue'
const Backdrop = Vue.extend(require('./backdrop.vue'))

class PopupManager {
  constructor () {
    this.zIndex = 2000
    this.instances = []
    this.backdrop = null
  }

  getNextIndex () {
    this.zIndex++
    return this.zIndex
  }

  register (instance) {
    if (this.instances.indexOf(instance) !== -1) return
    if (this.instances.length === 0) {
      this.showBackdrop()
    }
    this.instances.push(instance)
    return this.getNextIndex()
  }

  deregister (instance) {
    let index = this.instances.indexOf(instance)
    if (index === -1) return
    this.instances.splice(index, 1)
    if (this.instances.length === 0) {
      this.hideBackdrop()
    }
  }

  showBackdrop () {
    if (this.backdrop) return

    this.backdrop = new Backdrop().$mount()
    document.body.appendChild(this.backdrop.$el)
    this.backdrop.visible = true
  }

  hideBackdrop () {
    setTimeout(() => {
      if (!this.backdrop) return
      if (this.instances.length === 0) {
        this.backdrop.visible = false
        this.backdrop = null
      }
    }, 50)
  }
}

export default new PopupManager()
