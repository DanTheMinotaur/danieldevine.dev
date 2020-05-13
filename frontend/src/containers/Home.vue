<template>
    <div>
        <Banner :homePage="homePage" />
        <Gallery />
        <Contact :homePage="homePage" />
        <section id="contact">
          <ContactForm />
          <About :about="homePage.about" :about_header="homePage.about_header"/>
        </section> 
    </div>
</template>

<script>

import Banner from "../components/Home/Banner.vue"
import Gallery from '../components/Home/Gallery.vue'
import Contact from '../components/Home/Contact.vue'
// import ContactForm from '../components/ContactForm.vue'
// import About from '../components/Home/About.vue'

import gql from "graphql-tag"

export default {  
  name: 'Home',
  components: {
    Banner,
    Gallery,
    Contact
  },
  data() {
    return {
      homePage: {},
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