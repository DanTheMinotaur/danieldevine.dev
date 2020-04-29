<template>
    <section id="galleries">
        <div class="gallery">
            <header class="special">
                <h2 class="title">What's New</h2>
            </header>
            <div class="content">
                <div v-for="g in galleries" v-bind:key="g.id" :title="g.name" class="media">
                    <router-link :to="g.link">
                        <img :src="getURL(g.image.url).href" :alt="g.image.alternateText" :title="g.image.caption" />
                    </router-link>
                </div>
            </div>
            <footer>
                <a href="gallery.html" class="button large is-danger">Full Gallery</a>
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

<style lang="scss" scoped>

@-moz-keyframes gallery {
  100% {
    opacity: 1;
  }
}

@-webkit-keyframes gallery {
  100% {
    opacity: 1;
  }
}

@-ms-keyframes gallery {
  100% {
    opacity: 1;
  }
}

@keyframes gallery {
  100% {
    opacity: 1;
  }
}

.gallery {
  padding: 3.5em;
  position: relative;
  overflow: hidden;
  min-height: 37em;

  header {
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

    &.special {
      -moz-justify-content: center;
      -webkit-justify-content: center;
      -ms-justify-content: center;
      justify-content: center;
    }
  }

  footer {
    text-align: center;
    margin-top: 4em;
  }

  .content {
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: -ms-flex;
    display: flex;
    -moz-flex-wrap: wrap;
    -webkit-flex-wrap: wrap;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -moz-justify-content: -moz-flex-start;
    -webkit-justify-content: -webkit-flex-start;
    -ms-justify-content: -ms-flex-start;
    justify-content: flex-start;

    .media {
      -moz-animation: gallery 0.75s ease-out 0.4s forwards;
      -webkit-animation: gallery 0.75s ease-out 0.4s forwards;
      -ms-animation: gallery 0.75s ease-out 0.4s forwards;
      animation: gallery 0.75s ease-out 0.4s forwards;
      margin-bottom: 0;
      overflow: hidden;
      opacity: 0;
      position: relative;
      width: 25%;

      a {
        display: block;
      }

      img {
        -moz-transition: -moz-transform 0.2s ease-in-out;
        -webkit-transition: -webkit-transform 0.2s ease-in-out;
        -ms-transition: -ms-transform 0.2s ease-in-out;
        transition: transform 0.2s ease-in-out;
        max-width: 100%;
        height: auto;
        vertical-align: middle;
      }

      &:hover img {
        -moz-transform: scale(1.075);
        -webkit-transform: scale(1.075);
        -ms-transform: scale(1.075);
        transform: scale(1.075);
      }
    }
  }
}

@media screen and (max-width: 980px) {
  .gallery {
    padding: 2em;
    min-height: 20em;

    header h2 {
      margin-bottom: 1em;
    }
  }
}

@media screen and (max-width: 480px) {
  .gallery {
    padding: 1em;
  }
}

@media screen and (max-width: 736px) {
  .gallery header {
    display: block;
  }
}

@media screen and (max-width: 480px) {
  .gallery header h2 {
    margin-bottom: .5em;
  }
}

@media screen and (max-width: 736px) {
  .gallery .content .media {
    width: 50%;
  }
}

@media screen and (max-width: 480px) {
  .gallery .content .media {
    width: 100%;
  }
}
</style>