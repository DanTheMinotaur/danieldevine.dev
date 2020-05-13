<template>
  <section>
    <div class="card image-box">
      <div class="card-image">
        <figure class="image is-5by4">
          <router-link :to="{path: `/blog/${slug}`}" :key="slug">
            <img :src="getURL(image.url).href" :alt="image.alternativeText" />
          </router-link>
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <transition name="fade" mode="out-in">
          <router-link :to="{path: `/blog/${slug}`}" :key="slug">
            <h2 class="is-2 has-text-center has-text-weight-medium">{{title}}</h2>
          </router-link>
          </transition>
          <div v-if="description">
            <hr />
            <p class="is-4 has-text-grey has-text-center">{{description}}</p>
          </div>
  
        </div>
      </div>
    </div>
    <hr class="has-background-black">
  </section>
</template>

<script>
export default {
  name: "ArticlePreview",
  props: ["image", "title", "description", "slug"]
};
</script>

<style lang="scss" scoped>

.image-box {
     -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    position: relative;
    margin: auto;
    overflow: hidden;
    // width: 540px;
    img {
      max-width: 100%;
      transition: all 0.2s;
      display: block;
      width: 100%;
      // height: auto;
      transform: scale(1);
    }

    &:hover {
      img {
          transform: scale(1.1);
      }
    }

    h2 {
      transition: all 0.1s;
    }

    a:hover {
      h2 {
        transition: all 0.1s;
        color: hsl(171, 100%, 41%);
      }
      
      img {
          transform: scale(1.1);
      }
    }
}

</style>