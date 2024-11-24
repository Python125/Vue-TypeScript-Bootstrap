<template>
  <h1 class="restaurant text-white text-center">Leaky Cauldron™</h1>

  <div class="menu-row1">
    <div class="menu-items1 text-white row py-3">
      <h3 class="fw-bold text-center mb-3">Butterbeer™</h3>
      <p class="butterbeer-note fw-bold text-center">
        Butterbeer™ is suitable for those with gluten, soy, egg, wheat, and nut
        allergies. The topping does contain trace amounts of dairy, so it is
        unsuitable for vegans or anyone with a dairy allergy. Please ensure to
        select the Non-Dairy option when selecting your cold or frozen
        Butterbeer™. Hot Butterbeer™ will remain unsuitable for vegans or anyone
        with a dairy allergy.
      </p>
      <div class="col text-center mt-3">
        <img class="butterbeer-image" :src="butterbeer" alt="Butterbeer" />
        <p class="py-1"><b>Butterbeer™ - $8.99</b> - A non-alcoholic sweet drink reminiscent of shortbread and butterscotch</p>
        <img class="butterbeer-image" :src="frozenButterbeer" alt="Frozen Butterbeer" />
        <p class="py-1"><b>Frozen Butterbeer™ - $8.99</b> - A non-alcoholic sweet drink reminiscent of shortbread and butterscotch</p>
        <img class="butterbeer-image" :src="hotButterbeer" alt="Hot Butterbeer" />
        <p class="py-1"><b>Hot Butterbeer™ - $8.99</b> - A non-alcoholic sweet drink reminiscent of shortbread and butterscotch</p>

        <p class="py-1"><b>Butterbeer™ Souvenirs</b> - A non-alcoholic sweet drink reminiscent of shortbread and butterscotch, served in a souvenir cup</p>
        <p class="py-1"><b>Stainless Steel Butterbeer™ Souvenirs</b> - A non-alcoholic sweet drink reminiscent of shortbread and butterscotch, served in a souvenir cup</p>
        <p class="py-1"><b>Frozen Butterbeer™ Souvenirs</b> - A non-alcoholic sweet drink reminiscent of shortbread and butterscotch, served in a souvenir cup</p>
      </div>
    </div>
  </div>

  <div class="menu-row2">
    <div class="menu-items2 text-white row py-4">
      <div class="col text-center">
        <h3 class="text-center fw-bold mb-3">Wizards' Refreshments</h3>
        <img class="w-25 py-2" :src="pumpkinJuice" alt="Pumpkin Juice">
        <p class="fw-bold py-2">Pumpkin Juice™ - $5.49</p>
        
        <img class="w-25" :src="tongueTyingLemonSquash" alt="Tongue Tying Lemon Squash">
        <p class="py-2"><b>Tongue Tying Lemon Squash - $6.49</b> - Sweet and tart lemon flavored beverage served with squashed lemon</p>
       <img class="w-25 py-2" :src="fishyGreenAle" alt="Fishy Green Ale">
        <p class="py-1"><b>Fishy Green Ale - $6.49</b> - Smooth and creamy with notes of mint and cinnamon and popping blueberry fish eggs</p>
        <img class="w-25 py-2" :src="icedTea" alt="Iced Tea">
        <img style="width: 181px;" class="py-2" :src="lemonade" alt="Lemonade">
        
        <img class="w-25" :src="cider" alt="Cider">
        <p class="py-1"><b>Fountain Beverages - $4.49</b> - Iced Tea, Lemonade, Cider</p>
      </div>
    </div>
    <div class="menu-items3 text-white row py-4">
      <div class="col text-center">
        <h3 class="text-center fw-bold mb-3">Wizards' Refreshments</h3>
        <img class="w-25 py-2" :src="gillywater" alt="Gillywater">
        <p class="fw-bold py-2">Gillywater - $6.00</p>
        <img class="w-25 py-2" :src="otterSquashFizzyOrangeJuice" alt="Otter's Fizzy Orange Juice">
        <p class="py-2"><b>Otter's Fizzy Orange Juice - $6.49</b> - Effervescent fresh orange beverage with notes of vanilla and cinnamon</p>
        <img class="w-25 py-2" :src="peachtreeFizzingTea" alt="Peachtree Fizzing Tea">
        <p class="py-2"><b>Peachtree Fizzing Tea - $6.49</b> - Fizzy but smooth with flavors of fresh peach nectar and ginger</p>
      </div>
    </div>
  </div>

  <div class="menu-row3">
    <div class="menu-items4 text-white row py-4">
      <h3 class="fw-bold text-center">Cauldron Brews: Ale, Wine, & Wizard's Fire</h3>
        <div class="col text-center">
          <img class="w-25 py-1" :src="dragonScale" alt="Dragon's Scale">
          <p class="py-1"><b>Dragon's Scale - $13.00</b> - Unique lager with a light crisp, malty finish</p>
          <img class="w-25" :src="daisyrootAle" alt="Daisyroot Ale">
          <p class="py-1"><b>Daisyroot Ale - $13.00</b> - Refreshing traditional English Mild with a light malty flavor profile and a clean finish</p>
          <img class="w-25" :src="wizardsBrew" alt="Wizard's Brew">
          <p class="py-1"><b>Wizard's Brew - $13.00</b> - Full bodied, sweet stout with a smooth, light sweetness and clean, dry finish</p>
          <img class="w-25" :src="darkForestAle" alt="Dark Forest Ale">
          <p class="py-1"><b>Dark Forest Ale - $13.00</b> - Traditional brown ale with roasty caramel/toffee notes and warming finish</p>
          <img class="w-25" :src="fireWhisky" alt="Fire Whisky">
          <p class="py-1"><b>Fire Whisky - $12.50</b> - Fire Whisky, Fire and Strongbow Cocktail</p>
        </div>
    </div>
    <div class="menu-items5 text-white row py-4">
      <h3 class="fw-bold text-center py-2">Muggle Bevergages</h3>
        <div class="col text-center">
          <img class="w-25" :src="milk" alt="Milk">
          <p class="fw-bold py-1">2% Milk - $2.99</p>
          <img class="w-25" :src="orangeJuice" alt="Orange Juice">
          <img class="w-25" :src="appleJuice" alt="Apple Juice">
          <p class="py-1"><b>Juice - $3.49</b> - Orange, Apple</p>
          <img class="w-25" :src="coffeeCaffeine" alt="Caffeine Coffee">
          <img class="w-25" :src="decafCoffee" alt="Decaf Coffee">
          <img class="w-25" :src="hotTea" alt="Hot Tea">
          <p class="py-1"><b>Hot Beverages - $3.79</b> - Coffee, Decaf, Hot Tea</p>
          <img class="w-25 py-1" :src="chocolateMilk" alt="Chocolate Milk">
          <p class="fw-bold py-1">Chocolate Milk - $2.99</p>
          <img style="width: 110px;" class="py-1" :src="heineken" alt="Heineken">
          <img style="width: 116.4px;" class="py-1" :src="stellaArtois" alt="Stella Artois">
          <img style="width: 117.2px;" class="py-1" :src="strongbow" alt="Strongbow">
          <img style="width: 111.9px;" class="py-1" :src="yuengling" alt="Yuengling">
          <p><b>Draught Beer - $11.25</b> - Heineken, Stella Artois, Strongbow, Yuengling</p>
          <img style="width: 181px;" :src="chardonnay" alt="Chardonnay">
          <img style="width: 175.5px;" :src="cabernetSauvignon" alt="Cabernet Sauvignon">
          <p class="py-1"><b>Wine by the Glass - $11.00</b> - Chardonnay & Cabernet Sauvignon</p>
          <img class="w-25" :src="cupOfWater" alt="Cup of water">
          <p class="fw-bold py-1">Courtesy Cup of Water - $0</p>
        </div>
    </div>
  </div>

  <div class="">
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
export default /* class HomePage extends Vue */ {
  data() {
    return {
      butterbeer: require("@/assets/images/butterbeer.png"),
      frozenButterbeer: require("@/assets/images/frozen-butterbeer.png"),
      hotButterbeer: require("@/assets/images/hot-butterbeer.png"),
      pumpkinJuice: require("@/assets/images/pumpkin-juice.png"),
      tongueTyingLemonSquash: require("@/assets/images/tongue-tying-lemon-squash.png"),
      fishyGreenAle: require("@/assets/images/fishy-green-ale.png"),
      icedTea: require("@/assets/images/iced-tea.png"),
      lemonade: require("@/assets/images/lemonade.png"),
      cider: require("@/assets/images/cider.png"),
      gillywater: require("@/assets/images/gillywater.png"),
      otterSquashFizzyOrangeJuice: require("@/assets/images/otters-fizzy-orange-juice.png"),
      peachtreeFizzingTea: require("@/assets/images/peachtree-fizzing-tea.png"),
      dragonScale: require("@/assets/images/dragon-scale.png"),
      daisyrootAle: require("@/assets/images/daisyroot-ale.png"),
      wizardsBrew: require("@/assets/images/wizards-brew.png"),
      darkForestAle: require("@/assets/images/dark-forest-ale.png"),
      fireWhisky: require("@/assets/images/fire-whisky.png"),
      milk: require("@/assets/images/milk.png"),
      orangeJuice: require("@/assets/images/orange-juice.png"),
      appleJuice: require("@/assets/images/apple-juice.png"),
      coffeeCaffeine: require("@/assets/images/coffee.png"),
      decafCoffee: require("@/assets/images/decaf-coffee.png"),
      hotTea: require("@/assets/images/hot-tea.png"),
      chocolateMilk: require("@/assets/images/chocolate-milk.png"),
      heineken: require("@/assets/images/heineken.png"),
      stellaArtois: require("@/assets/images/stella-artois.png"),
      strongbow: require("@/assets/images/strongbow.png"),
      yuengling: require("@/assets/images/yuengling-lager.png"),
      chardonnay: require("@/assets/images/chardonnay.png"),
      cabernetSauvignon: require("@/assets/images/cabernet-sauvignon.png"),
      cupOfWater: require("@/assets/images/water-cup.png"),
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

.butterbeer-note {
  padding-right: 20rem;
  padding-left: 20rem;
}

.menu-row1 {
  display: flex;
  justify-content: space-between;
  margin-top: -2rem;
}

.menu-row2 {
  display: flex;
  justify-content: space-between;
  margin-top: -5rem;
}

.menu-row3 {
  display: flex;
  justify-content: space-between;
  margin-top: -5rem;
}

.menu-items1 {
  width: 100%;
  margin: 8rem;
  margin-top: 3.5rem;
  background-color: #0a0a0a;
  opacity: 0.9;
  z-index: -1;
}

.menu-items2, .menu-items3 {
  width: 40%;
  margin: 8rem;
  margin-top: 1rem;
  background-color: #0a0a0a;
  opacity: 0.9;
  z-index: -1;
}

.menu-items4 {
  width: 50%;
  margin-top: 10rem;
  margin: 10rem;
  background-color: #0a0a0a;
  opacity: 0.9;
  z-index: -1;
}

.menu-items5 {
  width: 50%;
  margin: 10rem;
  padding: 1rem;
  background-color: #0a0a0a;
  opacity: 0.9;
  z-index: -1;
}

.butterbeer-image {
  width: 300px;
}
</style>