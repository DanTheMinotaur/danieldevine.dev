<template>
  <div id="wrapper">
    <!-- Nav -->
    <nav id="nav">
      <a
        v-for="(data, comp) in navComponents"
        v-bind:key="comp"
        v-bind:class="[data.icon, { active: currentComponent == comp }]"
        v-on:click="currentComponent = comp"
        class="icon solid"
      >
        <span>{{capitalize(comp)}}</span>
      </a>
    </nav>

    <!-- Main -->
    <div id="main">
      <component v-bind:is="currentComponent" v-if="currentComponent"></component>
    </div>

    <!-- Footer -->
    <div id="footer">
      <ul class="copyright">
        <li>&copy; Untitled.</li>
        <li>
          Design:
          <a href="http://html5up.net">HTML5 UP</a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import "./assets/css/main.css";
import Intro from "./components/Home/Intro.vue";
import Work from "./components/Home/Work.vue";
import Contact from './components/Home/Contact.vue'

export default {
  name: "App",
  data() {
    return {
      currentComponent: "intro",
      navComponents: {
        intro: {
          icon: "fa-home"
        },
        work: {
          icon: "fa-folder"
        },
        contact: {
          icon: 'fa-envelope'
        }
      }
    };
  },
  components: {
    intro: Intro,
    work: Work,
    contact: Contact
  },
  computed: {
    currentDisplayComponent() {
      return this.currentComponent;
    }
  }
};
</script>

<style>
@import "./assets/css/font-awesome.min.css";
body.is-preload #wrapper {
  opacity: 1;
}
</style>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Nunito+Sans:300,400,600");

@media screen and (max-width: 480px) {
  html,
  body {
    min-width: 320px;
  }
}

// Vue Transitions

.tray-enter,
.tray-leave-to {
  opacity: 0;
}

.tray-leave,
.tray-enter-to {
  opacity: 1;
}

.tray-enter-active,
.tray-leave-active {
  transition: opacity 10000ms;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slither-enter-active,
.slither-leave-active {
  transition: transform 1s;
}

.slither-enter,
.slither-leave-to {
  transform: translateX(-100%);
}

.slither-enter-to,
.slither-leave {
  transform: translateX(0);
}

.drain-enter-active,
.drain-leave-active {
  transition: transform 1s;
}

.drain-enter,
.drain-leave-to {
  transform: translateY(100%);
}

.drain-enter-to,
.drain-leave {
  transform: translateY(0);
}

.no-hover {
  pointer-events: none;
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
