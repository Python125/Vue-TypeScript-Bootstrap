<template>
  <div class="background-image">
    <component :is="currentNavbar" />
    <component v-if="route.path === '/'" :is="currentHomePage" />
    <router-view v-else />

    <div v-if="swipeMenu">
      <p class="menu-swipe text-center text-white">
        <span class="swipe-icon">👆</span> Swipe the image slider above to
        explore the full menu.
      </p>
    </div>

    <div v-if="showAllergyInfo" class="sensitivity-info text-white">
      <div class="info-row">
        <p class="note text-center text-white">
          Menu items and pricing are subject to change without notice
        </p>
        <p><span class="fw-bold">GS</span> - Gluten Sensitive</p>
        <p><span class="fw-bold">DS</span> - Dairy Sensitive</p>
        <p><span class="fw-bold">ES</span> - Egg Sensitive</p>
        <p><span class="fw-bold">PS</span> - Peanut Sensitive</p>
        <p><span class="fw-bold">TNS</span> - Tree Nut Sensitive</p>
        <p><span class="fw-bold">FS</span> - Fish Sensitive</p>
        <p><span class="fw-bold">SFS</span> - Shellfish Sensitive</p>
        <p><span class="fw-bold">SES</span> - Sesame Sensitive</p>
        <p><span class="fw-bold">SS</span> - Soy Protein Sensitive</p>
      </div>
    </div>

    <div v-if="showBackButton">
      <router-link to="/">
        <button class="back-btn">Back</button>
      </router-link>
    </div>

    <component :is="currentFooter" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, onBeforeUnmount, } from "vue";
import { useRoute } from "vue-router";
import SmallScreenNavbar from "./components/SmallScreenNavbar.vue";
import LargeScreenNavbar from "./components/LargeScreenNavbar.vue";
import SmallFooterSection from "./components/SmallFooterSection.vue";
import LargeFooterSection from "./components/LargeFooterSection.vue";
import SmallHomePage from "./pages/SmallHomePage.vue";
import LargeHomePage from "./pages/LargeHomePage.vue";

export default defineComponent({
  name: "App",
  components: {
    SmallScreenNavbar,
    LargeScreenNavbar,
    SmallFooterSection,
    LargeFooterSection,
    SmallHomePage,
    LargeHomePage,
  },
  setup() {
    const route = useRoute();
    const isLargeScreen = ref(window.innerWidth >= 1024);

    const handleResize = () => {
      isLargeScreen.value = window.innerWidth >= 1024;
    };

    onMounted(() => {
      window.addEventListener("resize", handleResize);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", handleResize);
    });

    const currentHomePage = computed(() => {
      return isLargeScreen.value ? LargeHomePage : SmallHomePage;
    });

    const currentNavbar = computed(() => {
      return isLargeScreen.value ? LargeScreenNavbar : SmallScreenNavbar;
    });

    const currentFooter = computed(() => {
      return isLargeScreen.value ? LargeFooterSection : SmallFooterSection;
    });

    const swipeMenu = computed(() => {
      const routesWithSwipeMenu = ["/breakfast", "/lunch", "/drinks"];
      return routesWithSwipeMenu.includes(route.path);
    });

    const showAllergyInfo = computed(() => {
      const routesWithAllergyInfo = ["/breakfast", "/lunch", "/drinks"];
      return routesWithAllergyInfo.includes(route.path);
    });

    const showBackButton = computed(() => {
      const routesWithBackButton = ["/breakfast", "/lunch", "/drinks"];
      return routesWithBackButton.includes(route.path);
    });

    return {
      route,
      currentHomePage,
      currentNavbar,
      currentFooter,
      swipeMenu,
      showAllergyInfo,
      showBackButton,
    };
  },
});
</script>

<style lang="scss">
* {
  font-family: "Avenir Next", "Avenir Next W05", "Helvetica Neue", Helvetica,
    Arial, sans-serif !important;
}

.background-image {
  position: relative;
  height: 100%;
  width: 100%;
  z-index: 0;

  // @media only screen and (max-width: 430px) {
  //   height: 50%;
  //   width: 100%;
  // }
}

.background-image::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: url("@/assets/leaky-cauldron-web.png");
  background-size: cover;
  background-repeat: no-repeat;
  z-index: -1;

  @media only screen and (max-width: 430px) and (orientation: portrait) {
    background-image: url("@/assets/leaky-cauldron-mobile-portrait.png");
    background-size: contain;
  }

  @media only screen and (max-width: 932px) and (orientation: landscape) {
    background-image: url("@/assets/leaky-cauldron-mobile-landscape.png");
    background-size: contain;
  }

  @media only screen and (min-width: 431px) and (max-width: 768px) and (orientation: portrait) {
    background-image: url("@/assets/leaky-cauldron-tablet-protrait.png");
    background-size: contain;
  }

  @media only screen and (min-width: 769px) and (max-width: 1024px) and (orientation: landscape) {
    background-image: url("@/assets/leaky-cauldron-tablet-landscape.png");
    background-size: contain;
    margin-top: 15rem;
  }

  @media only screen and (min-width: 820px) and (max-width: 1024px) and (orientation: portrait) {
    background-image: url("@/assets/leaky-cauldron-tablet-protrait.png");
    background-size: contain;
  }

  @media only screen and (min-width: 1180px) and (max-width: 1024px) and (orientation: landscape) {
    background-image: url("@/assets/leaky-cauldron-tablet-landscape.png");
    background-size: contain;
    margin-top: 14rem;
  }

  @media only screen and (min-width: 1025px) and (max-width: 1180px) and (orientation: landscape) {
    background-image: url("@/assets/leaky-cauldron-tablet-landscape.png");
    background-size: contain;
    margin-top: 14rem;
  }

  @media only screen and (min-width: 1025px) {
    background-image: url("@/assets/leaky-cauldron-web.png");
    background-size: contain;
  }
}

.menu-swipe {
  font-size: 1rem;
}

.sensitivity-info {
  padding: 1rem;

  .info-row {
    font-size: 13px;
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    min-width: unset;
    padding: 0.5rem;

    p {
      flex: 1 1 auto;
    }
  }

  @media (max-width: 768px) {
    .info-row {
      flex-direction: row;
    }
  }

  @media (max-width: 430px) {
    .info-row {
      padding: 0.6rem;
    }

    p {
      font-size: 1rem;
    }
  }
}

.note {
  font-size: 14px;
}

.back-btn {
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  margin: 1.5rem;
}
</style>