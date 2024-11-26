<template>
  <div class="navbar-container">
    <div class="d-flex align-items-center justify-content-between px-3">
      <!-- Hamburger Icon -->
      <button class="menu-toggle-btn" @click="openNav">
        <svg fill="#ffffff" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3 6h18M3 12h18M3 18h18" stroke="#ffffff" stroke-width="2" fill="none" />
        </svg>
      </button>

      <!-- Mobile Sidebar -->
      <div :class="['sidenav', { open: isSidebarOpen }]">
        <a href="javascript:void(0)" class="closebtn" @click="closeNav">&times;</a>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <div class="logo-container">
        <a class="ms-5" href="/">
          <img src="@/assets/universal-orlando-logo.png" alt="Universal Logo" width="100" />
        </a>
      </div>

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
    const isSidebarOpen = ref(false);

    const openNav = () => {
      isSidebarOpen.value = true;
    };

    const closeNav = () => {
      isSidebarOpen.value = false;
    };

    return {
      isSidebarOpen,
      openNav,
      closeNav,
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar-container {
  background-color: #0368d9;
  padding: 0.5rem 1rem;
}

.menu-toggle-btn {
  background: none;
  border: none;
  padding: 0;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }
}

.sidenav {
  position: fixed;
  top: 0;
  left: 0;
  width: 97%; /* Full-screen width for mobile */
  height: 100%;
  background-color: #111;
  z-index: 1100;
  overflow-y: auto; /* Enable scrolling for long content */
  transition: transform 0.3s ease-in-out;
  transform: translateX(-100%); /* Hidden by default */

  &.open {
    transform: translateX(0);
  }

  .closebtn {
    position: absolute;
    top: 15px;
    right: 25px;
    font-size: 36px;
    color: white;
    cursor: pointer;
  }

  a {
    display: block;
    padding: 15px;
    text-decoration: none;
    font-size: 20px;
    color: #818181;
    transition: color 0.2s;

    &:hover {
      color: #f1f1f1;
    }
  }
}

.logo-container {
  flex-grow: 1;
  text-align: center;

  .navbar-logo {
    height: 32px;
    max-width: 100%;
  }
}

.nav-icon-link {
  text-decoration: none;

  .nav-icon {
    cursor: pointer;

    &:hover {
      opacity: 0.6;
    }
  }
}

.d-flex.align-items-center.gap-3 {
  gap: 1rem;
}
</style>