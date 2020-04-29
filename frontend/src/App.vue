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

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600");

@media screen and (max-width: 480px) {
  html, body {
    min-width: 320px;
  }
}

.icon {
  text-decoration: none;
  border-bottom: none;
  position: relative;

  &:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
  }

  > .label {
    display: none;
  }
}

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

#main {
  background: #f1f1f1;
  width: 100%;

  #header {
    background: #e6e6e6;
    padding: 1.15em 3.5em;
    text-align: right;

    h1 {
      margin: 0;
      font-size: 1em;
    }
  }
}

@media screen and (max-width: 980px) {
  #main #header {
    padding: 1.15em 2em;
  }
}

@media screen and (max-width: 736px) {
  #main #header {
    text-align: center;
  }
}

</style>
