<template>
  <section class="icon-bar">
    <span v-for="(icon, i) in icons" v-bind:key="i" class="icon tooltip" v-bind:style="{ width: getIconWidth() }">
      <img :src="getURL(icon.image_icon.url).href" :alt="`${icon.name} Logo`">
      <span class="tooltiptext">{{icon.name}}</span>
    </span>
  </section>
</template>

<script>
export default {
  name: 'TechnologiesBar',
  props: ['icons'],
  methods: {
    getIconWidth() {
      return `${100 / this.icons.length}%`
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
    // width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 2%;
    
    /* Position the tooltip */
    position: absolute;
    z-index: 1;
    bottom: 100%;
    left: 50%;
    margin-left: -60px;
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
