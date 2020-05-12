<template>
  <section>
    <div class="card">
      <div class="card-image">
        <figure class="image is-5by4">
          <img :src="getURL(image.url).href" :alt="image.alternativeText" />
        </figure>
      </div>
      <div class="card-content">
        <div class="content">
          <h2 class="is-2 has-text-center has-text-weight-medium">{{title}}</h2>
          <hr />
          <p class="is-4 has-text-grey has-text-center" v-if="description">{{description}}</p>
        </div>
      </div>
    </div>
    <hr class="has-background-black">
  </section>
</template>

<script>
export default {
  name: "ArticlePreview",
  props: ["image", "title", "description"]
};
</script>