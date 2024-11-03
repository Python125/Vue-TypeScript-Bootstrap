<template>
  <h1 class="restaurant text-white text-center">Leaky Cauldron™</h1>
  <div class="menu-items text-white row py-5">
    <div class="beverages-items row">
      <p class="butterbeer-note text-center">
        Butterbeer™ is suitable for those with gluten, soy, egg, wheat, and nut
        allergies. The topping does contain trace amounts of dairy, so it is
        unsuitable for vegans or anyone with a dairy allergy. Please ensure to
        select the Non-Dairy option when selecting your cold or frozen
        Butterbeer™. Hot Butterbeer™ will remain unsuitable for vegans or anyone
        with a dairy allergy.
      </p>
      <div class="col text-center">
        <!-- <img :src="butterbeer" alt="Butterbeer"> -->
        <p class="fw-bold">Butterbeer™ - $8.99</p>
        <p>A non-alcoholic sweet drink reminiscent of shortbread and butterscotch</p>
        <p class="fw-bold">Frozen Butterbeer™ - $8.99</p>
        <p>A non-alcoholic sweet drink reminiscent of shortbread and butterscotch</p>
        <p class="fw-bold">Hot Butterbeer™ - $8.99</p>
        <p>A non-alcoholic sweet drink reminiscent of shortbread and butterscotch</p>
        <p class="fw-bold">Butterbeer™ Souvenirs</p>
        <p>A non-alcoholic sweet drink reminiscent of shortbread and butterscotch, served in a souvenir cup</p>
        <p class="fw-bold">Stainless Steel Butterbeer™ Souvenirs</p>
        <p>A non-alcoholic sweet drink reminiscent of shortbread and butterscotch, served in a souvenir cup</p>
        <p class="fw-bold">Frozen Butterbeer™ Souvenirs</p>
        <p>A non-alcoholic sweet drink reminiscent of shortbread and butterscotch, served in a souvenir cup</p>
        <p class="fw-bold">Pumpkin Juice™ - $5.49</p>
        <p class="fw-bold">Tongue Tying Lemon Squash - $6.49</p>
        <p>Sweet and tart lemon flavored beverage served with squashed lemon</p>
        <p class="fw-bold">Fishy Green Ale - $6.49</p>
        <p>Smooth and creamy with notes of mint and cinnamon and popping blueberry fish eggs</p>
      </div>

      <div class="col text-center">
        <p class="fw-bold">Fountain Beverages - $4.49</p>
        <p>Iced Tea, Lemonade, Cider</p>
        <p class="fw-bold">2% Milk - $2.99</p>
        <p class="fw-bold">Juice - $3.49</p>
        <p>orange, apple</p>
        <p class="fw-bold">Gillywater - $6.00</p>
        <p class="fw-bold">Otter's Fizzy Orange Juice - $6.49</p>
        <p>Effervescent fresh orange beverage with notes of vanilla and cinnamon</p>
        <p class="fw-bold">Peachtree Fizzing Tea - $6.49</p>
        <p>Fizzy but smooth with flavors of fresh peach nectar and ginger</p>
        <p class="fw-bold">Hot Beverages - $3.79</p>
        <p>Coffee, Decaf, Hot Tea</p>
        <p class="fw-bold">Chocolate Milk - $2.99</p>
        <p class="fw-bold">Courtesy Cup of Water - $0</p>
      </div>
      <div class="specialty-beer-items row">
        <h3 class="fw-bold text-center">Specialty Draught Beer</h3>
        <div class="col text-center">
          <p class="fw-bold">Dragon's Scale - $13.00</p>
          <p>unique lager with a light crisp, malty finish</p>
          <p class="fw-bold">Daisyroot Ale - $13.00</p>
          <p>refreshing traditional English Mild with a light malty flavor profile and a clean finish</p>
        </div>
        <div class="col text-center">
          <p class="fw-bold">Wizard's Brew - $13.00</p>
          <p>full bodied, sweet stout with a smooth, light sweetness and clean, dry finish</p>
          <p class="fw-bold">Dark Forest Ale - $13.00</p>
          <p>traditional brown ale with roasty caramel/toffee notes and warming finish</p>
        </div>
      </div>

      <div class="draught-beer-item row">
        <h3 class="fw-bold text-center">Draught Beer</h3>
        <div class="col text-start">
          <p class="fw-bold">Draught Beer - $11.25</p>
          <p>Heineken, Stella Artois, Strongbow, Yuengling</p>
        </div>
      </div>

      <div class="wine-items row">
        <h3 class="fw-bold text-center">Wine by the Glass</h3>
        <div class="col text-start">
          <p class="fw-bold py-3">Wine by the Glass - $11.00</p>
          <p>Chardonnay</p>
          <p>Cabernet Sauvignon</p>
        </div>
      </div>

      <div class="whisky-item row">
        <h3 class="fw-bold text-center py-3">Whisky</h3>
        <div class="col text-start">
          <p class="fw-bold">Fire Whisky - $12.50</p>
          <p>Fire Whisky, Fire and Strongbow Cocktail</p>
        </div>
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
    return {};
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

.menu-items {
  background-color: #0a0a0a;
  opacity: 0.6;
  z-index: -1;
}

.butterbeer-note {
  padding-right: 55rem;
  padding-left: 55rem;
}
</style>