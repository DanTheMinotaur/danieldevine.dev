<template>
  <transition name="component-fade" mode="out-in">
    <component v-bind:is="currentComponent"></component>
  </transition>
</template>

<script>
import Intro from "./components/Home/Intro.vue";
import Work from "./components/Home/Work.vue";
import Contact from "./components/Home/Contact.vue";

export default {
  data() {
    return {
      currentComponent: "intro",
      navComponents: {
        buttons: {
          intro: {
            icon: "fa-home",
            width: "45em"
          },
          work: {
            icon: "fa-folder",
            width: "45em"
          },
          contact: {
            icon: "fa-envelope",
            width: "45em"
          }
        }
      }
    };
  },
  components: {
    intro: Intro,
    work: Work,
    contact: Contact
  }
};
</script>