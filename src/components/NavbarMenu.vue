<template>
  <div class="navbar-container">
  <div class="d-flex align-items-center justify-content-between px-3">
    <!-- Hamburger Icon -->
    <button class="menu-toggle-btn">
      <svg class="nav-icon" fill="#ffffff" width="24" height="24" viewBox="0 0 24 24">
        <path d="M3 6h18M3 12h18M3 18h18" stroke="#ffffff" stroke-width="2" fill="none" />
      </svg>
    </button>

    <div class="logo-container">
      <a class="ms-5" href="/">
        <img src="@/assets/universal-orlando-logo.png" alt="Universal Logo" width="100" />
      </a>
    </div>

    <!-- Right Icons -->
    <div class="d-flex align-items-center gap-3">
      <!-- Search Icon -->
      <a href="/" class="nav-icon-link">
        <svg class="nav-icon" fill="#ffffff" width="24" height="24" viewBox="0 0 24 24">
          <path d="M11.1 3a8.1 8.1 0 1 0 0 16.2 8.1 8.1 0 0 0 0-16.2zm0 14.4a6.3 6.3 0 1 1 0-12.6 6.3 6.3 0 0 1 0 12.6zM15.9 16.6l3.3 3.3a.9.9 0 0 0 1.2-1.3l-3.3-3.3z"></path>
        </svg>
      </a>

      <!-- Cart Icon -->
      <a href="/" class="nav-icon-link">
        <svg class="nav-icon" fill="#ffffff" width="24" height="24" viewBox="0 0 24 24">
          <path d="M6.15 2.818A1 1 0 0 0 5.168 2H3a1 1 0 0 0-1 1l.003.075A1 1 0 0 0 3 4h1.335l2.253 12.182a1 1 0 0 0 .984.818h12.832a1 1 0 0 0 1-1l-.003-.075a1 1 0 0 0-.997-.925H8.403l-.185-1h12.186L22 6H6.739L6.15 2.818ZM9.51 22c1.106 0 2.003-.873 2.003-1.95 0-1.076-.897-1.948-2.003-1.948s-2.003.872-2.003 1.949c0 1.076.897 1.949 2.003 1.949Zm11.017-1.95c0 1.077-.897 1.95-2.003 1.95s-2.003-.873-2.003-1.95c0-1.076.897-1.948 2.003-1.948s2.003.872 2.003 1.949Z"></path>
        </svg>
      </a>
    </div>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "NavbarMenu",
  setup() {
    const isLocationDropdownOpen = ref(false);
    const isHelpDropdownOpen = ref(false);
    const isLanguageDropdownOpen = ref(false);

    const locations = ref<string[]>([
      "Universal Orlando Resort",
      "Universal Studios Hollywood, CA",
      "Universal Studios Japan",
      "Universal Beijing Resort",
      "Universal Studios Singapore",
    ]);

    const helpItems = ref<string[]>([
      "Contact Us",
      "FAQs",
      "Park Accessibility",
      "Park Guest Services",
      "Rider Safety",
    ]);

    const languageOptions = ref<string[]>([
      "English (US)",
      "English (UK)",
      "Español",
      "Portuguese",
    ]);

    const toggleLocationDropdown = () => {
      isLocationDropdownOpen.value = !isLocationDropdownOpen.value;
      isHelpDropdownOpen.value = false;
      isLanguageDropdownOpen.value = false;
    };

    const toggleHelpDropdown = () => {
      isHelpDropdownOpen.value = !isHelpDropdownOpen.value;
      isLocationDropdownOpen.value = false;
      isLanguageDropdownOpen.value = false;
    };

    const toggleLanguageDropdown = () => {
      isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value;
      isLocationDropdownOpen.value = false;
      isHelpDropdownOpen.value = false;
    };

    return {
      isLocationDropdownOpen,
      isHelpDropdownOpen,
      isLanguageDropdownOpen,

      locations,
      helpItems,
      languageOptions,

      toggleLocationDropdown,
      toggleHelpDropdown,
      toggleLanguageDropdown,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar-container {
  background-color: #0368d9;
  padding: 0.5rem 1rem; // Adds padding on both sides
}

.menu-toggle-btn {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;

  .nav-icon {
    width: 24px;
    height: 24px;
    cursor: pointer;
  }

  &:hover {
    opacity: 0.6;
  }
}

.logo-container {
  flex-grow: 1;
  text-align: center;

  .navbar-logo {
    height: 32px; // Adjust the size of the logo
    max-width: 100%;
  }
}

.nav-icon-link {
  text-decoration: none;

  .nav-icon {
    width: 24px;
    height: 24px;

    &:hover {
      opacity: 0.6;
    }
  }
}

.d-flex.align-items-center.gap-3 {
  gap: 1rem; // Adds spacing between the search and cart icons
}
</style>