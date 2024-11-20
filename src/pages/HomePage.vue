<template>
  <div class="layout-container d-flex">
    <aside class="side-section">
      <div>
        <img class="universal-logo" :src="universalLogo" alt="Universal logo" />
      </div>
      <div class="text-white"><h3 class="location-title">Location</h3></div>
      <div class="universal-link text-white fw-light">
        The Wizarding World of Harry Potter™ - Diagon Alley™ in
        <a class="universal-title fw-bold" href="/"
          >Universal Studios Florida</a
        >
      </div>
      <a href="/"><span class="map-link">Explore Interactive Map</span></a>
      <div>
        <h3 class="park-title text-white fw-bold h6 mt-4">Park Hours</h3>
        <div class="park-hours text-white fw-light h6">
          Open Today | 9 am-7 pm
        </div>
        <a href="/"><span class="park-link">All Park Hours</span></a>
      </div>
    </aside>
    <div class="info-section text-white">
      <div class="dining-label">Dining</div>
      <div><h1 class="dining-title">Leaky Cauldron™</h1></div>
    </div>
  </div>

  <div class="intro-summary text-white">
    <h1 class="fw-bold text-center">Fill up on Traditional British Food.</h1>
    <p class="text-center h4 fw-normal">
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
      universalLogo: require("@/assets/harry-potter-diagon-alley-logo.png"),
      breakfast: require("@/assets/images/english-breakfast.png"),
      lunch: require("@/assets/images/fish-and-chips.png"),
      drinks: require("@/assets/images/butterbeer.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  margin-top: 66px;
  margin-right: auto;
  margin-bottom: -350px;
  margin-left: auto;
  max-width: 1440px;
  width: 95.8333333333%;
}

.side-section {
  margin-left: 16.6666666667%;
  padding-left: 8px;
  padding-right: 8px;
  width: 16.6666666667%;
}

.universal-logo {
  border-radius: 50%;
  width: 184px;
  margin-top: 66px;
  overflow: hidden;
}

.location-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.0125rem;
  line-height: 1.25rem;
  font-style: normal;
}

.universal-link {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0125rem;
  line-height: 1.25rem;
  font-style: normal;
}

.universal-title {
  color: #0368d9;

  &:hover {
    text-decoration: underline;
  }
}

.map-link {
  text-align: left;
  min-height: 1.25rem;
  padding: 0.25rem 0;
  color: #0368d9;
  font-size: 0.875rem;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.0125rem;
  line-height: 2rem;
  text-shadow: none;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
}

.park-title {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.0125rem;
  line-height: 1.25rem;
  font-style: normal;
}

.park-hours {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0125rem;
  line-height: 1.25rem;
  font-style: normal;
}

.park-link {
  text-align: left;
  min-height: 1.25rem;
  padding: 0.25rem 0;
  color: #0368d9;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 600;
  letter-spacing: 0.0125rem;
  line-height: 2rem;
  text-shadow: none;
  align-items: center;
  display: inline-flex;
  cursor: pointer;
}

.info-section {
  box-sizing: border-box;
  padding-left: 8px;
  padding: 8px;
  width: 41.6666666667%;
  margin-left: 8.3333333333%;
}

.dining-label {
  margin-bottom: 24px;
  margin-top: 64px;
}

.dining-title {
  font-size: 2rem;
  font-weight: 900;
}

.intro-summary {
  background-color: #0a0a0a;
  opacity: 0.8;
  padding-left: 40rem;
  padding-right: 39rem;
  z-index: -1;
  margin-top: 15%;
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
  // opacity: 0.6;
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
  // opacity: 0.6;
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
  // opacity: 0.6;
}

a {
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}
</style>
