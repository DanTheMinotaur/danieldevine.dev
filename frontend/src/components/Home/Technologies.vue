<template>
  <section class="icon-bar">
    <div class="icon tooltip"><i class="fa fa-home"></i><span class="tooltiptext">Test Some Stuff</span></div>
    <span class="icon tooltip"><i class="fa fa-search"></i><span class="tooltiptext">Test Some Stuff</span></span>
    <span class="icon tooltip"><i class="fa fa-envelope"></i><span class="tooltiptext">Test Some Stuff</span></span>
    <span class="icon tooltip"><i class="fa fa-globe"></i><span class="tooltiptext">Test Some Stuff</span></span>
    <span class="icon tooltip"><i class="fa fa-trash"></i><span class="tooltiptext">Test Some Stuff</span></span>
  </section>
</template>

<script>
export default {
  name: 'TechnologiesBar',
  props: ['technologies'],
  computed: {
    getIconWidth() {
      return this.technologies.length / 100
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
    width: 120px;
    background-color: black;
    color: #fff;
    text-align: center;
    border-radius: 6px;
    padding: 5px 0;
    
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
    width: 20%; 
    padding: 12px 0;
    transition: all 0.3s ease;
    color: white;
    font-size: 36px;
    position: relative;
    display: inline-block;
    border-bottom: 1px dotted black;

    &:hover {
      background-color: #000;
    }
  }
}
</style>>
