<template>
  <div class="article-preview">
    <header>
      <router-link :to="{path: `/blog/${slug}`}" :key="slug">
        <h1>{{title}}</h1>
      </router-link>
      <h2 v-if="description">{{description}}</h2>
    </header>
    <figure>
      <img :src="getURL(image.url).href" :alt="image.alternativeText" />
    </figure>
  </div>
</template>

<script>
export default {
  name: "ArticlePreview",
  props: ["image", "title", "description", "slug"]
};
</script>

<style lang="scss" scoped>

.article-preview {
  display: flex;
}

header {
  flex-grow: 1;
  -moz-flex-shrink: 1;
  -webkit-flex-shrink: 1;
  -ms-flex-shrink: 1;
  flex-shrink: 1;
  width: 50%;

  a {
    text-decoration: none;
  }

  h1 {
    line-height: 1.25em;
    margin-bottom: 0;
    

  }
}

figure {
  flex-grow: 0;
  flex-shrink: 0;
  display: block;
  margin: 0 0 2em 4em;
  width: 50%;
  position: relative;
  border-radius: 0.375em;
  border: 0;

  img {
    object-position: center;
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    border-radius: 0.375em;
    display: block;
  }
}


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