<template>
  <transition-group
    class="c-notificationList"
    tag="div"
    name="is">
    <Notification
      v-for="(item, i) in items"
      :key="item.id"
      :type="item.type"
      :title="item.title"
      :closeable="item.closeable"
      :timer="item.timer"
      @close="remove(i)">
      {{item.text}}
    </Notification>
  </transition-group>
</template>

<script>
  import Notification from './Notification.vue'

  export default {
    name: 'NotificationList',
    components: {
      Notification
    },
    data() {
      return {
        items: []
      }
    },
    methods: {
      remove(index) {
        this.items.splice(index, 1)
      },
      add(obj) {
        this.items.unshift(obj)
      }
    }
  }
</script>
