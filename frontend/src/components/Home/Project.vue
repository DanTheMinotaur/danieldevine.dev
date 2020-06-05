<template>
  <div>{{projects}}</div>
</template>

<script>
import gql from "graphql-tag";

export default {
  data() {
    return {
      projects: {},
      routeParam: this.$route.params.slug,
    }
  },
  apollo: {
    projects: {
      query: gql`
        query Project($slug: String!) {
          projects(where: { slug: $slug }) {
            title
            description
            main_image {
              formats
              alternativeText
            }
          }
          galleries {
            name
            image {
              formats
              alternativeText
            }
          }
        }
      `,
      variables() {
        return {
          slug: this.routeParam
        };
      }
    }
  }
};
</script>