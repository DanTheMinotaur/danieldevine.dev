<template>
  <div id="blog">
    <section class="posts">
      <div v-for="article in this.articles" v-bind:key="article.slug" >
        <article-preview :image="article.header_image" :title="article.title" :description="article.description" :slug="article.slug" :published="article.published_at" />
      </div>
    </section>
  </div>
</template>

<script>
import gql from "graphql-tag";
const moment = require("moment");

import ArticlePreview from '../components/Blog/ArticlePreview.vue'

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
#blog {
		background-color: #ffffff;
		position: relative;
		margin: 0 auto;
		width: calc(100% - 4rem);
		// max-width: 72rem;
		z-index: 2;
	}

		#blog > * {
			padding: 4rem 4rem 2rem 4rem ;
			border-top: solid 2px #eeeeee;
			margin: 0;
		}

			#blog > *:first-child {
				border-top: 0;
			}

		#blog > footer {
			text-align: center;
		}

		#blog > .post {
			padding: 8rem 8rem 6rem 8rem ;
		}

			#blog > .post header.major > .date {
				margin-top: -2rem;
			}

			#blog > .post header.major > h1, #blog > .post header.major h2 {
				font-size: 4rem;
				line-height: 1.1;
				margin: 0 0 2rem 0;
			}

			#blog > .post.featured {
				text-align: center;
			}

			@media screen and (max-width: 1280px) {

				#blog > .post {
					padding: 6rem 4rem 4rem 4rem ;
				}

			}

			@media screen and (max-width: 736px) {

				#blog > .post {
					padding: 4rem 2rem 2rem 2rem ;
				}

					#blog > .post header.major > .date {
						margin-top: -1rem;
						margin-bottom: 2rem;
					}

					#blog > .post header.major > h1, #blog > .post header.major h2 {
						font-size: 2.5rem;
						line-height: 1.2;
						margin: 0 0 1.5rem 0;
					}

			}

		#blog > .posts {
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
		}

			#blog > .posts > * {
				-moz-flex-shrink: 1;
				-webkit-flex-shrink: 1;
				-ms-flex-shrink: 1;
				flex-shrink: 1;
				-moz-flex-grow: 0;
				-webkit-flex-grow: 0;
				-ms-flex-grow: 0;
				flex-grow: 0;
			}

			#blog > .posts > * {
				width: 50%;
			}

			#blog > .posts > * {
				padding: 4rem;
				width: 50%;
			}

			#blog > .posts > article {
				border-color: #eeeeee;
				border-left-width: 2px;
				border-style: solid;
				border-top-width: 2px;
				text-align: center;
			}

				#blog > .posts > article > :last-child {
					margin-bottom: 0;
				}

				#blog > .posts > article:nth-child(2n - 1) {
					border-left-width: 0;
				}

				#blog > .posts > article:nth-child(-n + 2) {
					border-top-width: 0;
				}

			@media screen and (max-width: 980px) {

				#blog > .posts > * {
					width: 50%;
				}

				#blog > .posts > * {
					padding: 2.5rem;
					width: 50%;
				}

			}

			@media screen and (max-width: 736px) {

				#blog > .posts > * {
					width: 100%;
				}

				#blog > .posts > * {
					padding: 2rem;
					width: 100%;
				}

				#blog > .posts > article:nth-child(2n - 1) {
					border-left-width: 2px;
				}

				#blog > .posts > article:nth-child(-n + 2) {
					border-top-width: 2px;
				}

				#blog > .posts > article:nth-child(n) {
					border-left-width: 0;
				}

				#blog > .posts > article:nth-child(-n + 1) {
					border-top-width: 0;
				}

				#blog > .posts > article .image {
					max-width: 25rem;
					margin-left: auto;
					margin-right: auto;
				}

			}

		@media screen and (max-width: 736px) {

			#blog > * {
				padding: 2rem 2rem 0.1rem 2rem ;
			}

		}

		@media screen and (max-width: 480px) {

			#blog {
				width: 100%;
			}
		}
</style>