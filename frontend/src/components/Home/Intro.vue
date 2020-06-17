<template>
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
      />
    </span>
  </article>
</template>

<script>
import gql from "graphql-tag";

export default {
  name: "Intro",
  components: {},
  data() {
    return {
      homePage: {}
    };
  },
  apollo: {
    homePage: gql(`
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
    `)
  }
};
</script>


