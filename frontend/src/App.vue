<template>
  <div id="wrapper" v-bind:style="{ width: wrapperWidth, transition: 'width .5s' }">
    <nav id="nav">
      <router-link :to="{path: '/'}" class="icon solid fa-home" exact>
        <span>Home</span>
      </router-link>
      <router-link
        v-for="(data, comp) in navComponents"
        v-bind:key="comp"
        v-bind:class="[data.icon]"
        class="icon solid"
        :to="{path: data.link}"
      >
        <span>{{capitalize(comp)}}</span>
      </router-link>
      <a
        v-for="link in mediaLinks"
        v-bind:key="link.name"
        v-bind:class="[link.icon]"
        class="icon solid social"
        v-bind:href="link.link"
        target="_blank"
        v-bind:style="{ color: link.color}"
      >
        <span>{{capitalize(link.name)}}</span>
      </a>

    </nav>

    <main id="main">
      <transition name="component-fade" mode="out-in">
        <router-view :key="$route.fullPath"></router-view>
      </transition>
    </main>
  </div>
</template>

<script>
import './assets/css/main.css'

export default {
  name: 'App',
  data () {
    return {
      navComponents: {
        work: {
          icon: 'fa-folder',
          width: '45em',
          link: '/projects'
        },
        blog: {
          icon: 'fa-newspaper-o',
          width: '70em',
          link: '/blog'
        },
        contact: {
          icon: 'fa-envelope',
          width: '45em',
          link: '/contact'
        }
      },
      mediaLinks: [
        {
          name: 'Twitter',
          link: 'https://twitter.com',
          icon: 'fa-twitter',
          color: '#1DA1F2'
        },
        {
          name: 'Instagram',
          link: 'https://instagram.com',
          icon: 'fa-instagram',
          color: '#3f729b'
        },
        {
          name: 'GitHub',
          link: 'https://github.com/DanTheMinotaur/',
          icon: 'fa-github',
          color: '#111111'
        }
      ],
      wrapperWidth: '45em'
    }
  },
  watch: {
    $route () {
      if (this.$route.path.startsWith('/blog')) {
        this.updateWidth('65em')
      } else {
        this.updateWidth('45em')
      }
    }
  },
  methods: {
    updateWidth (width) {
      this.wrapperWidth = width
    }
  }
}
</script>

<style>
@import "./assets/css/font-awesome.min.css";
@import "./assets/css/notifications.css";

.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 0.4s ease;
}
.component-fade-enter,
.component-fade-leave-to {
  opacity: 0;
}
</style>

<style lang="scss" scoped>
.social {
  font-size: 2.1em !important;
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
