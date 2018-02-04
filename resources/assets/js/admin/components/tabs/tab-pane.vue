<template lang="html">
  <div class="c-tabs__pane" :class="{'is-active': show}" role="tabpanel">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'TabPane',
    props: {
      label: String,
      name: String,
      disabled: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      show() {
        return this.$parent.currentName == this.name
      }
    },
    watch: {
      show(val) {
        if (val) {
          this.$emit('show')
        } else {
          this.$emit('hide')
        }
      }
    }
  }
</script>
