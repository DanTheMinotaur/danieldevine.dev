<template>
  <transition name="fade" mode="out-in">
    <article id="work" class="panel">
      <header>
        <h2>Projects</h2>
      </header>
      <p>Check out some things I've made.</p>
      <section v-if="projects[0]">
        <div class="row">
          <div v-for="project in projects[0]['project']" v-bind:key="project.id" class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img :src="getURL(project.main_image.formats.large.url).href" :alt="project.main_image.alternativeText" />
            </a>
          </div>
        </div>
      </section>
    </article>
  </transition>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data() {
    return {
      projects: []
    }
  },
  apollo: {
    projects: {
      query: gql`
        query {
          projects {
            project {
              id
              title
              main_image {
                formats
                alternativeText
              }
            }
          }
        }
      `
    }
  }
}
</script>