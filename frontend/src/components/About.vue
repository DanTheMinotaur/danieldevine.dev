<template>
    <div class="social column">
        <h3>{{about_header}}</h3>
        <markdown-it-vue  v-if="about" :content="about"/>
        <h3>Follow Me</h3>
        <ul class="icons">
            <li v-for="link in socialMediaLink.links" v-bind:key="link.name" :title="link.name">
                <a :href="link.link" v-bind:class="link.icon" class="icon" target="_blank">
                    <span class="label">{{link.name}}</span>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>

import gql from "graphql-tag"
import MarkdownItVue from 'markdown-it-vue'

export default {  
  name: "About",
  props: ['about', 'about_header'],
  data() {
      return {
          socialMediaLink: []
      }
  },
  components: {
    MarkdownItVue
  },
  apollo: {
    socialMediaLink: gql`
        query {
            socialMediaLink {
                links {
                    name,
                    link, 
                    icon
                }
            }
        }
    `
  }
}
</script>  