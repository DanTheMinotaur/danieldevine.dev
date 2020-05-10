<template>
  <div><section class="hero is-info is-bold" v-bind:style="headerImage" v-if="image">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">{{title}}</h1>
      </div>
    </div>

  </section>
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li v-for="crumb in breadCrumbs()" v-bind:key="crumb">
          <router-link :to="{path: crumb}" :key="crumb">
            {{capitalize(slugToText(crumb))}}
          </router-link>
        </li>
        </ul>
      </nav>
  </div>
</template>

<script>
export default {
  name: "BlogHeader",
  props: ['image', 'title'], 
  computed: {
    headerImage() {
      return {'background-image': `url(${this.getURL(this.image.url).href})`}
    }
  },
  methods: {
    breadCrumbs() {
      return this.$route.path.split('/').filter(Boolean)
    },
    slugToText(slug) {
      return slug.replace(/-/g, ' ')
    }
  }
}
</script>

<style lang="scss" scoped>
  .breadcrumb {
    margin-left: 3em;
    margin-top: 1em;
  }
</style>
