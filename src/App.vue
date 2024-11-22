<template>
  <div class="background-image">
    <Navbar
      :pages="pages"
      :activePage="activePage"
      @page-change="setActivePage"
    />
    <router-view />

    <!-- <footer></footer> -->
  </div>
</template>

<script>
import Navbar from "./components/NavbarMenu.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
  data() {
    return {};
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
</style>