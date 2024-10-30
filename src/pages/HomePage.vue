<template>
  <h1>Leaky Cauldron</h1>

  <div class="">
    <router-link to="/breakfast">
      <button class="">Breakfast Menu</button>
    </router-link>
  </div>

  <div class="">
    <router-link to="/lunch">
      <button class="">Lunch/Dinner Menu</button>
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
    };
  }
};
</script>

<!-- <style lang="scss" scoped></style> -->