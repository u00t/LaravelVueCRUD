<template lang="html">
  <transition name="fade" @after-leave="afterLeave">
    <div class="c-modal c-modal--always c-modal--alert" role="dialog"
      :style="{'z-index': this.zIndex}"
      v-show="visible"
    >
        <div class="c-modal__content">
          <div class="c-modalCard c-modalCard--unbordered">
            <header class="c-modalCard__header">
              <h2 class="c-modalCard__title" v-if="title" v-text="title"></h2>
            </header>
            <div class="c-modalCard__body">
              <div class="c-cell c-cell--start" v-if="type">
                <div class="c-cell__media">
                  <icon-danger width="20" height="20" v-if="type === 'danger'" />
                  <icon-success width="20" height="20" v-else-if="type === 'success'" />
                  <icon-warning width="20" height="20" v-else-if="type === 'warning'" />
                </div>
                <div class="c-cell__content">
                  {{text}}
                </div>
              </div>
              <template v-else>
                {{text}}
              </template>
            </div>
            <footer class="c-modalCard__footer" v-if="showCancel || showConfirm">
              <button type="button" class="btn btn--default" v-if="showCancel" v-text="cancelText" @click="cancel"></button>
              <button type="button" class="btn btn--primary" v-if="showConfirm" v-text="confirmText" @click="confirm"></button>
            </footer>
          </div>
        </div>
    </div>
  </transition>
</template>

<script>
  import popup from '../../mixins/popup'
  import { IconDanger, IconSuccess, IconWarning } from '../icon'
  import { arrayHas } from '../../utils'

  export default {
    name: 'Alert',
    mixins: [popup],
    components: {
      IconDanger,
      IconSuccess,
      IconWarning
    },
    data () {
      return {
        title: '',
        text: '',
        type: '',
        showCancel: false,
        showConfirm: true,
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        onConfirm: null,
        onCancel: null,
        visible: false,
        backdrop: true,
        zIndex: 0
      }
    },
    methods: {
      confirm () {
        if (typeof this.onConfirm === 'function' && this.onConfirm(this) === false) {
            return
        }
        this.close()
      },
      cancel () {
        if (typeof this.onCancel === 'function' && this.onCancel(this) === false) {
            return
        }
        this.close()
      },
      close () {
        this.visible = false
      },
      afterLeave () {
        this.$destroy()
      }
    },
    destroyed() {
      document.body.removeChild(this.$el)
    }
  }
</script>
