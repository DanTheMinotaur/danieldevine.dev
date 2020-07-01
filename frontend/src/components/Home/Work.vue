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
                :src="getURL(project.main_image.formats.large.url).href"
                :alt="project.main_image.alternativeText"
              />
            </router-link>
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
    };
  },
  apollo: {
    projects: {
      query: gql`
        query {
          projects {
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
};
</script>

<style lang="css" scoped>
.label {
  display: block;
  position: absolute;
  background: #222222;
  color: #ffffff;
  top: -2.75em;
  font-size: 0.3em;
  height: 2.25em;
  line-height: 2.25em;
  left: 50%;
  opacity: 0;
  transition: opacity 0.25s ease-in-out;
  width: 5.5em;
  margin-left: -2.75em;
}
</style>