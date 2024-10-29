<template>
  <div class="background-image">
    <!-- <Navbar
      :pages="pages"
      :activePage="activePage"
      @page-change="setActivePage"
    /> -->
    <router-view />

<!-- <footer>
  <p>&copy; 2024 Universal Studios. All rights reserved.</p>
  <p>Some imagery shown throughout our website does not represent current operational and safety guidelines.</p>
</footer> -->
  </div>
</template>

<script>
//import Navbar from "./components/NavbarMenu.vue";

export default {
  name: "App",
  components: {
    //Navbar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
* {
  color: black;
  z-index: 1;
}

.background-image {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 0;
}

.background-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/leaky-cauldron.png");
  background-size: cover;
  background-position: center;
  min-height: 100vh;
  z-index: -1;
}
</style>
