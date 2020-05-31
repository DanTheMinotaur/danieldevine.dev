<template>
  <div id="blog">
    <section class="posts">
      <div v-for="article in this.articles" v-bind:key="article.slug">
        <article-preview
          :image="article.header_image"
          :title="article.title"
          :description="article.description"
          :slug="article.slug"
          :published="article.published_at"
        />
      </div>
    </section>
  </div>
</template>

<script>
import gql from "graphql-tag";
const moment = require("moment");

import ArticlePreview from "../components/Blog/ArticlePreview.vue";

export default {
  name: "Blog",
  data() {
    return {
      articles: [],
      moment: moment
    };
  },
  components: {
    ArticlePreview
  },
  computed: {
    columnSplit() {
      if (this.articles) return this.getChunks(this.articles, 3);
      return [];
    }
  },
  apollo: {
    articles: gql`
      query {
        articles {
          title
          category {
            name
          }
          description
          header_image {
            name
            url
            alternativeText
          }
          slug
          published_at
        }
      }
    `
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Merriweather:300,700,300italic,700italic|Source+Sans+Pro:900");

#blog {
  background-color: #ffffff;
  position: relative;
  margin: 0 auto;
  width: calc(100% - 4rem);
  font-family: "Merriweather", Georgia, serif;
  font-weight: 300;
  font-size: 1rem;
  line-height: 2.375;
  font-size: 16pt;

  // max-width: 72rem;
  z-index: 2;

  @media screen and (max-width: 1680px) {
    html {
      font-size: 12pt;
    }
  }

  @media screen and (max-width: 1280px) {
    html {
      font-size: 11pt;
    }
  }

  @media screen and (max-width: 360px) {
    html {
      font-size: 10pt;
    }
  }

  p {
    text-align: justify;
    margin: 0 0 2rem 0;
  }

  strong,
  b {
    font-weight: 600;
  }

  em,
  i {
    font-style: italic;
  }

  p {
    text-align: justify;
    margin: 0 0 2rem 0;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Source Sans Pro", Helvetica, sans-serif;
    font-weight: 900;
    line-height: 1.5;
    letter-spacing: 0.075em;
    text-transform: uppercase;
    margin: 0 0 1rem 0;
  }

  h1 a,
  h2 a,
  h3 a,
  h4 a,
  h5 a,
  h6 a {
    border-bottom: 0;
    color: inherit;
    text-decoration: none;
  }

  h1 {
    font-size: 4rem;
    line-height: 1.1;
    margin: 0 0 2rem 0;
  }

  h2 {
    font-size: 1.75rem;
    line-height: 1.3;
    margin: 0 0 1.5rem 0;
  }

  h3 {
    font-size: 1.25rem;
    margin: 0 0 1.5rem 0;
  }

  h4 {
    font-size: 1rem;
  }

  h5 {
    font-size: 0.9rem;
  }

  h6 {
    font-size: 0.8rem;
  }

  sub {
    font-size: 0.8rem;
    position: relative;
    top: 0.5rem;
  }

  sup {
    font-size: 0.8rem;
    position: relative;
    top: -0.5rem;
  }

  blockquote {
    border-left: solid 4px;
    font-style: italic;
    margin: 0 0 2rem 0;
    padding: 0.5rem 0 0.5rem 2rem;
  }

  code {
    border: solid 2px;
    font-family: "Courier New", monospace;
    font-size: 0.9rem;
    margin: 0 0.25rem;
    padding: 0.25rem 0.65rem;
  }

  pre {
    -webkit-overflow-scrolling: touch;
    font-family: "Courier New", monospace;
    font-size: 0.9rem;
    margin: 0 0 2rem 0;

    code {
      display: block;
      line-height: 1.75;
      padding: 1rem 1.5rem;
      overflow-x: auto;
    }
  }

  hr {
    border: 0;
    border-bottom: solid 2px;
    margin: 3rem 0;

    &.major {
      margin: 5rem 0;
    }
  }

  .image {
    border: 0;
    display: inline-block;
    position: relative;

    img {
      display: block;
    }

    &.left,
    &.right {
      max-width: 40%;
    }

    &.left img,
    &.right img {
      width: 100%;
    }

    &.left {
      float: left;
      margin: 0 2rem 2rem 0;
      top: 0.75rem;
    }

    &.right {
      float: right;
      margin: 0 0 2rem 2rem;
      top: 0.75rem;
    }

    &.fit {
      display: block;
      margin: 2.5rem 0;
      width: 100%;

      &:first-child {
        margin-top: 0;
      }

      img {
        width: 100%;
      }
    }

    &.main {
      display: block;
      margin: 4rem 0;
      width: 100%;

      &:first-child {
        margin-top: 0;
      }

      img {
        width: 100%;
      }
    }
  }

  @media screen and (max-width: 736px) {
    .image {
      &.fit,
      &.main {
        margin: 2rem 0;
      }
    }
  }

  a.image {
    overflow: hidden;

    img {
      -moz-transition: -moz-transform 0.2s ease-out;
      -webkit-transition: -webkit-transform 0.2s ease-out;
      -ms-transition: -ms-transform 0.2s ease-out;
      transition: transform 0.2s ease-out;
    }

    &:hover img {
      -moz-transform: scale(1.05);
      -webkit-transform: scale(1.05);
      -ms-transform: scale(1.05);
      transform: scale(1.05);
    }
  }

  header {
    cursor: default;

    > {
      .date {
        display: block;
        font-size: 0.8rem;
        height: 1;
        margin: 0 0 1rem 0;
        position: relative;
      }

      p {
        font-style: italic;
      }

      h1 + p {
        font-size: 1.1rem;
        margin-top: -0.5rem;
        line-height: 2;
      }

      h2 + p {
        font-size: 1rem;
        margin-top: -0.75rem;
      }

      h3 + p {
        font-size: 0.9rem;
        margin-top: -0.75rem;
      }

      h4 + p {
        font-size: 0.8rem;
        margin-top: -0.75rem;
      }
    }

    &.major {
      margin: 0 0 4rem 0;
      text-align: center;

      > {
        :last-child {
          margin-bottom: 0;
        }

        p {
          margin-top: 0;
          text-align: center;
        }

        .date {
          font-size: 1rem;
          margin: 0 0 4rem 0;

          &:before,
          &:after {
            content: "";
            display: block;
            position: absolute;
            top: 50%;
            width: calc(50% - 6rem);
            border-top: solid 2px;
          }

          &:before {
            left: 0;
          }

          &:after {
            right: 0;
          }
        }
      }

      .date {
        &:before,
        &:after {
          border-top-color: #eeeeee;
        }
      }
    }
  }

  @media screen and (max-width: 980px) {
    header br {
      display: none;
    }
  }

  @media screen and (max-width: 736px) {
    header.major {
      margin: 0 0 2rem 0;
    }
  }

  > {
    * {
      padding: 4rem 4rem 2rem 4rem;
      border-top: solid 2px #eeeeee;
      margin: 0;

      &:first-child {
        border-top: 0;
      }
    }

    footer {
      text-align: center;
    }

    .post {
      padding: 8rem 8rem 6rem 8rem;

      header.major {
        > {
          .date {
            margin-top: -2rem;
          }

          p {
            margin-top: 0;
            text-align: center;
          }

          h1 {
            font-size: 4rem;
            line-height: 1.1;
            margin: 0 0 2rem 0;
          }
        }

        h2 {
          font-size: 4rem;
          line-height: 1.1;
          margin: 0 0 2rem 0;
        }
      }

      &.featured {
        text-align: center;
      }
    }

    .posts {
      display: -moz-flex;
      display: -webkit-flex;
      display: -ms-flex;
      display: flex;
      -moz-flex-wrap: wrap;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -moz-align-items: -moz-stretch;
      -webkit-align-items: -webkit-stretch;
      -ms-align-items: -ms-stretch;
      align-items: stretch;
      text-align: center;
      width: 100%;
      padding: 0;

      > {
        * {
          -moz-flex-shrink: 1;
          -webkit-flex-shrink: 1;
          -ms-flex-shrink: 1;
          flex-shrink: 1;
          -moz-flex-grow: 0;
          -webkit-flex-grow: 0;
          -ms-flex-grow: 0;
          flex-grow: 0;
          width: 50%;
          padding: 4rem;
          width: 50%;
        }

        article {
          border-color: #eeeeee;
          border-left-width: 2px;
          border-style: solid;
          border-top-width: 2px;
          text-align: center;

          > :last-child {
            margin-bottom: 0;
          }

          &:nth-child(2n - 1) {
            border-left-width: 0;
          }

          &:nth-child(-n + 2) {
            border-top-width: 0;
          }
        }
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  #blog > .post {
    padding: 6rem 4rem 4rem 4rem;
  }
}

@media screen and (max-width: 736px) {
  #blog > .post {
    padding: 4rem 2rem 2rem 2rem;

    header.major {
      > {
        .date {
          margin-top: -1rem;
          margin-bottom: 2rem;
        }

        h1 {
          font-size: 2.5rem;
          line-height: 1.2;
          margin: 0 0 1.5rem 0;
        }
      }

      h2 {
        font-size: 2.5rem;
        line-height: 1.2;
        margin: 0 0 1.5rem 0;
      }
    }
  }
}

@media screen and (max-width: 980px) {
  #blog > .posts > * {
    width: 50%;
    padding: 2.5rem;
    width: 50%;
  }
}

@media screen and (max-width: 736px) {
  #blog > .posts > {
    * {
      width: 100%;
      padding: 2rem;
      width: 100%;
    }

    article {
      &:nth-child(2n - 1) {
        border-left-width: 2px;
      }

      &:nth-child(-n + 2) {
        border-top-width: 2px;
      }

      &:nth-child(n) {
        border-left-width: 0;
      }

      &:nth-child(-n + 1) {
        border-top-width: 0;
      }

      .image {
        max-width: 25rem;
        margin-left: auto;
        margin-right: auto;
      }
    }
  }
}

@media screen and (max-width: 736px) {
  #blog > * {
    padding: 2rem 2rem 0.1rem 2rem;
  }
}

@media screen and (max-width: 480px) {
  #blog {
    width: 100%;
  }
}
</style>