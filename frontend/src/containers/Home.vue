<template>
    <div>
        <Banner />
        <Gallery />
        <Contact />
    </div>
</template>

<script>

import Banner from "../components/Banner.vue"
import Gallery from '../components/Gallery.vue'
import Contact from '../components/Contact.vue'

export default {  
  name: 'Home',
  components: {
    Banner,
    Gallery,
    Contact
  }
}

</script>

