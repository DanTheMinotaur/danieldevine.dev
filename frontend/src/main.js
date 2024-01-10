import Vue from 'vue'
import VueApollo from 'vue-apollo'
import VueRouter from 'vue-router'

import apolloClient from './vue-apollo'

import App from './App.vue'
import VueLazyLoad from 'vue-lazyload'

import titleMixin from './mixins/title'

import VueSimpleMarkdown from 'vue-simple-markdown'
import 'vue-simple-markdown/dist/vue-simple-markdown.css'
import config from './config/env'

Vue.use(VueApollo)
Vue.use(VueRouter)
Vue.use(VueLazyLoad)
Vue.use(VueSimpleMarkdown)

Vue.config.productionTip = false
Vue.mixin({
  methods: {
    getURL: url => {
      return new URL(url, config.VUE_APP_API_URL)
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
    },
    getAvailableImage: (formats, smallest = false) => {
      let types = ['large', 'medium', 'small', 'thumbnail']
      if (smallest) types = types.reverse()
      for (const size of types) {
        if (size in formats) return formats[size]
      }
    },
    dateToStringMonth (date) {
      return new Date(date).toLocaleDateString(undefined, { month: 'long', year: 'numeric' })
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
      path: '/cv-resume',
      components: require('./components/Home/CV.vue')
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
