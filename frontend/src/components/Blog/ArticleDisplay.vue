<template>
  <article class="tile is-child notification" v-bind:class="colour_class">
    <router-link :to="{path: `/blog/${slug}`}" :key="slug">  
      <p class="title">{{title}}</p>
      <p class="subtitle" v-if="description">{{description}}</p>
      <figure class="image is-4by3">
        <img :src="getURL(image.url).href">
      </figure>
    </router-link>
  </article>
</template>

<script>
export default {
  name: 'ArticleDisplay',
  props: ['slug', 'title', 'image', 'description', 'colour_class']
}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none !important;
    &:hover {
      img {
        transform: scale(1.05);
      }
    }
  }

  img {
    transition: transform .2s;
  }
</style>