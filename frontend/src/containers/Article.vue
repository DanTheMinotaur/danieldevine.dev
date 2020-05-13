<template>  
    <transition name="fade">
      <div> <!-- TODO Background Colour genertation -->
        <blog-header :title="article.title" :background_colour="'black'" :datePosted="article.published_at" />
        <hr>

        <article class="container">
          <div class="columns">
          <div class="column is-full">
            <div class="card article">
              <div class="card-content">
                  <div class="media">
                      <div class="media-content has-text-centered">
                        <hr>
                        <div v-if="article.description">
                          <p class="title article-title">{{article.description}}</p>
                          <hr>
                        </div>
                        <figure class="image">
                          <img :src="getURL(article.header_image.url).href" v-if="article.header_image"/>
                        </figure>
                        <hr>
                      </div>
                  </div>
                  <markdown-it-vue v-if="article.content" class="content article-body" :content="article.content" />
              </div>
            </div>
          </div>
          </div>
        </article>

      </div>
      </transition>
</template>

<script>
import MarkdownItVue from 'markdown-it-vue'
import 'markdown-it-vue/dist/markdown-it-vue.css'
import gql from "graphql-tag"
import BlogHeader from "../components/Blog/BlogHeader.vue"

export default {  
  data() {
    return {
      articles: {},
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
        };
      }
    }
  }
};
</script>

<style lang="scss" scoped>

.image {
  background-color: black;
  img {
    height: auto;
    width: auto;
    max-height: 30rem;
    margin: auto;
  }
}


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
