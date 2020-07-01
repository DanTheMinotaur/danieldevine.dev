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
      </a>
      <header>
        <h1>{{project.title}}</h1>
      </header>
    </section>
    <TechnologiesBar :icons="project.technologies"/>
    <section>
      <markdown-it-vue v-if="project.description" :content="project.description" />
    </section>
    <Gallery :title="project.title" :images="project.gallery" v-if="project.gallery && project.gallery.length" />
  </article>
</template>

<script>
import gql from 'graphql-tag'
import MarkdownItVue from 'markdown-it-vue'
import Gallery from './Gallery.vue'
require('vue-image-lightbox/dist/vue-image-lightbox.min.css')
import TechnologiesBar from './Technologies.vue'

export default {
  title() {
    return this.project.title
  },
  data() {
    return {
      projects: {},
      routeParam: this.$route.params.slug
    }
  },
  components: {
    MarkdownItVue,
    Gallery,
    TechnologiesBar
  },
  computed: {
    project() {
      return this.projects && this.projects.length > 0 ? this.projects[0] : {}
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
            technologies {
              name
              image_icon {
                formats
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