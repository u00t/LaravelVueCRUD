import DropContent from './content.vue'
import clickoutside from '../../directives/clickoutside'

export default {
  name: 'Drop',
  components: { DropContent },
  directives: { clickoutside },
  props: {
    tag: {
      type: String,
      default: 'div'
    },
    trigger: {
      type: String,
      default: 'click' // click, hover, focus
    }
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    toggle (e) {
      if (e) {
        e.preventDefault()
      }
      this.visible = !this.visible
    },
    open (e) {
      this.visible = true
    },
    hide (e) {
      this.visible = false
    }
  },
  render (h) {
    const data = {
      attrs: {
        'class': 'c-drop'
      },
      directives: [{
        name: 'clickoutside',
        expression: 'hide'
      }]
    }

    return h(this.tag, data, [this.$slots.trigger, this.$slots.content])
  },
  mounted () {
    this.triggerEl = this.$slots.trigger ? this.$slots.trigger[0].elm : this.$slots.default[0].elm
    this.contentEl = this.$slots.content ? this.$slots.content[0].elm : this.$slots.default[1].elm

    if (this.trigger === 'hover') {
      this.triggerEl.addEventListener('mouseenter', this.open)
      this.triggerEl.addEventListener('mouseleave', this.hide)
      this.contentEl.addEventListener('mouseenter', this.open)
      this.contentEl.addEventListener('mouseleave', this.hide)
    } else if (this.trigger === 'click') {
      this.triggerEl.addEventListener('click', this.toggle)
    } else if (this.trigger === 'focus') {
      this.triggerEl.addEventListener('focus', this.open)
      this.triggerEl.addEventListener('blur', this.hide)
    }
  },
  beforeDestroy () {
    if (this.trigger === 'hover') {
      this.triggerEl.removeEventListener('mouseenter', this.open)
      this.triggerEl.removeEventListener('mouseleave', this.hide)
      this.contentEl.removeEventListener('mouseenter', this.open)
      this.contentEl.removeEventListener('mouseleave', this.hide)
    } else if (this.trigger === 'click') {
      this.triggerEl.removeEventListener('click', this.toggle)
    } else if (this.trigger === 'focus') {
      this.triggerEl.removeEventListener('focus', this.open)
      this.triggerEl.removeEventListener('blur', this.hide)
    }
  }
}
