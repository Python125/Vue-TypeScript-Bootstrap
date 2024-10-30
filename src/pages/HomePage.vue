<template>
  <div class="text-center">
    <img
      :src="leakyCauldronLogo"
      alt="Leaky Cauldron"
      class="rounded-3 mt-3"
      id="logo-image"
    />
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

  <div class="image-links">
    <div class="breakfast">
      <img :src="breakfast" alt="English Breakfast" class="breakfast-image" />
      <div>
        <router-link to="/breakfast">
          <a class="breakfast-link">Breakfast Menu</a>
        </router-link>
      </div>
    </div>

    <div class="lunch">
      <img :src="lunch" alt="Fish and Chips" class="lunch-image" />
      <div>
        <router-link to="/lunch">
          <a class="lunch-link">Lunch and Dinner Menu</a>
        </router-link>
      </div>
    </div>

    <div class="drinks">
      <img :src="drinks" alt="Butterbeer" class="drink-image" />
      <div>
        <router-link to="/drinks">
          <a class="drink-link">Drinks Menu</a>
        </router-link>
      </div>
    </div>
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

<style lang="scss" scoped>
a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.image-links {
  display: flex;
  justify-content: space-around;
  text-align: center;
  align-items: center;
  margin-top: 5rem;
}

.breakfast {
  background-color: aqua;
}

.breakfast-image {
  width: 400px;
}

.breakfast-link {
  font-size: 2rem;
}

.lunch-image {
  width: 400px;
}

.drink-image {
  width: 400px;
}
</style>
