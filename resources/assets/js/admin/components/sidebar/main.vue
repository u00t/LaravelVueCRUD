<template>
  <aside class="l-app__sidebar" :class="wrapperCls">
    <slot name="start"></slot>
    <a role="button" class="l-app__sidebar__toggle" v-if="toggleable" @click="toggle"></a>
    <div class="l-app__sidebar__content">
      <slot name="content"></slot>
    </div>
    <slot name="end"></slot>
  </aside>
</template>

<script>
  export default {
    name: 'Sidebar',
    props: {
      toggleable: {
        type: Boolean,
        default: true
      },
      fold: {
        type: Boolean,
        default: false
      }
    },
    data () {
      return {
        isFold: false
      }
    },
    watch: {
      isFold (val) {
        localStorage.setItem('sidebar_fold', JSON.stringify(val))
      }
    },
    computed: {
      wrapperCls () {
        return {
          'l-app__sidebar--fold': this.fold,
          'is-fold': this.isFold
        }
      }
    },
    methods: {
      toggle () {
        this.isFold = !this.isFold
      }
    },
    created() {
      this.isFold = !!JSON.parse(localStorage.getItem('sidebar_fold'))
    }
  }
</script>
