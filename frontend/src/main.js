import Vue from 'vue'
import VueApollo from 'vue-apollo'
import VueRouter from 'vue-router'

import apolloClient from './vue-apollo'

import App from './App.vue'
import gql from 'graphql-tag'

Vue.use(VueApollo)
Vue.use(VueRouter)
Vue.config.productionTip = false
Vue.mixin({
  methods: {
    getURL: url => {
      return new URL(url, process.env.VUE_APP_STRAPI_API_URL)
    },
    capitalize: string => {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }
  }
})
// Vue.component(gql)
// Vue.use(gql)

const apolloProvider = new VueApollo({
  defaultClient: apolloClient
})

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      components: require('./containers/Home.vue')
    },
    {
      path: '/blog',
      components: require('./containers/Blog.vue')
    },
    {
      path: '/blog/:slug',
      components: require('./containers/Article.vue')
    },
    {
      path: '/blog/category/:slug',
      components: require('./containers/Category.vue')
    }
  ],
  linkExactActiveClass: 'active'
})

new Vue({
  apolloProvider,
  router,
  gql,
  render: h => h(App)
}).$mount('#app')
