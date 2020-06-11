<template>
  <section class="gallery">
    <header class="special">
      <h2 class="title">{{title}} Gallery</h2>
    </header>
    <div class="content">
      <div v-for="(img, i) in images" v-bind:key="img.id" :title="img.caption" class="media">
        <img
          :src="getURL(img.formats.small.url).href"
          :alt="img.alternateText"
          :title="img.caption"
          @click="openGallery(i)"
        />
      </div>
      <LightBox
        ref="lightbox"
        :media="lightBoxFormat()"
        :show-caption="true"
        :show-light-box="false"
      v-if="images"/>
    </div>
    <footer>
      <a href="gallery.html" class="button large">Full Gallery</a>
    </footer>
  </section>
</template>

<script>
import LightBox from 'vue-image-lightbox'
require("vue-image-lightbox/dist/vue-image-lightbox.min.css");

export default {
  name: "Gallery",
  props: ["images", "title"],
  components: {
    LightBox
  },
  methods: {
    lightBoxFormat() {
      const lightBoxData = [];
      this.images.forEach(i => {

        lightBoxData.push({
          thumb: this.getURL(i.formats.thumbnail.url).href,
          src: this.getURL(i.url).href,
          caption: i.caption
        });
      });
      return lightBoxData
    },
    openGallery(index) {
      this.$refs.lightbox.showImage(index);
    }
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
      width: 50%;
      margin-top: 0;
      padding-top: 0;

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
    margin-bottom: 0.5em;
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