<template>
  <h1 class="restaurant text-white text-center">Leaky Cauldron™</h1>

  <h3 class="fw-bold text-center text-white mt-5">
    Breakfast - served until 10:30 am daily
  </h3>
  <p class="mt-3 h4 text-center text-white">
    <b><u>Allergen Note:</u></b> Please inform a manager or Chef's Assistant
    prior to ordering if someone in your party requires special dietary
    accommodations
  </p>
  <p class="fw-light text-center text-white p-3">Includes small beverage</p>

  <div class="menu-row1">
    <div class="menu-items1 text-white row py-5">
      <div class="col text-center">

        <img class="w-25" :src="traditionalBreakfast" alt="Traditional Breakfast" />
        <p>
          <b>Traditional Breakfast (FS, PS, SS, TNS) - $18.99</b> - Fresh
          scrambled eggs, sausage links, black pudding, English bacon, baked
          beans, grilled tomato, sautéed mushrooms and breakfast potatoes
        </p>
        
        <img class="w-25" :src="pancakeBreakfast" alt="Pancake Breakfast" />
        <p class="py-2">
          <b>Pancake Breakfast (FS, PS, SES, SS, TNS) - $18.99</b> - Three
          fluffy buttermilk pancakes, crisp bacon and link sausage with butter
          croissant
        </p>

        <img class="w-25" :src="eggLeekMushroom" alt="Egg, Leek, & Mushroom Pasty" />
        <p class="py-2">
          <b>Egg, Leek, & Mushroom Pasty (FS, PS, SES, TNS) - $18.99</b> -
          Pastry wrapped scrambled eggs, mushrooms and leeks served with
          breakfast potatoes and fresh fruit
        </p>
      </div>
    </div>
    <div class="menu-items2 text-white row py-5">
      <div class="col text-center">

        <img class="w-25" :src="americanBreakfast" alt="American Breakfast">
        <p>
          <b>American Breakfast (FS, PS, SES, SS, TNS) - $18.99</b> - Fresh
          scrambled eggs, breakfast potatoes, crisp bacon, and link sausage with
          butter croissant
        </p>

        <img class="w-25" src="appleOatmealFlan" alt="Apple Oatmeal Flan">
        <p class="py-2">
          <b
            >Apple Oatmeal Flan with Yogurt & Fruit (FS, GS, PS, SES, SS) -
            $18.99</b
          >
          - Freshly baked flan of apples and oatmeal served with yogurt and
          fresh seasonal fruit
        </p>
        <p class="py-2">
          <b>Kid's Breakfast - $13.49</b> - Choose traditional, pancake or
          American
        </p>
      </div>
    </div>
  </div>

  <h3 class="fw-bold text-white text-center mb-4">Sides</h3>
  <div class="menu-row2">
    <div class="menu-items3 text-white row py-5">
      <div class="sides col text-center">
        <p class="fw-bold py-1">Bacon - $2.49</p>
        <p class="fw-bold py-1">English Bacon - $5.49</p>
        <p class="fw-bold py-1">Roasted Potatoes - $4.99</p>
      </div>
      <div class="sides col text-center">
        <p class="fw-bold py-1">Blood Sausage - $5.49</p>
        <p class="fw-bold py-1">Scrambled Eggs - $2.99</p>
      </div>
    </div>
    <!-- <div class="menu-items4 text-white row py-5">
      <div class="sides col text-center">
        <p class="fw-bold py-1">Blood Sausage - $5.49</p>
        <p class="fw-bold py-1">Scrambled Eggs - $2.99</p>
      </div>
    </div> -->
  </div>

  <div class="allergies ms-5 text-white">
    <div class="d-flex px-3">
      <p class="px-2"><span class="fw-bolder">GS</span> - Gluten Sensitive</p>
      <p class="px-2"><span class="fw-bolder">DS</span> - Dairy Sensitive</p>
      <p class="px-2"><span class="fw-bolder">ES</span> - Egg Sensitive</p>
      <p class="px-2"><span class="fw-bolder">PS</span> - Peanut Sensitive</p>
      <p class="px-2">
        <span class="fw-bolder">TNS</span> - Tree Nut Sensitive
      </p>
      <p><span class="fw-bolder">FS</span> - Fish Sensitive</p>
    </div>
    <div class="d-flex px-3">
      <p class="px-2">
        <span class="fw-bolder">SFS</span> - Shellfish Sensitive
      </p>
      <p class="px-2"><span class="fw-bolder">SES</span> - Sesame Sensitive</p>
      <p class="px-2">
        <span class="fw-bolder">SS</span> - Soy Protein Sensitive
      </p>
    </div>
  </div>

  <p class="note px-4 py-3 ms-5 text-white">
    Menu items and pricing are subject to change without notice
  </p>

  <div>
    <router-link to="/">
      <button>Back to home</button>
    </router-link>
  </div>
</template>

<script lang="ts">
// import { Options, Vue } from "vue-class-component";

// @Options({
//   components: {},
// })
export default /* class HomeView extends Vue */ {
  data() {
    return {
      traditionalBreakfast: require("@/assets/images/traditional-breakfast.png"),
      pancakeBreakfast: require("@/assets/images/pancake-breakfast.png"),
      eggLeekMushroom: require("@/assets/images/egg-leek-mushroom-pasty.png"),
      americanBreakfast: require("@/assets/images/american-breakfast.png"),
      appleOatmealFlan: require("@/assets/images/apple-oatmeal-flan.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
}

.restaurant {
  background: linear-gradient(to right, #3555a3 0, #1c3385 100%);
  font-weight: 900;
  padding: 0.5rem;
}

.menu-row1 {
  display: flex;
  justify-content: space-between;
  margin-top: -2rem;
}

.menu-row2 {
  display: flex;
  justify-content: space-between;
  margin-top: -2rem;
}

.menu-items1,
.menu-items2 {
  width: 40%;
  margin: 10rem;
  padding: 4rem;
  background-color: #0a0a0a;
  opacity: 0.8;
  z-index: -1;
}

.menu-items3,
.menu-items4 {
  width: 100%;
  margin: 10rem;
  margin-top: 1rem;
  padding: 5rem;
  background-color: #0a0a0a;
  opacity: 0.8;
  z-index: -1;
}

.allergies {
  margin-top: -2rem;
  float: right;
}

.note {
  margin-top: -2rem;
  float: right;
}
</style>