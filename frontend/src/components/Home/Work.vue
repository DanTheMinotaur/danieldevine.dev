<template>
  <transition name="fade" mode="out-in">
    <article id="work" class="panel">
      <header>
        <h2>Projects</h2>
      </header>
      <p>Check out some things I've made.</p>
      <section>
        <div class="row">
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic01.jpg" alt />
            </a>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic02.jpg" alt />
            </a>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic03.jpg" alt />
            </a>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic04.jpg" alt />
            </a>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic05.jpg" alt />
            </a>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic06.jpg" alt />
            </a>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic07.jpg" alt />
            </a>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic08.jpg" alt />
            </a>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic09.jpg" alt />
            </a>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic10.jpg" alt />
            </a>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic11.jpg" alt />
            </a>
          </div>
          <div class="col-4 col-6-medium col-12-small">
            <a href="#" class="image fit">
              <img src="images/pic12.jpg" alt />
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