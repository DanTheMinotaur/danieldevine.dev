<template>
  <div>
    <section class="hero is-info is-bold" v-bind:style="headerImage" v-if="image">
      <div class="hero-body">
          <h1 class="title">{{title}}</h1>
      </div>
    </section>
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

<style lang="scss" scoped>
  .hero-body {
    margin-left: 1%;
  }
</style>