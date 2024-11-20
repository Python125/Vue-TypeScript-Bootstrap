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
      <div class="dining-label">DINING</div>
      <div><h1 class="leaky-title">Leaky Cauldron™</h1></div>

      <ul class="dining-features">
        <li class="dining-type">
          <div class="dining-icon">
            <svg
              id="gds-svg-372"
              fill="#ffffff"
              stroke="none"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              version="1.1"
              focusable="false"
              class="dinning-quick-serve"
            >
              <g>
                <path
                  d="M16.2021661,6.45583796 L16.2021661,2.99013399 C16.2021661,2.81684879 16.2888087,2.81684879 16.4620939,2.81684879 C17.4151625,2.90349139 19.66787,2.99013399 19.66787,2.99013399 L19.7545126,1.690495 C19.7545126,1.690495 17.5884477,1.6038524 16.6353791,1.5172098 C16.0288809,1.4305672 15.5956679,1.690495 15.4223827,1.8637802 C14.9025271,2.2103506 14.9025271,2.81684879 14.9025271,2.90349139 L14.9025271,6.45583796 L16.2021661,6.45583796 Z M15.7689531,17.8926611 C15.7689531,17.1995203 15.2490975,16.5063795 14.5559567,16.3330943 C14.1227437,13.8204589 11.3501805,11.8276791 7.97111913,11.8276791 C4.67870036,11.8276791 1.90613718,13.7338163 1.47292419,16.2464517 C0.606498195,16.4197369 0,17.1128777 0,17.8926611 C0,18.6724445 0.606498195,19.3655853 1.38628159,19.5388705 L1.38628159,19.9720834 C1.38628159,21.0984372 2.42599278,22.0515058 3.72563177,22.0515058 L12.3032491,22.0515058 C13.6028881,22.0515058 14.6425993,21.0984372 14.6425993,19.9720834 L14.6425993,19.4522279 C15.2490975,19.2789427 15.7689531,18.6724445 15.7689531,17.8926611 Z M7.27797834,13.1273181 C7.62454874,13.1273181 7.97111913,13.3872459 7.97111913,13.7338163 C7.97111913,14.0803867 7.62454874,14.3403145 7.27797834,14.3403145 C6.93140794,14.3403145 6.58483755,14.0803867 6.58483755,13.7338163 C6.58483755,13.4738885 6.84476534,13.1273181 7.27797834,13.1273181 Z M5.28519856,13.9937441 C5.63176895,13.9937441 5.97833935,14.2536719 5.97833935,14.6002423 C5.97833935,14.9468127 5.63176895,15.2067405 5.28519856,15.2067405 C4.93862816,15.2067405 4.59205776,14.9468127 4.59205776,14.6002423 C4.50541516,14.3403145 4.85198556,13.9937441 5.28519856,13.9937441 Z M13.8628159,18.8457297 L1.81949458,18.8457297 C1.29963899,18.8457297 0.866425993,18.4125167 0.866425993,17.9793037 C0.866425993,17.4594481 1.29963899,17.1128777 1.81949458,17.1128777 L13.8628159,17.1128777 C14.3826715,17.1128777 14.8158845,17.5460907 14.8158845,17.9793037 C14.8158845,18.4125167 14.3826715,18.8457297 13.8628159,18.8457297 Z M9.96389892,11.2211809 C12.8231047,11.8276791 14.9891697,13.7338163 15.4223827,16.0731665 C16.2888087,16.4197369 16.8953069,17.1995203 16.8953069,18.0659463 C16.8953069,18.9323723 16.3754513,19.6255131 15.5090253,19.9720834 L15.5090253,19.9720834 C15.5090253,20.7518668 15.1624549,21.4450076 14.6425993,21.9648632 L20.2743682,21.9648632 L22.0938628,10.4413975 L9.79061372,10.4413975 L9.96389892,11.2211809 Z M19.1480144,13.3872459 C19.1480144,13.3006033 19.234657,13.2139607 19.4079422,13.2139607 C19.4945848,13.2139607 19.66787,13.3006033 19.5812274,13.4738885 L18.8880866,19.1923001 C18.8880866,19.2789427 18.801444,19.3655853 18.6281588,19.3655853 L18.6281588,19.3655853 C18.5415162,19.3655853 18.368231,19.2789427 18.4548736,19.1056575 L19.1480144,13.3872459 Z M22.5270758,7.14897876 L9.44404332,7.14897876 C8.66425993,7.14897876 7.97111913,7.75547695 7.97111913,8.44861775 C7.97111913,9.14175854 8.57761733,9.74825673 9.44404332,9.74825673 L22.5270758,9.74825673 C23.3068592,9.74825673 24,9.14175854 24,8.44861775 C23.9133574,7.75547695 23.3068592,7.14897876 22.5270758,7.14897876 Z"
                ></path>
              </g>
            </svg>
          </div>

          <div class="dining-title">Dining Type</div>
        </li>
      </ul>
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
  margin-top: 64px;
  font-size: 0.625rem;
  font-weight: 700;
  letter-spacing: 0.0125rem;
  line-height: 0.875;
  font-style: normal;
  margin-bottom: 16px;
  align-items: center;
  box-sizing: border-box;
  background-color: #f08400;
  border-radius: 8px;
  display: inline-flex;
  justify-content: center;
  min-height: 24px;
  padding: 4px 12px;
}

.leaky-title {
  font-size: 1.75rem;
  font-weight: 900;
  letter-spacing: 0.0125rem;
  line-height: 2.125rem;
  font-style: normal;
  margin-bottom: 16px;
}

.dining-features {
  color: white;
  margin-left: 0;
  margin-right: 0;
  width: 100%;
  row-gap: 16px;
  list-style-type: none;
  box-sizing: border-box;
  display: flex;
  flex-wrap: wrap;
  list-style-position: outside;
  line-height: 1.6;

  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  unicode-bidi: isolate;
}

.dining-type {
  display: flex;
  flex-direction: row;
  align-items: start;
}

.dining-icon {
  background-color: rgba(0, 0, 0, 0);
  display: block;
  float: left;
  height: 24px;
  margin-right: 8px;
  min-width: 24px;
  position: relative;
  width: 24px;
  // line-height: 0;
}

.dining-title {
  font-size: 0.875rem;
  font-weight: 600;
  font-style: normal;
  letter-spacing: 0.0125rem;
  line-height: 1.125rem;
}

.quick-service {
  font-size: 0.75rem;
  font-weight: 400;
  letter-spacing: 0.0125rem;
  line-height: 1.25rem;
  font-style: normal;
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
