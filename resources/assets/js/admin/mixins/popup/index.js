import manager from './popup-manager'

export default {
  data () {
    return {
      visible: false,
      backdrop: false,
      zIndex: 0
    }
  },
  watch: {
    visible (val) {
      if (val && this.backdrop) {
        this.zIndex = manager.register(this)
      } else if (!val && this.backdrop) {
        manager.deregister(this)
      }
    }
  },
  mounted () {
    if (this.visible && this.backdrop) {
      this.zIndex = manager.register(this)
    } else {
      this.zIndex = manager.getNextIndex()
    }
  }
}
