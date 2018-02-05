<template>
<transition name="fade" mode="out-in">
  <router-view/>
</transition>
</template>

<script>
export default {
	layout: 'admin',
	middleware: 'auth'
}
</script>

<style>
</style>
