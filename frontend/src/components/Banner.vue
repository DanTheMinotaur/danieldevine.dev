<template>  
    <section id="banner" v-bind:style="{'background-image': `url(${getURL(homePage.header_image.url).href})`}" v-if="homePage.header_image">
        <div class="inner">
            <h1>{{homePage.header}}</h1>
            <p>{{homePage.sub_header}}</p>
            <ul class="actions">
                <li><a href="#galleries" class="button alt scrolly big">Continue</a></li>
            </ul>
        </div>
    </section>
</template>

<script>

export default {  
  name: "Banner",
  props: ['homePage']
}
</script>  
