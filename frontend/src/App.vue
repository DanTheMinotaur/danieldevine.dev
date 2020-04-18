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
