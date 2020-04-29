<template>  
  <div id="app">
    <div class="page-wrap">
      <Nav />
      <section id="main">
        <router-view :key="$route.fullPath"></router-view>
        <Footer />
      </section>
    </div>
  </div>
</template>

<script>

import Nav from "./components/Nav.vue"
import Footer from './components/Footer.vue'

export default {
  name: "App",
  components: { Nav, Footer }
};
</script>

<style>
  @import './assets/css/font-awesome.min.css';
</style>

<style scoped>
	.page-wrap {
		display: -ms-flexbox;
		display: -moz-flex;
		display: -webkit-flex;
		display: -ms-flex;
		display: flex;
		-moz-flex-wrap: nowrap;
		-webkit-flex-wrap: nowrap;
		-ms-flex-wrap: nowrap;
		flex-wrap: nowrap;
		-moz-justify-content: -moz-flex-start;
		-webkit-justify-content: -webkit-flex-start;
		-ms-justify-content: -ms-flex-start;
		justify-content: flex-start;
  }

</style>
