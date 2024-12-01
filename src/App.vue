<template>
  <div class="background-image">
    <Navbar />
    <router-view />

    <div v-if="swipeMenu">
      <p class="menu-swipe text-center text-white">
        <span class="swipe-icon">👆</span> Swipe the image slider above to explore the full menu.
      </p>
    </div>

    <div v-if="showAllergyInfo" class="sensitivity-info text-white">
      <div class="info-row">
        <p class="note text-center text-white">Menu items and pricing are subject to change without notice</p>
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

    <FooterSection />
  </div>
</template>

<script lang="ts">
import Navbar from "./components/NavbarMenu.vue";
import FooterSection from "./components/FooterSection.vue";
import { computed } from "vue";
import { useRoute } from "vue-router";

export default {
  name: "App",
  components: {
    Navbar,
    FooterSection,
  },
  setup() {
    const route = useRoute(); // useRoute is a SPECIFIC function in Vue.js that returns the current route location

    // This is where I define where the slider instructions should be
    const swipeMenu = computed(() => {
      const routesWithswipeMenu = ["/breakfast", "/lunch", "/drinks"];
      return routesWithswipeMenu.includes(route.path);
    });

    // This is where I define where the allergy info should be
    const showAllergyInfo = computed(() => {
      const routesWithAllergyInfo = ["/breakfast", "/lunch", "/drinks"];
      return routesWithAllergyInfo.includes(route.path);
    });

    // This is where I define where the Back button should appear
    const showBackButton = computed(() => {
      const routesWithBackButton = ["/breakfast", "/lunch", "/drinks"];
      return routesWithBackButton.includes(route.path);
    });

    return {
      showBackButton,
      showAllergyInfo,
      swipeMenu,
    };
  },
};
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