<template>
    <section id="galleries">
        <div class="gallery">
            <header class="special">
                <h2>What's New</h2>
            </header>
            <div class="content">
                <div v-for="g in galleries" v-bind:key="g.id" :title="g.name" class="media">
                    <router-link :to="g.link">
                        <img :src="apiUrl + g.image.url" :alt="g.image.alternateText" :title="g.image.caption" />
                    </router-link>
                </div>
            </div>
            <footer>
                <a href="gallery.html" class="button big">Full Gallery</a>
            </footer>
        </div>
    </section>
</template>

<script>  
import gql from "graphql-tag"

export default {  
  name: "Gallery",
  data() {
    return {
      apiUrl: process.env.VUE_APP_STRAPI_API_URL,
      galleryItems: []
    }
  },
  apollo: {
    galleries: gql`
        query galleries {
        galleries(limit:8) {
            id,
            name,
            link,
            image {
                url,
                caption,
                alternativeText
            }
        }
    }
    `
  }
}
</script>