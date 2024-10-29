<template>
  <h1 class="restaurant text-white bg-primary fw-bolder text-center">Leaky Cauldron™</h1>
  <h2 class="menu-title fw-bold">Breakfast Menu</h2>

  <div class="menu-items">
    <h3 class="fw-bold">Breakfast - served until 10:30 am daily</h3>
    <p class="fw-light">Includes small beverage</p>
  </div>

  <div class="">
    <router-link to="/">
      <button class="">Back to home</button>
    </router-link>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

@Options({
  components: {},
})
export default class HomeView extends Vue {}
</script>

<!-- <style lang="scss" scoped>
* {
  font-family: Arial, Helvetica, sans-serif;
}

.restaurant {
  background: linear-gradient(to right, #3555a3 0, #1c3385 100%);
  font-weight: 900;
}
</style> -->
