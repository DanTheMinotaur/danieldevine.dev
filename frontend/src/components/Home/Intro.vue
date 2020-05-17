<template>
  <!-- Me -->
  <article id="home" class="panel intro">
    <header>
      <h1>Jane Doe</h1>
      <p>Senior Astral Projectionist</p>
    </header>
    <a href="#work" class="jumplink pic">
      <span class="arrow icon solid fa-chevron-right"><span>See my work</span></span>
      <img src="images/me.jpg" alt="" />
    </a>
  </article>
            
</template>

<script>


import gql from "graphql-tag"

export default {  
  name: 'Intro',
  components: {},
  data() {
    return {
      homePage: {},
      currentSection: 'banner'
    }
  },
  apollo: {
    homePage: gql`
      query {
        homePage {
          header,
          sub_header,
          header_image {
            name,
            url,
            alternativeText
          },
          about,
          about_header
        }
      }
    `
  }
}

</script>


