<template>  
    <section class="hero is-success is-fullheight">
      <div class="hero-body">
        <div class="container">
          <section>
            <h1 class="title">
              {{homePage.header}}
            </h1>
            <h2 class="subtitle">
              {{homePage.sub_header}}
            </h2>
          </section>
          <section>
            <div class="btn-group">
              <button class="button is-link is-primary">Apple</button>
              <button class="button is-link is-primary">Samsung</button>
              <button class="button is-link is-primary">Sony</button>
            </div> 
          </section>
        </div>
      </div>
    </section>
</template>

<script>

export default {  
  name: "Banner",
  props: ['homePage']
}
</script>  

<style lang="scss" scoped>
  .container section {
    float: left;
    width: 49.9%;
  }

  .btn-group button {
    cursor: pointer; /* Pointer/hand icon */
    width: 50%; /* Set a width if needed */
    display: block; /* Make the buttons appear below each other */

    border-radius: 0;

    &:first-child {
      border-radius: 4px 4px 0px 0px;
    }

    &:last-child {
      border-radius: 0px 0px 4px 4px;
    }
  }

  .btn-group button:not(:last-child) {
    border-bottom: none; /* Prevent double borders */
  }

  // /* Add a background color on hover */
  // .btn-group button:hover {
  //   background-color: #3e8e41;
  // }
</style>
