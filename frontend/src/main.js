import Vue from 'vue'
import VueApollo from 'vue-apollo'
import VueRouter from 'vue-router'

import apolloClient from './vue-apollo'

import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'

import titleMixin from './mixins/title'

Vue.use(VueApollo)
Vue.use(VueRouter)
Vue.use(VueLazyLoad)

Vue.config.productionTip = false
Vue.mixin({
  methods: {
    getURL: url => {
      return new URL(url, process.env.VUE_APP_API_URL)
    },
    capitalize: string => {
      return string.charAt(0).toUpperCase() + string.slice(1)
    },
    getChunks: (arr, chunkSize) => {
      return arr.reduce((all, one, i) => {
        const ch = Math.floor(i / chunkSize)
        all[ch] = [].concat((all[ch] || []), one)
        return all
      }, [])
    }
  }
})
Vue.mixin(titleMixin)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: require('./components/Home/Intro.vue')
    },
    {
      path: '/contact',
      components: require('./components/Home/Contact.vue')
    },
    {
      path: '/projects',
      components: require('./components/Home/Work.vue')
    },
    {
      path: '/projects/:slug',
      components: require('./components/Home/Project.vue')
    },
    {
      path: '/blog',
      components: require('./containers/Blog.vue')
    },
    {
      path: '/blog/:slug',
      components: require('./containers/Article.vue')
    },
    // {
    //   path: '/blog/category/:slug',
    //   components: require('./containers/Category.vue')
    // }
  ],
  linkActiveClass: 'active'
})

new Vue({
  apolloProvider,
  router,
  render: h => h(App)
}).$mount('#app')
