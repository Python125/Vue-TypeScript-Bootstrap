<template>
  <div class="text-center">
    <img :src="leakyCauldronLogo" alt="Leaky Cauldron" class="m-4 rounded" />
  </div>
  <div class="intro-section text-white">
    <h1 class="fw-bold text-center">Fill up on Traditional British Food.</h1>
    <p class="intro-summary text-center h4 fw-normal">
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
          <a class="breakfast-link">Early Elixirs</a>
        </router-link>
      </div>
    </div>

    <div class="lunch">
      <img :src="lunch" alt="Fish and Chips" class="lunch-image" />
      <div>
        <router-link to="/lunch">
          <a class="lunch-link">Great Eats</a>
        </router-link>
      </div>
    </div>

    <div class="drink">
      <img :src="drinks" alt="Butterbeer" class="drink-image" />
      <div>
        <router-link to="/drinks">
          <a class="drink-link">Butterbeer & Beyond</a>
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

.intro-section {
  background-color: #0a0a0a;
  opacity: 0.8;
  z-index: -1;
}

.intro-summary {
  padding-left: 40rem;
  padding-right: 40rem;
}

.image-links {
  display: flex;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
  margin-top: 5rem;
}

.breakfast {
  background-color: black;
  border: 6px black solid;
}

.breakfast-image {
  width: 400px;
}

.breakfast-link {
  font-size: 1.5rem;
  color: white;
  opacity: 0.6;
}

.lunch {
  background-color: black;
  border: 6px black solid;
}

.lunch-image {
  width: 400px;
}

.lunch-link {
  font-size: 1.5rem;
  color: white;
  opacity: 0.6;
}

.drink {
  background-color: black;
  border: 6px black solid;
}

.drink-image {
  width: 400px;
}

.drink-link {
  font-size: 1.5rem;
  color: white;
  opacity: 0.6;
}
</style>