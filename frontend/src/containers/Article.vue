<template>
  <article id="blog">
    <section class="post">
      <header class="major">
        <span class="date">{{moment(article.published_at).format("MMMM Do, YYYY")}}</span>
        <h1>{{article.title}}</h1>
        <p v-if="article.description">{{article.description}}</p>
      </header>
      <div class="image main" v-if="article.header_image">
        <img :src="getURL(article.header_image.url).href" />
      </div>
      <vue-simple-markdown :source="article.content" v-if="article.content" ></vue-simple-markdown>
    </section>
  </article>
</template>

<script>
import gql from 'graphql-tag'
const moment = require('moment')

export default {
  title() {
    return this.article.title
  },
  data() {
    return {
      articles: {},
      routeParam: this.$route.params.slug,
      moment: moment
    }
  },
  components: {},
  computed: {
    article() {
      return this.articles && this.articles.length > 0 ? this.articles[0] : {};
    }
  },
  apollo: {
    articles: {
      query: gql`
        query Article($slug: String!) {
          articles(where: { slug: $slug }) {
            slug
            title
            content
            description
            header_image {
              url
            }
            published_at
          }
        }
      `,
      variables() {
        return {
          slug: this.routeParam
        }
      }
    }
  }
};
</script>
