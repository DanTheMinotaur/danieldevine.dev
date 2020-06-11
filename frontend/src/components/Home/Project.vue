<template>
  <article>
    <section class="panel intro">
      <a v-bind:href="project.link" class="jumplink pic" target="_blank" v-if="project.main_image">
        <span class="arrow icon solid fa-external-link">
          <span>See my work</span>
        </span>
        <img
          :src="getURL(project.main_image.formats.large.url).href"
          :alt="project.main_image.alternativeText"
        />
        <!-- <img src="images/me.jpg" alt /> -->
      </a>
      <header>
        <h1>{{project.title}}</h1>
      </header>
    </section>
    <section>
      <markdown-it-vue v-if="project.description" :content="project.description" />
    </section>
    <Gallery :title="project.title" :images="project.gallery" v-if="project.gallery" />
  </article>
</template>

<script>
import gql from "graphql-tag";
import MarkdownItVue from "markdown-it-vue";
import Gallery from "./Gallery.vue";
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

export default {
  data() {
    return {
      projects: {},
      routeParam: this.$route.params.slug,
      showLightBox: false,
      imageList: [
        {
          // For image
          thumb:
            "https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/thumb-6.jpg",
          src:
            "https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/image-6-lg.jpg",
          caption: "caption to display. receive <html> <b>tag</b>" // Optional
          // srcset: "..." // Optional for displaying responsive images
        },
        {
          // For image
          thumb:
            "https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/thumb-12.jpg",
          src:
            "https://dzine.io/products/lightgallery-wp-plugin/static/images/demo/image-12-lg.jpg",
          caption: "caption to display. receive <html> <b>tag</b>" // Optional
          // srcset: "..." // Optional for displaying responsive images
        }
      ]
    };
  },
  components: {
    MarkdownItVue,
    Gallery
  },
  computed: {
    project() {
      return this.projects && this.projects.length > 0 ? this.projects[0] : {};
    }
  },
  apollo: {
    projects: {
      query: gql`
        query Project($slug: String!) {
          projects(where: { slug: $slug }) {
            title
            description
            link
            main_image {
              formats
              alternativeText
            }
            gallery {
              id
              name
              alternativeText
              url
              formats
              caption
            }
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
.markdown-body {
  letter-spacing: -0.015em;
  font-size: 1.9rem;
  margin: 0.25em 0 0 0;
  color: #aaa;
  padding: 3rem;
  text-align: center;
}
</style>