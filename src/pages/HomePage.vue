<template>
  <div class="text-center">
    <img :src="leakyCauldronLogo" alt="Leaky Cauldron" class="rounded-3 mt-3" id="logo-image" />
  </div>
  <div class="intro-section text-white">
    <h1 class="fw-bold text-center">Fill up on Traditional British Food.</h1>
    <p class="text-center h4 px-5 fw-normal">
      The Leaky Cauldron™ is a small, grubby-looking pub and inn. Once inside,
      you'll find yourself under a cathedral ceiling with views towards the
      guest rooms in the inn. The delicious traditional British fare served here
      includes Bangers and Mash, Fisherman's Pie, Vegan Chicken Curry and
      Ploughman's Platter, plus a Kid's Menu offering Fish And Chips and more.
    </p>
  </div>

  <div class="breakfast-link">
    <router-link to="/breakfast">
      <img :src="breakfast" alt="English Breakfast" class="breakfast-image"/>
      <!-- <button class="">Breakfast Menu</button> -->
    </router-link>
  </div>

  <div class="lunch-link">
    <router-link to="/lunch">
      <img :src="lunch" alt="Fish and Chips" class="lunch-image"/>
      <!-- <button class="">Lunch and Dinner Menu</button> -->
    </router-link>
  </div>

  <div class="drinks-link">
    <router-link to="/drinks">
      <img :src="drinks" alt="Butterbeer" class="drink-image"/>
      <!-- <button class="">Drinks Menu</button> -->
    </router-link>
  </div>  
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";

// @Options({
//   components: {},
// })
export default /* class HomePage extends Vue */ {
  data() {
    return {
      leakyCauldronLogo: require("@/assets/leaky-logo.png"),
      breakfast: require("@/assets/images/english-breakfast.png"),
      lunch: require("@/assets/images/fish-and-chips.png"),
      drinks: require("@/assets/images/butterbeer.png"),
    };
  },
};
</script>

<style lang="scss" scoped></style>