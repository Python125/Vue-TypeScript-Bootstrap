<template>
  <h1 class="restaurant text-white bg-primary fw-bolder text-center">
    Leaky Cauldron™
  </h1>
  <h2 class="menu-title fw-bold ms-5">Breakfast Menu</h2>

  <div class="menu-items row py-5">
    <h3 class="fw-bold text-center">Breakfast - served until 10:30 am daily</h3>
    <p class="fw-light text-center">Includes small beverage</p>

    <div class="col text-center">
      <p class="fw-bold">Traditional Breakfast (FS, PS, SS, TNS) - $18.99</p>
      <p>Fresh scrambled eggs, sausage links, black pudding, English bacon, baked beans, grilled tomato, sautéed mushrooms and breakfast potatoes</p>
      <p class="fw-bold py-2">Pancake Breakfast (FS, PS, SES, SS, TNS) - $18.99</p>
      <p>Three fluffy buttermilk pancakes, crisp bacon and link sausage with butter croissant</p>
      <p class="fw-bold py-2">Egg, Leek, & Mushroom Pasty (FS, PS, SES, TNS) - $18.99</p>
      <p>Pastry wrapped scrambled eggs, mushrooms and leeks served with breakfast potatoes and fresh fruit</p>
    </div>
    <div class="col text-center">
      <p class="fw-bold">American Breakfast (FS, PS, SES, SS, TNS) - $18.99</p>
      <p>Fresh scrambled eggs, breakfast potatoes, crisp bacon, and link sausage with butter croissant</p>
      <p class="fw-bold py-2">Apple Oatmeal Flan with Yogurt & Fruit (FS, GS, PS, SES, SS) - $18.99</p>
      <p>Freshly baked flan of apples and oatmeal served with yogurt and fresh seasonal fruit</p>
      <p class="fw-bold py-2">Kid's Breakfast - $13.49</p>
      <p>Choose traditional, pancake or American</p>
    </div>
  </div>

  <div class="side-items row">
    <h1 class="fw-bold text-center">Sides</h1>
    <div class="col text-center">
      <p class="fw-bold">Bacon - $2.49</p>
      <p class="fw-bold">English Bacon - $5.49</p>
      <p class="fw-bold">Roasted Potatoes - $4.99</p>
    </div>
    <div class="col text-center">
      <p class="fw-bold">Blood Sausage - $5.49</p>
      <p class="fw-bold">Scrambled Eggs - $2.99</p>
    </div>
  </div>

  <div class="side-items row">
    <h1 class="fw-bold text-center">Beverages</h1>
    <div class="col text-center">
      <p class="fw-bold">Pumpkin Juice™ - $5.49</p>
      <p class="fw-bold">Fresh Brewed Coffee - $3.79</p>
      <p class="fw-bold">Apple Juice - $3.49</p>
    </div>
    <div class="col text-center">
      <p class="fw-bold">Hot Tea - $3.79</p>
      <p class="fw-bold">Milk - $2.99</p>
      <p class="fw-bold">Orange Juice - $3.49</p>
    </div>
  </div>

  <div class="">
    <router-link to="/">
      <button>Back to home</button>
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
