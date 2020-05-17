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
      <transition name="component-fade" mode="out-in">
        <component v-bind:is="currentComponent"></component>
      </transition>
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


.component-fade-enter-active, .component-fade-leave-active {
  transition: opacity 2s ease;
}
.component-fade-enter, .component-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
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

  &:before {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-family: FontAwesome;
    font-style: normal;
    font-weight: normal;
    text-transform: none !important;
  }
}

</style>
