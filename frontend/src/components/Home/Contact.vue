<template>
  <section class="hero is-danger is-fullheight">
    <div class="hero-body">
        <div class="container">
            <section id="contact">
                <ContactForm />
            </section>
            <section>
                <About :about="homePage.about" :about_header="homePage.about_header" />
            </section>
        </div>
    </div>
  </section>
</template>

<script>
import ContactForm from "./ContactForm.vue"
import About from "./About.vue"

export default {
  name: "Contact",
  props: ["homePage"],
  components: {
    ContactForm,
    About
  }
};
</script>

<style lang="scss" scoped>
.container section {
    float: left;
    width: 49.9%;
  }
</style>
