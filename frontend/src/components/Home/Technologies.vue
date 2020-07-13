<template>
  <section class="icon-bar">
    <div v-for="(group, i) in iconsSplit" v-bind:key="i">
      <span v-for="(icon, j) in group" v-bind:key="j" class="icon tooltip" v-bind:style="{ width:`${getIconWidth(group)}%` }">
        <img :src="getURL(getAvailableImage(icon.image_icon.formats, true).url).href" :alt="`${icon.name} Logo`" v-if="icon.image_icon.formats">
        <img :src="getURL(icon.url).href" :alt="`${icon.name} Logo`" v-else>
        <span class="tooltiptext">{{icon.name}}</span>
      </span>
    </div>
  </section>

</template>

<script>
export default {
  name: 'TechnologiesBar',
  props: ['icons'],
  computed: {
    iconsSplit() {
      return this.getChunks(this.icons, 4)
    }
  },
  methods: {
    getIconWidth(icons) {
      return 100 / icons.length
    }
  }
}
</script>

<style lang="scss" scoped>
.tooltip {
  position: relative;
  display: inline-block;
  border-bottom: 1px dotted black;

  .tooltiptext {
    visibility: hidden;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 2%;
    position: absolute;
    z-index: 1;
    bottom: 110%;
    right: 50%;
    transform: translateX(50%);
  }

  &:hover .tooltiptext {
    visibility: visible;
  }
}

.icon-bar {
  margin-top: 1.5rem;
  width: 100%;
  background-color: #555;
  position: relative;
  display: inline-block;

  
  .icon {
    text-align: center;
    // width: 20%; 
    padding: 12px 0;
    transition: all 0.3s ease;
    color: white;
    font-size: 36px;
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;

    img {
      height: 2em;
    }

    &:hover {
      background-color: #000;
    }
  }
}
</style>>
