<template>  
  <div>
    <blog-header :title="category.name" :image="category.image.url" v-if="category.image" />
    <div class="column">
      <section v-for="(section, index) in categoryArticlesSplit" v-bind:key="index"  class="tile is-ancestor">
        <div v-for="(article) in section" v-bind:key="article.slug" class="tile is-parent">
          <ArticleDisplay 
          :title="article.title" 
          :slug="article.slug" 
          :image="article.header_image" 
          :description="article.description" 
          :colour_class="randomColourClass()"/>
        </div>
      </section>
    </div>
  </div>
</template>

<script>  
// import ArticlesList from "../components/ArticlesList";  
import gql from "graphql-tag"
import BlogHeader from "../components/Blog/BlogHeader.vue"
import ArticleDisplay from '../components/Blog/ArticleDisplay.vue'

export default {  
  data() {
    return {
      categories: [],
      routeParam: this.$route.params.slug
    }
  },
  computed: {
    category() {
      return this.categories && this.categories.length > 0 ? this.categories[0]: {}
    },
    categoryArticlesSplit() {
      const category = this.category
      console.log({category})
      if (Object.keys(category).length > 0) return [
        category.articles.slice(0, 3),
        category.articles.slice(3, 7),
        category.articles.slice(7, 11)
      ]
      return {}
    }
  },
  methods: {
    getColourClass(index) {
      index++
      let css_class = 'is-primary'
      if (index % 2 === 0) {
        css_class = 'is-danger'
      } else if (index % 3 === 0) {
        css_class = 'is-success'
      }
      console.log({css_class})
      return css_class
    },
    randomColourClass() {
      const classes = ['is-primary', 'is-link', 'is-info', 'is-success', 'is-warning', 'is-danger']
      const choice = classes[Math.floor((Math.random() * classes.length))]
      console.log({choice})
      return choice
    }
  },
  components: {
    BlogHeader,
    ArticleDisplay
  },
  apollo: {
    categories: {
      query: gql`
        query Category($slug: String!) {
          categories(where: {slug: $slug}) {
            slug
            name
            image { url }
            articles {
              slug
              title
              description
              header_image {
                url,
                alternativeText
              }
            }
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