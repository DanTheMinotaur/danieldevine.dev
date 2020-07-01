<template>
  <div>
    <article id="home" class="panel intro">
      <header>
        <h1>{{homePage.header}}</h1>
        <p>{{homePage.sub_header}}</p>
      </header>
      <span class="jumplink pic">
        <router-link :to="{path: 'projects'}" class="arrow icon solid fa-chevron-right">
          <span>See my work</span>
        </router-link>
        <img
          :src="getURL(homePage.profile_image.url)"
          :alt="homePage.alternativeText"
          :title="homePage.name"
          v-if="homePage.profile_image"
        />
      </span>
    </article>
    <aside>
      <h2>Things I Do</h2>
      <section v-for="(group, i) in techGroups" :key="i">
        <div class="con">
          <hr>
          <h3>{{group.name}}</h3>
        </div>
        <TechnologiesBar :icons="group.technologies"/>
      </section>
    </aside>
  </div>
</template>

<script>
import gql from 'graphql-tag'
import TechnologiesBar from './Technologies.vue'

export default {
  name: 'Intro',
  title: 'Home',
  components: {
    TechnologiesBar
  },
  data() {
    return {
      homePage: {},
      techGroups: []
    }
  },
  apollo: {
    homePage: gql`
      query {
        homePage {
          header
          sub_header
          profile_image {
            url
            name
            alternativeText
          }
        }
      }
    `,
    techGroups: gql`
      query {
        techGroups {
          name
          technologies {
            name
            image_icon {
              formats
            }
          }
        }
      }
    `
  }
};
</script>

<style lang="scss" scoped>
  aside {
    text-align: center;
    margin-top: 8%;

    h2 {
      margin: 3% 0;
    }

    .con {
      width: 90%;
      margin: auto auto 1em auto;
    }

    section {
      h3 {

        letter-spacing: -0.015em;
        font-size: 1.25em;
        margin: 0.25em 0 0 0;
        color: #aaa;
      }
    }
  }
</style>