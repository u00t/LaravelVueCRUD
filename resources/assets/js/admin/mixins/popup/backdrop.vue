<template lang="html">
  <transition name="fade" appear @after-leave="afterLeave">
    <div class="backdrop"
      @touchmove="prevent"
      v-show="visible">
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'Backdrop',
    data () {
      return {
        visible: false
      }
    },
    watch: {
      visible (val) {
        if (val) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = this.bodyOverflow
        }
      }
    },
    mounted () {
      this.bodyOverflow = document.body.style.overflow
    },
    methods: {
      prevent (e) {
        e.preventDefault()
        e.stopPropagation()
      },
      afterLeave () {
        this.$destroy()
      }
    },
    destroyed () {
      document.body.removeChild(this.$el)
    }
  }
</script>
