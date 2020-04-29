<template>
    <div>
        <Banner :homePage="homePage" />
        <Gallery />
        <section id="contact">
          <ContactForm />
          <About :about="homePage.about" :about_header="homePage.about_header"/>
        </section> 
    </div>
</template>

<script>

import Banner from "../components/Banner.vue"
import Gallery from '../components/Gallery.vue'
import ContactForm from '../components/ContactForm.vue'
import About from '../components/About.vue'

import gql from "graphql-tag"

export default {  
  name: 'Home',
  components: {
    Banner,
    Gallery,
    ContactForm,
    About
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


