<template>
  <div>
    <section v-for="article in this.articles" v-bind:key="article.slug">
      <article-preview :image="article.header_image" :title="article.title" :description="article.description" :slug="article.slug" />
    </section>
    <!-- <div class="section">
      <div class="columns">
        <div class="column is-full has-text-centered">
          <div class="box transparent">
            <div class="columns has-text-centered is-multiline">
               <div v-for="(posts, index) in this.getChunks(this.articles, 3)" v-bind:key="index" class="column">
                  <div v-for="post in posts" v-bind:key="post.slug">
                      <article-preview :image="post.header_image" :title="post.title" :description="post.description" :slug="post.slug" />
                  </div>
              </div>
            </div> 

            <div class="box">
              <div class="notification has-background-black">
                <h3 class="has-text-white">LOAD MORE...</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> -->

    <!-- <section v-for="post in articles" v-bind:key="post.slug" class="hero">
      <div class="hero-body">
        <div class="container">
          <div class="columns">
            <div class="column is-8 is-offset-2">
              <figure class="image is-16by9">
                <img :src="getURL(post.header_image.url).href" :alt="post.name" />
              </figure>
            </div>
          </div>

          <section class="section">
            <div class="columns">
              <div class="column is-8 is-offset-2">
                <div class="content is-medium">
                  <h2 class="subtitle is-4">{{ moment(post.published_at).format("MMMM Do, YYYY") }}</h2>
                  <router-link :to="{path: `/blog/${post.slug}`}" :key="post.slug">
                    <h1 class="title">{{post.title}}</h1>
                  </router-link>
                  <p v-if="post.description">{{post.description}}</p>
                </div>
              </div>
            </div>
          </section>

          <div class="is-divider"></div>
        </div>
      </div>
    </section> -->
  </div>
</template>

<script>
import gql from "graphql-tag";
const moment = require("moment");
import ArticlePreview from '../components/Blog/ArticlePreview.vue'

export default {
  name: "Blog",
  data() {
    return {
      articles: [],
      moment: moment
    };
  },
  components: {
    ArticlePreview
  },
  computed: {
    columnSplit() {
      if (this.articles) return this.getChunks(this.articles, 3)
      return []
    }
  },
  apollo: {
    articles: gql`
      query {
        articles {
          title
          category {
            name
          }
          description
          header_image {
            name
            url
            alternativeText
          }
          slug
          published_at
        }
      }
    `
  }
};
</script>
