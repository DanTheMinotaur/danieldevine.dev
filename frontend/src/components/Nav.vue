<template>  
  <nav id="nav">
    <ul>
      <li v-for="link in mainNav.links" v-bind:key="link.link" :title="link.name">
        <router-link :to="link.link">
            <span v-bind:class="link.icon" class="icon"></span>
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>  
import gql from "graphql-tag"

export default {  
  name: "Nav",
  data() {
    return {
      mainNav: []
    }
  },
  apollo: {
    mainNav: gql`
      query MainNav {
        mainNav {
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
