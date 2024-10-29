<template>
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
</template>

<script>
//import Navbar from "./components/NavbarMenu.vue";

export default {
  name: "App",
  components: {
    // Navbar,
  },
  data() {
    return {
      activePage: 0,
      pages: [
        //{ link: { text: "Home", url: "/" } }
      ],
    };
  },
};
</script>

<style lang="scss"></style>