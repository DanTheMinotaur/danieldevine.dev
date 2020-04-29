<template>
    <section class="hero is-info is-medium is-bold" v-bind:style="headerImage" v-if="image">
      <div class="hero-body">
          <div class="container has-text-centered">
              <h1 class="title">{{title}}</h1>
          </div>
      </div>
  </section>
</template>

<script>
export default {
  name: "BlogHeader",
  props: ['image', 'title'], 
  computed: {
    headerImage() {
      return {'background-image': `url(${this.getURL(this.image.url).href})`}
    }
  }
}
</script>