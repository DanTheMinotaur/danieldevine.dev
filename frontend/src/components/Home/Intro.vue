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


<style lang="scss" scoped>
#contact {
  display: -ms-flexbox;
  -ms-flex-pack: justify;
  display: -moz-flex;
  display: -webkit-flex;
  display: -ms-flex;
  display: flex;
  -moz-flex-wrap: wrap;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -moz-justify-content: space-between;
  -webkit-justify-content: space-between;
  -ms-justify-content: space-between;
  justify-content: space-between;
  background: #ececec;

  form {
    margin: 0;
  }

  .icons {
    margin-bottom: 1em;
  }

  .column {
    padding: 3.5em 0 1.5em 0;
    padding-left: 3.5em;
    padding-right: 3.5em;
    width: 50%;

    &.social {
      background: #e6e6e6;
    }
  }
}

@media screen and (max-width: 980px) {
  #contact .column {
    padding: 2em 0 0.1em 0;
    padding-left: 2em;
    padding-right: 2em;
  }
}

@media screen and (max-width: 736px) {
  #contact .column {
    width: 100%;
  }
}

@media screen and (max-width: 480px) {
  #contact .column {
    padding: 1em 0 0.1em 0;
    padding-left: 1em;
    padding-right: 1em;
  }
}
</style>