<template>
  <div>
    <section class="hero is-success" >
      <div class="hero-body">
          <h1 class="title">{{title}} <span v-if="datePosted" class="button is-rounded is-primary is-light no-hover">Date Posted: {{ moment(datePosted).format("MMMM Do, YYYY") }}</span></h1>
      </div>
    </section>
  </div>
</template>

<script>
const moment = require("moment")

export default {
  name: "BlogHeader",
  props: ['title', 'datePosted', 'background_colour'], 
  data() {
    return {
      moment: moment,
    }
  },
  computed: {
    headerImage() {
      return {'background-image': `url(${this.getURL(this.image.url).href})`}
    },
    backgroundColour() {
      if (this.backgroundColour) {
        return {'background-color': this.background_colour}
      }
      return {}
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
  .hero-body {
    margin-left: 1%;

    h1 span {
      float: right;
      margin-right: 3%;
    }
  }
</style>