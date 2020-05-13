<template>
    <div class="social column has-text-centered">
        <h3 class="title">{{about_header}}</h3>
        <markdown-it-vue  v-if="about" :content="about" class="has-text-light"/>
        <h3 class="subtitle">Follow Me</h3>
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
<style lang="scss" scoped>

ul {
  list-style: disc;
  margin: 0 0 2em 0;
  padding-left: 1em;

  li {
    padding-left: 0.5em;
  }

  &.icons {
    cursor: default;
    list-style: none;
    padding-left: 0;

    li {
      display: inline-block;
      padding: 0 1em 0 0;

      &:last-child {
        padding-right: 0;
      }

      .icon:before {
        font-size: 2em;
      }
    }
  }
}
</style>