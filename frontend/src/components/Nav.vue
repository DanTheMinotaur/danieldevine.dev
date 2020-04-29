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

<style lang="scss" scoped>

#nav {
  background: #0d1217;
  z-index: 10002;
  position: relative;
  width: 4em;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    position: fixed;
    top: 1em;
    left: 0;

    li {
      padding: 0;
      width: 3.75em;
      text-align: Center;
      margin-bottom: 1em;

      a {
        color: rgba(255, 255, 255, 0.5);
        text-decoration: none;
        font-size: 1.5em;

        &:hover {
          color: white;
        }

        &.active {
          color: #19B5FE;
        }
      }
    }
  }
}

@media screen and (max-width: 736px) {
  #nav ul li {
    width: 3.4em;
  }
}
</style>