<template>
    <main>
        <blog-header :title="'Blog'" :image="'img'"/>
        <section v-for="post in articles" v-bind:key="post.slug" class="hero">
            <div class="hero-body">
            <div class="container">
                <div class="columns">
                <div class="column is-8 is-offset-2">
                    <figure class="image is-16by9">
                        <img :src="getURL(post.header_image.url).href" :alt="post.name">
                    </figure>
                </div>
                </div>

                <section class="section">
                <div class="columns">
                    <div class="column is-8 is-offset-2">
                        <div class="content is-medium">
                            <h2 class="subtitle is-4">{{ moment(post.published_at).format("MMMM Do, YYYY") }}</h2>
                            <router-link :to="{path: `/blog/${post.slug}`}" :key="post.slug">
                                <h1 class="title">{{post.title}}</h1>
                            </router-link>
                            <p v-if="post.description">{{post.description}}</p>
                        </div>
                    </div>
                </div>
                </section>

                <div class="is-divider"></div>
            </div>
        </div>
    </section>
  </main>
</template>

<script>
import gql from "graphql-tag"
const moment = require("moment")
import BlogHeader from "../components/Blog/BlogHeader.vue"

export default {
    name: "Blog",
    data() {
        return {
            articles: [],
            moment: moment
        }
    },
    components: {
        BlogHeader,
    },
    apollo: {
        articles: gql`
            query { 
                articles {
                    title
                    category {
                        name
                    },
                    description,
                    header_image {
                        name,
                        url
                    },
                    slug,
                    published_at
                }
            }
        `
    }
}


</script>
  
