<template>
  <div id="wrapper" v-bind:style="{ width: this.wrapperWidth, transition: 'width .5s' }">
    <!-- Nav -->
    <nav id="nav">
      <router-link :to="{path: '/'}" class="icon solid fa-home" exact><span>Home</span></router-link>
      <router-link v-for="(data, comp) in navComponents"
        v-bind:key="comp"
        v-bind:class="[data.icon]"
        v-on:click.native="updateWidth(data.width)"
        class="icon solid"
        :to="{path: data.link}"
      >
        <span>{{capitalize(comp)}}</span>
      </router-link>
    </nav>

    <!-- Main -->
    <main id="main">
      <transition name="component-fade" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </main>

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

export default {
  name: "App",
  data() {
    return {
      navComponents: {
        work: {
          icon: "fa-folder",
          width: "45em",
          link: '/projects'
        },
        contact: {
          icon: "fa-envelope",
          width: "45em",
          link: '/contact'
        },
        blog: {
          icon: "fa-newspaper-o",
          width: "70em",
          link: '/blog'
        }
      }
    };
  },
  methods: {
    updateWidth(width) {
      console.log('Width Change', width)
      this.wrapperWidth = width;
    }
  }
};
</script>

<style>
@import "./assets/css/font-awesome.min.css";
@import "./assets/css/notifications.css";
/* #wrapper {
  width: 45em;
} */

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.4s ease;
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
