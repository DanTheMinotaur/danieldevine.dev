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
      <h2>Things I can do</h2>
      <section>
        <p>Here is some content</p>
        <TechnologiesBar :icons="testD"/>
      </section>
    </aside>
  </div>
</template>

<script>
import gql from "graphql-tag";
import TechnologiesBar from './Technologies.vue'

export default {
  name: "Intro",
  components: {
    TechnologiesBar
  },
  data() {
    return {
      homePage: {},
      testD: [
          {
            "name": "Google Firebase",
            "image_icon": {
              "url": "/uploads/logo_firebase_icon_cae9049b5a.svg"
            }
          },
          {
            "name": "JavaScript",
            "image_icon": {
              "url": "/uploads/kissclipart-js-icon-png-clipart-javascript-computer-icons-aac591a39aab9a64_d35e735f69.png"
            }
          },
          {
            "name": "Python",
            "image_icon": {
              "url": "/uploads/python-logo_37d479eb41.png"
            }
          }
        ]
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
    `
  }
};
</script>


