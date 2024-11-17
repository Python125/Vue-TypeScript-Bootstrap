<template>
  <h1 class="restaurant text-white text-center">Leaky Cauldron™</h1>

  <div class="lunch-intro">
    <h2 class="fw-bold text-white text-center">Lunch and Dinner Menu</h2>
    <p class="p-3 h4 text-white text-center">
      Allergen Note: Please inform a manager or Chef's Assistant prior to
      ordering if someone in your party requires special dietary accommodations
    </p>
  </div>

  <h3 class="fw-bold text-center text-white mt-5">Entrées</h3>
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
        <img class="w-25" :src="huntersChicken" alt="Hunter's Chicken" />
        <p><b>Hunter's Chicken (ES, FS, PS, SES, SFS, TNS) - $16.99</b> - Bacon wrapped chicken breast with BBQ gravy, Monterey & Cheddar cheese blend, English minted peas, pea tendrils and chips</p>
        <img class="w-25" :src="fishAndChips" alt="Fish and Chips" />
        <p class="py-2"><b>Fish & Chips (PS, SFS, TNS) - $17.99</b> - Fresh north Atlantic cod battered and fried with chips and tartar sauce (Request no tartar sauce for egg-sensitive options.)</p>
        <img class="w-25" :src="fishermanPie" alt="Fisherman's Pie" />
        <p class="py-2"><b>Fisherman's Pie (ES, GS, PS, SES, SS, TNS) - $18.99</b> - Salmon, shrimp and cod baked together under a potato crust served with garden salad</p>
        <img class="w-25" :src="scotchEggs" alt="Scotch Eggs" />
        <p class="py-2"><b>Scotch Eggs (PS, SFS, TNS) - $13.99</b> - Hard-boiled eggs wrapped in pork sausage, dusted with bread crumbs and fried. Served warm with apple beet salad and mustard sauce</p>
        <img class="w-25" :src="soupAndSalad" alt="Soup & Salad" />
        <p class="py-2"><b>Soup & Salad (ES, FS, PS, SES, SFS, TNS) - $12.99</b> - Split Pea & Ham soup served with side garden salad</p>
        <img class="w-25" :src="ploughmansPlatter" alt="Ploughman's" />
        <p class="py-2"><b>Ploughman's (PS, SFS, TNS) - $23.99 (Serves 2)</b> - A feast of English cheese, crusty bread, field green salad, roasted tomatoes, cornichon pickles, apple beet salad, Branston pickle & scotch eggs (Request no scotch egg for egg-sensitive options, or request no scotch egg sauce for fish-sensitive options.)</p>
      </div>
    </div>
  </div>

  <div class="menu-row2">
    <div class="menu-items3 text-white row py-4">
      <h2 class="fw-bold text-center">Kids' Entrées - For children 9 and under</h2>
      <div class="col text-center">
        <img class="w-25" :src="kidsMacCheese" alt="Kids Macaroni Cheese">
        <p><b>Macaroni Cheese (ES, FS, PS, SES, SFS, SS, TNS, V) - $8.29</b> - Served with grapes and applesauce</p>
        <img class="w-25" :src="kidsPie" alt="Kids Mini Pie">
        <p><b>Mini Pie (ES, FS, PS, SES, SFS, TNS) - $8.29</b> - Served with grapes and applesauce</p>
        <img class="w-25" :src="kidsFishChips" alt="Kids Fish & Chips">
        <p><b>Fish & Chips (PS, SFS, TNS) - $8.29</b> - Served with chips and tartar sauce (Request no tartar sauce for egg-sensitive options.)</p>
      </div>
    </div>
    <div class="menu-items4 text-white row py-4">
      <h2 class="fw-bold text-center py-1">Sandwiches</h2>
      <p class="text-center">Served with chips</p>
      <p class="text-center py-2">Gluten-free buns are available upon request.</p>
      <div class="col text-center">
        <img class="w-25" :src="bangerSandwich" alt="Banger Sandwich">
        <p class="mb-5"><b>Banger (DS, FS, PS, SES, SFS, SS, TNS) - $14.99</b> - Roasted English sausage, mustard aioli, roasted tomatoes, sautéed cabbage and onions on a crusted baguette (Request no mustard aioli for egg-sensitive options.)</p>
        <img class="w-25" :src="specialtyChicken" alt="Specialty Chicken">
        <p class="mb-5"><b>Specialty Chicken (FS, PS, SES, SFS, SS, TNS) - $15.99</b> - Grilled chicken breast, apple butter mayo, Colby cheese, smoky apple bacon, roasted tomatoes on a housemade specialty bun</p>
      </div>
    </div>
  </div>

  <div class="menu-row3">
    <div class="menu-items5 text-white row py-4">
      <h2 class="fw-bold text-center">Sides</h2>
      <div class="col text-center">
        <img class="w-25" :src="chips" alt="Chips">
        <p class="fw-bold">Chips (DS, ES, FS, GS, PS, SES, SFS, SS, TNS, VG) - $4.99</p>

        <img class="w-25" :src="mashPotatoesGravy" alt="Mashed Potatoes with Gravy">
        <p class="fw-bold">Mashed Potatoes with Gravy (ES, FS, PS, SES, SFS, TNS) - $3.99</p>

        <img class="w-25" :src="sideGardenSalad" alt="Side Garden Salad">
        <p class="fw-bold">Side Garden Salad (DS, ES, FS, GS, PS, SES, SFS, SS, TNS, VG) - $6.99</p>

        <img class="w-25" :src="scotchEggSide" alt="Side of scotch eggs">
        <p><b>Scotch Egg (PS, SFS, TNS) - $5.49</b> - Hard-boiled egg wrapped in pork sausage, dusted with bread crumbs and fried</p>

        <img class="w-25" :src="bangerSide" alt="Sanger Side">
        <p class="fw-bold">Add Banger (1 each) (DS, ES, FS, PS, SES, SFS, TNS) - $5.49</p>
      </div>
    </div>
    <div class="menu-items6 text-white row py-4">
      <h2 class="fw-bold text-center">Desserts</h2>
      <p class="text-center">All bakery items are made in a facility where cross-contamination with gluten, soy, peanuts, and tree nuts is possible</p>
      <div class="col text-center">
        <img class="w-25" :src="stickyToffeePudding" alt="Sticky Toffee Pudding">
        <p class="fw-bold">Sticky Toffee Pudding (FS, PS, SES, SFS, SS, V) - $7.99</p>
        <img class="w-25" :src="butterbeerPottedCream" alt="Butterbeer™ Potted Cream">
        <p class="fw-bold">Butterbeer™ Potted Cream (ES, FS, GS, PS, SES, SFS, SS, TNS, V) - $6.49</p>
        <img class="w-25" :src="butterbeerIceCreamCone" alt="Butterbeer™ Ice Cream">
        <p class="fw-bold">Butterbeer™ Ice Cream (ES, FS, GS, PS, SES, SFS, SS, TNS, V) - $6.49</p>
        <img class="w-25" :src="cranachan" alt="Cranachan">
        <p class="fw-bold">Cranachan (ES, FS, PS, SES, SFS, SS, TNS, V) - $6.99</p>
        <img class="w-25" :src="chocolatePottedCream" alt="Chocolate Potted Cream">
        <p class="fw-bold">Chocolate Potted Cream (FS, GS, PS, SES, SFS, SS, TNS, V) - $5.29</p>
        <img class="w-25" :src="butterbeerIceCreamCup" alt="Cup of Ice Cream">
        <p><b>Cup of Ice Cream (ES, FS, GS, SES, SFS, SS, TNS, V) - $6.49</b> - Strawberry and Peanut Butter, Vanilla or Chocolate</p>
      </div>
    </div>
  </div>

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
      huntersChicken: require("@/assets/images/hunters-chicken.png"),
      fishAndChips: require("@/assets/images/fish-and-chips.png"),
      fishermanPie: require("@/assets/images/fishermans-pie.png"),
      scotchEggs: require("@/assets/images/scotch-eggs.png"),
      soupAndSalad: require("@/assets/images/soup-and-salad.png"),
      ploughmansPlatter: require("@/assets/images/ploughmans-platter.png"),
      kidsMacCheese: require("@/assets/images/kids-mac-and-cheese.png"),
      kidsPie: require("@/assets/images/kids-mini-pie.png"),
      kidsFishChips: require("@/assets/images/kids-fish-and-chips.png"),
      bangerSandwich: require("@/assets/images/banger-sandwich.png"),
      specialtyChicken: require("@/assets/images/specialty-chicken.png"),
      chips: require("@/assets/images/chips.png"),
      mashPotatoesGravy: require("@/assets/images/mashed-potatoes-side.png"),
      sideGardenSalad: require("@/assets/images/side-salad.png"),
      scotchEggSide: require("@/assets/images/scotch-egg.png"),
      bangerSide: require("@/assets/images/banger-side.png"),
      stickyToffeePudding: require("@/assets/images/sticky-toffee-pudding.png"),
      butterbeerPottedCream: require("@/assets/images/butterbeer-potted-cream.png"),
      butterbeerIceCreamCone: require("@/assets/images/butterbeer-ice-cream-cone.png"),
      cranachan: require("@/assets/images/cranachan.png"),
      chocolatePottedCream: require("@/assets/images/chocolate-potted-cream.png"),
      butterbeerIceCreamCup: require("@/assets/images/butterbeer-ice-cream-cup.png"),
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