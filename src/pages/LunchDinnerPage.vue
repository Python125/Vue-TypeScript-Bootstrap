<template>
  <h1 class="restaurant text-white text-center">Leaky Cauldron™</h1>

  <div class="lunch-intro">
    <h2 class="fw-bold text-white text-center">Lunch and Dinner Menu</h2>
    <p class="p-3 h4 text-white text-center">
      Allergen Note: Please inform a manager or Chef's Assistant prior to
      ordering if someone in your party requires special dietary accommodations
    </p>
  </div>

  <h3 class="fw-bold text-center text-white mt-2">Entrées</h3>
  <div class="menu-row1">
    <div class="menu-items1 text-white row py-4">
      <div class="col text-center">
        <img class="w-25" :src="beefLambGuinnessStew" alt="Beef Lamb Guinness Stew" />
        <p><b>Beef, Lamb & Guinness Stew (DS, ES, FS, PS, SES, SFS, SS, TNS) - $17.99</b> - Served in a warm, crusty bread bowl</p>
        
        <img class="w-25" :src="cottagePie" alt="Cottage Pie" />
        <p class="py-2"><b>Cottage Pie (ES, FS, PS, SES, SFS, TNS) - $17.99</b> - Savory combination of beef and chunky vegetables in a potato crust served with a garden salad</p>
        
        <img class="w-25" :src="bangersAndMash" alt="Bangers & Mash" />
        <p class="py-2"><b>Bangers & Mash (ES, FS, PS, SES, SFS, TNS) - $16.99</b> - Roasted English sausage, creamy mashed potatoes, roasted tomatoes, sautéed onions and cabbage, minted peas & onion gravy (Request no sauce for soy protein-sensitive options.)</p>
        
        <img class="w-25" :src="miniPieCombo" alt="Mini Pie Combination" />
        <p class="py-2"><b>Mini Pie Combination (ES, PS, SES, TNS) - $18.99</b> - Mini cottage pie and mini fisherman's pie served with garden salad</p>
        
        <img class="w-25" :src="veganCurry" alt="Vegan Curry" />
        <p class="py-2"><b>Vegan Curry (DS, ES, FS, PS, SFS, VG) - $17.99</b> - Plant based Chick`n and potato curry with pita and served with garden salad</p>
        
        <img class="w-25" :src="shepherdsPie" alt="Shepherd's Pasty Pie" />
        <p class="py-2"><b>Shepherd's Pasty Pie (DS, ES, FS, SES, SFS, VG) - $17.99</b> - Meatless beef crumbles and vegetable stew hand pie; served with creamy stone ground mustard dipping sauce, apple beet salad, and chips</p>
      </div>
    </div>
    <div class="menu-items2 text-white row py-4">
      <div class="col text-center">
        <p><b>Hunter's Chicken (ES, FS, PS, SES, SFS, TNS) - $16.99</b> - Bacon wrapped chicken breast with BBQ gravy, Monterey & Cheddar cheese blend, English minted peas, pea tendrils and chips</p>
        <p class="py-2"><b>Fish & Chips (PS, SFS, TNS) - $17.99</b> - Fresh north Atlantic cod battered and fried with chips and tartar sauce (Request no tartar sauce for egg-sensitive options.)</p>
        <p class="py-2"><b>Fisherman's Pie (ES, GS, PS, SES, SS, TNS) - $18.99</b> - Salmon, shrimp and cod baked together under a potato crust served with garden salad</p>
        <p class="py-2"><b>Scotch Eggs (PS, SFS, TNS) - $13.99</b> - Hard-boiled eggs wrapped in pork sausage, dusted with bread crumbs and fried. Served warm with apple beet salad and mustard sauce</p>
        <p class="py-2"><b>Soup & Salad (ES, FS, PS, SES, SFS, TNS) - $12.99</b> - Split Pea & Ham soup served with side garden salad</p>
        <p class="py-2"><b>Ploughman's (PS, SFS, TNS) - $23.99 (Serves 2)</b> - A feast of English cheese, crusty bread, field green salad, roasted tomatoes, cornichon pickles, apple beet salad, Branston pickle & scotch eggs (Request no scotch egg for egg-sensitive options, or request no scotch egg sauce for fish-sensitive options.)</p>
      </div>
    </div>
  </div>

  <!-- <div class="menu-row2">
    <div class="menu-items3 text-white row py-4">
      <h2 class="fw-bold text-center">Sides</h2>
      <div class="col text-center">
        <p>Chips (DS, ES, FS, GS, PS, SES, SFS, SS, TNS, VG) - $4.99</p>
        <p>Mashed Potatoes with Gravy (ES, FS, PS, SES, SFS, TNS) - $3.99</p>
        <p>Side Garden Salad (DS, ES, FS, GS, PS, SES, SFS, SS, TNS, VG) - $6.99</p>
      </div>
      <div class="col text-center">
        <p>Scotch Egg (PS, SFS, TNS) - $5.49</p>
        <p>Add Banger (1 each) (DS, ES, FS, PS, SES, SFS, TNS) - $5.49</p>
      </div>
    </div>

    <div class="menu-items4 text-white row py-4">
      <h2 class="fw-bold text-center">Sandwiches</h2>
      <p class="text-center">Served with chips</p>
      <p class="text-center">Gluten-free buns are available upon request.</p>
      <div class="col text-center">
        <p><b>Banger (DS, FS, PS, SES, SFS, SS, TNS) - $14.99</b> - Roasted English sausage, mustard aioli, roasted tomatoes, sautéed cabbage and onions on a crusted baguette (Request no mustard aioli for egg-sensitive options.)</p>
      </div>
      <div class="col text-center">
        <p><b>Specialty Chicken (FS, PS, SES, SFS, SS, TNS) - $15.99</b> - Grilled chicken breast, apple butter mayo, Colby cheese, smoky apple bacon, roasted tomatoes on a housemade specialty bun</p>
      </div>
    </div>
  </div> -->

  <!-- <div class="menu-row3">
    <div class="menu-items5 text-white row py-4">
      <h2 class="fw-bold text-center">Kids' Entrées - For children 9 and under</h2>
      <div class="col text-center">
        <p>Macaroni Cheese (ES, FS, PS, SES, SFS, SS, TNS, V) - $8.29</p>
        <p>served with grapes and applesauce</p>
        <p>Mini Pie (ES, FS, PS, SES, SFS, TNS) - $8.29</p>
        <p>served with grapes and applesauce</p>
      </div>
      <div class="col text-center">
        <p>Fish & Chips (PS, SFS, TNS) - $8.29</p>
        <p>served with chips and tartar sauce</p>
        <p>(Request no tartar sauce for egg-sensitive options.)</p>
      </div>
    </div>
    <div class="menu-items6 text-white row py-4">
      <h2 class="fw-bold text-center">Desserts</h2>
      <p class="text-center">All bakery items are made in a facility where cross-contamination with gluten, soy, peanuts, and tree nuts is possible</p>
      <div class="col text-center">
        <p>Sticky Toffee Pudding (FS, PS, SES, SFS, SS, V) - $7.99</p>
        <p>Butterbeer™ Potted Cream (ES, FS, GS, PS, SES, SFS, SS, TNS, V) - $6.49</p>
        <p>Butterbeer™ Ice Cream (ES, FS, GS, PS, SES, SFS, SS, TNS, V) - $6.49</p>
      </div>
      <div class="col text-center">
        <p>Cranachan (ES, FS, PS, SES, SFS, SS, TNS, V) - $6.99</p>
        <p>Chocolate Potted Cream (FS, GS, PS, SES, SFS, SS, TNS, V) - $5.29</p>
        <p>Cup of Ice Cream (ES, FS, GS, SES, SFS, SS, TNS, V) - $6.49</p>
        <p>Strawberry and Peanut Butter, Vanilla or Chocolate</p>
      </div>
    </div>
  </div> -->

  <div class="allergies ms-5 text-white">
    <div class="d-flex px-3">
      <p class="px-2"><span class="fw-bolder">GS</span> - Gluten Sensitive</p>
      <p class="px-2"><span class="fw-bolder">DS</span> - Dairy Sensitive</p>
      <p class="px-2"><span class="fw-bolder">ES</span> - Egg Sensitive</p>
      <p class="px-2"><span class="fw-bolder">PS</span> - Peanut Sensitive</p>
      <p class="px-2"><span class="fw-bolder">TNS</span> - Tree Nut Sensitive</p>
      <p><span class="fw-bolder">FS</span> - Fish Sensitive</p>
    </div>
    <div class="d-flex px-3">
      <p class="px-2"><span class="fw-bolder">SFS</span> - Shellfish Sensitive</p>
      <p class="px-2"><span class="fw-bolder">SES</span> - Sesame Sensitive</p>
      <p class="px-2"><span class="fw-bolder">SS</span> - Soy Protein Sensitive</p>
    </div>
  </div>
  <p class="note px-4 py-3 ms-5 text-white">
    Menu items and pricing are subject to change without notice
  </p>

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
export default /* class HomeView extends Vue */ {
  data() {
    return {
      beefLambGuinnessStew: require("@/assets/images/beef-lamb-guinness-stew.png"),
      cottagePie: require("@/assets/images/cottage-pie.png"),
      bangersAndMash: require("@/assets/images/bangers-and-mash.png"),
      miniPieCombo: require("@/assets/images/mini-pie-combo.png"),
      veganCurry: require("@/assets/images/vegan-curry.png"),
      shepherdsPie: require("@/assets/images/shepherds-pasty-pie.png"),

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

.lunch-intro {
  background-color: #0a0a0a;
  opacity: 0.8;
  width: 40%;
  margin-top: 1rem;
  margin-left: 47.7rem;
  padding: 1rem;
  z-index: -1;
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

.menu-row3 {
  display: flex;
  justify-content: space-between;
  margin-top: -2rem;
}

.menu-items1,
.menu-items2,
.menu-items3,
.menu-items4,
.menu-items5,
.menu-items6 {
  width: 40%;
  margin: 10rem;
  margin-top: 3rem;
  padding: 4rem;
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