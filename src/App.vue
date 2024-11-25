<template>
  <div class="background-image">
    <Navbar
      :pages="pages"
      :activePage="activePage"
      @page-change="setActivePage"
    />
    <router-view />

    <div v-if="showBackButton">
      <router-link to="/">
        <button class="back-btn">Back</button>
      </router-link>
    </div>

    <!-- <footer></footer> -->
  </div>
</template>

<script lang="ts">
import Navbar from "./components/NavbarMenu.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  components: {
    Navbar,
  },
  setup() {
    const route = useRoute(); // useRoute is a SPECIFIC function in Vue.js that returns the current route location
    
    // This is where I define where the Back button should appear
    const showBackButton = computed(() => {
      const routesWithBackButton = ["/breakfast", "/lunch", "/drinks"];
      return routesWithBackButton.includes(route.path);
    })

    return {
      showBackButton,
    };
  },  
};
</script>

<style lang="scss">
.background-image {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 0;

  @media only screen and (max-width: 430px) {
    height: 50%;
  }
}

.background-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  // background-image: url("@/assets/leaky-cauldron-web.png");
  background-size: cover;
  background-position: center;
  z-index: -1;

  // @media only screen and (max-width: 430px) {
  //   background-image: url("@/assets/leaky-cauldron-mobile.png");
  // }
}

.back-btn {
  background-color: #007bff; // Check with Dad for this to get a second pair of eyes
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin: 1.5rem;
}
</style>