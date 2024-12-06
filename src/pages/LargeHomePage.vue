<template>
  <div class="layout-container">
    <div class="d-flex justify-content-center align-items-center text-white">
      <div class="dining-label text-white">DINING</div>
    </div>
    <div>
      <h1 class="leaky-title text-white text-center">Leaky Cauldron™</h1>
    </div>

    <aside class="side-section">
      <div class="d-flex justify-content-center align-items-center">
        <img
          class="universal-logo"
          :src="harryPotterLogo"
          alt="Universal logo"
        />
      </div>

      <div class="text-white">
        <h3 class="location-title">Location</h3>
      </div>
      <div class="universal-link text-white">
        The Wizarding World of Harry Potter™ - Diagon Alley™ in
        <a class="universal-title fw-bold" href="/"
          >Universal Studios Florida</a
        >
      </div>
      <a href="/"
        ><span class="map-link fw-bold">Explore Interactive Map</span></a
      >
      <div>
        <h3 class="park-title text-white fw-bold mt-4">Park Hours</h3>
        <div class="park-hours text-white fw-light h6">
          Open Today | 9 am-7 pm
        </div>
        <a href="/"><span class="park-link fw-bold">All Park Hours</span></a>
      </div>
    </aside>
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
      harryPotterLogo: require("@/assets/harry-potter-diagon-alley-logo.png"),
      breakfast: require("@/assets/images/english-breakfast.png"),
      lunch: require("@/assets/images/fish-and-chips.png"),
      drinks: require("@/assets/images/butterbeer.png"),
    };
  },
};
</script>

<style lang="scss" scoped>
.layout-container {
  padding: 1rem;
  max-width: 1200px;
  margin: 0 auto;

  .side-section {
    padding: 1rem;

    .universal-logo {
      border-radius: 50%;
      max-width: 100px;

      @media (min-width: 768px) {
        max-width: 150px;
      }
    }

    .location-title,
    .park-title {
      font-size: 1rem;

      @media (min-width: 768px) {
        font-size: 1.25rem;
      }
    }

    .map-link,
    .park-link {
      text-decoration: none;
      font-size: 0.9rem;
      color: #f08400;

      &:hover {
        text-decoration: underline;
      }
    }

    .universal-link {
      font-size: 0.95rem;
      line-height: 1.4;

      @media (min-width: 768px) {
        font-size: 1.1rem;
      }
    }

    .universal-title {
      color: #f08400;
    }
  }
}

.dining-label {
  margin: 1rem 0;
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.0125rem;
  line-height: 1.125;
  background-color: #f08400;
  border-radius: 8px;
  padding: 8px 14px;
  display: inline-flex;
  justify-content: center;
}

.leaky-title {
  font-size: 1.5rem;
  font-weight: 900;
  margin-bottom: 0.5rem;
}
</style>
