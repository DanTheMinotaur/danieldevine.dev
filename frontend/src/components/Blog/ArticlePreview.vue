<template>
  <article>
    <header>
      <span class="date">{{ moment(published).format("MMMM Do, YYYY") }}</span>
      <h2>
        <router-link :to="{path: `/blog/${slug}`}" :key="slug">
          {{title}}
        </router-link>
      </h2>
    </header>
    <router-link :to="{path: `/blog/${slug}`}" :key="slug" class="image fit">
      <img :src="getURL(image.url).href" :alt="image.alternativeText" v-if="image"/>
    </router-link>
    <p v-if="description">{{description}}</p>
    <ul class="actions special">
      <li>
        <router-link :to="{path: `/blog/${slug}`}" :key="slug"  class="button">Read More</router-link>
      </li>
    </ul>
  </article>
</template>

<script>
const moment = require("moment")

export default {
  name: "ArticlePreview",
  props: ["image", "title", "description", "slug", 'published'],
  data() {
    return {
      moment: moment,
    }
  },
}
</script>

<style lang="scss" scoped>

</style>