<template>
  <div class="l-app">
  	<sidebar>
  		<div class="logo u-bg-primary" slot="start">
            <img src="../../images/logo-white.svg">
        </div>
        <ul class="c-menu c-menu--dark" v-menu slot="content">
        	<li class="c-menu__category">Items</li>
        </ul>
  	</sidebar>
  	
  	<div class="l-app__content">
  		<header class="l-app__topbar">
  			<navbar />
  		</header>
  		<div class="l-app__body">
  			<main id="main" class="l-app__main" role="main">
  				<child/>
  			</main>
  		</div>
  	</div>

  </div>
</template>

<script>
import Navbar from '../components/AdminNavbar'

export default {
  name: 'AdminLayout',
  components: {
  	Navbar
  }
}
</script>

<style lang="scss" src="../scss/cover.scss">
</style>
<style src="../icomoon/icomoon.css">
</style>