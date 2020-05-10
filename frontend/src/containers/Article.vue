<template>  
  <div>
    <blog-header :title="article.title" :image="article.header_image" />
    <hr>
    <article class="container">
      <div class="columns">
      <div class="column is-full">
        <div class="card article">
          <div class="card-content">
              <div class="media">
                  <div class="media-content has-text-centered">
                      <p class="title article-title">{{article.description}}</p>
                      <hr>
                      <div class="tags has-addons level-item">
                          <span class="tag is-rounded">{{ moment(article.published_at).format("MMMM Do, YYYY") }}</span>
                      </div>
                  </div>
              </div>
              <markdown-it-vue v-if="article.content" class="content article-body" :content="article.content" />
          </div>
        </div>
      </div>
      </div>
    </article>
  </div>
</template>

<script>  
const moment = require("moment")
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import gql from "graphql-tag"
import BlogHeader from "../components/Blog/BlogHeader.vue"

export default {  
  data() {
    return {
      articles: {},
      moment: moment,
      routeParam: this.$route.params.slug
    };
  },
  components: {
    MarkdownItVue,
    BlogHeader
  },
  computed: {
    article() {
      return this.articles && this.articles.length > 0 ? this.articles[0] : {}
    },
    headerImage() {
      return {'background-image': `url(${this.getURL(this.article.header_image.url).href})`}
    }
  },
  apollo: {
    articles: {
      query: gql`
        query Article($slug: String!){
          articles(where: {slug: $slug}) {
            slug,
            title
            content
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
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>
hr {
    background-color: #f5f5f5;
    border: none;
    display: block;
    height: 2px;
    margin: 1.5rem 0;
}

.markdown-body {
  font-size: 2rem;
  padding: 2%;
}

.container {
  max-width: 1744px;
}
</style>
