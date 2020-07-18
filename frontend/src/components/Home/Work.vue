<template>
  <transition name="fade" mode="out-in">
    <article id="work" class="panel">
      <header>
        <h2>Projects</h2>
      </header>
      <p>Check out some things I've made.</p>
      <section v-if="projects">
        <div class="row">
          <div
            v-for="project in projects"
            v-bind:key="project.id"
            class="col-4 col-6-medium col-12-small"
          >
            <router-link
              :to="{path: `/projects/${project.slug}`}"
              :key="project.slug"
              class="image fit"
            >
              <img
                :src="getURL(getAvailableImage(project.main_image.formats).url).href"
                :alt="project.main_image.alternativeText"
                :v-if="project.main_image"
              />
            </router-link>
            <router-link
              :to="{path: `/projects/${project.slug}`}"
              :key="project.slug"
              class="display"
            >{{project.title}}</router-link>
          </div>
        </div>
      </section>
    </article>
  </transition>
</template>

<script>
import gql from 'graphql-tag'

export default {
  title: 'Projects',
  data() {
    return {
      projects: []
    }
  },
  apollo: {
    projects: {
      query: gql`
        query {
          projects (sort: "priority:ASC") {
            title
            slug
            main_image {
              formats
              alternativeText
            }
          }
        }
      `
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  img {
    -moz-transition: -moz-transform 0.2s ease-in-out;
    -webkit-transition: -webkit-transform 0.2s ease-in-out;
    -ms-transition: -ms-transform 0.2s ease-in-out;
    transition: transform 0.2s ease-in-out;
  }

  &:hover img {
    -moz-transform: scale(1.075);
    -webkit-transform: scale(1.075);
    -ms-transform: scale(1.075);
    transform: scale(1.075);
  }
}

.row {
  text-align: center;
  font-size: 1rem;

  a {
    text-decoration: none;
  }
  
}
</style>
