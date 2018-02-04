<script>
  import TabPane from './tab-pane.vue'

  export default {
    name: 'Tabs',
    components: {
      TabPane
    },
    props: {
      activeName: String,
      type: {
        type: String,
        default: 'underline'
      },
      size: String
    },
    data() {
      return {
        currentName: ''
      }
    },
    mounted() {
      this.currentName = this.activeName || this.$children[0] && this.$children[0].name
      this.$nextTick(() => {
        this.$forceUpdate()
      })
    },
    watch: {
      activeName(val) {
        this.currentName = val
      }
    },
    methods: {
      handleTabClick(tab, e) {
        if (tab.disabled) return
        this.currentName = tab.name
        this.$emit('change', tab.name)
      }
    },
    render(h) {
      const { handleTabClick, currentName } = this
      let tabsClasses = `c-tabs c-tabs--${this.type}`
      let navClasses = `c-tabs__nav c-nav c-nav--${this.type}`
      if (this.size) {
        navClasses += ` c-nav--${this.size}`
      }

      const tabs = this.$children.map((tab, index) => {
        return (
          <li class="c-nav__item">
            <a role="button"
              class={{ 'c-nav__link': true, 'is-active': currentName === tab.name}}
              disabled={tab.disabled}
              onClick={(e) => { handleTabClick(tab, e) }}
            >
              {tab.label}
            </a>
          </li>
        )
      })

      return (
        <div class={tabsClasses}>
          <ul class={navClasses}>
            {tabs}
          </ul>
          <div class="c-tabs__content">
            {this.$slots.default}
          </div>
        </div>
      )
    }
  }
</script>
