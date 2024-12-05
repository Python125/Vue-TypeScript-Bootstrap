<template>
  <div class="navbar-container text-white">
    <div class="top-navbar d-flex">
      <svg
        class="location-symbol"
        id="gds-svg-389"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        version="1.1"
        focusable="false"
      >
        <g transform="translate(2.000000, 2.000000)">
          <path
            fill="#ffffff"
            d="M10.2342823,11.2534599 C8.2334915,11.2534599 6.58857256,9.77461447 6.39086595,7.88453934 C6.37504943,7.75800712 6.37504943,7.62356663 6.37504943,7.4970344 C6.37504943,5.4250692 8.09905101,3.7485172 10.2421906,3.7485172 C12.3774219,3.7485172 14.1093318,5.4250692 14.1093318,7.4970344 C14.1093318,8.27204429 13.8641756,8.99960459 13.4450376,9.60063266 C12.7491103,10.5970739 11.570779,11.2534599 10.2342823,11.2534599 Z M10.2421906,0 C5.97172796,0 2.5,3.36101226 2.5,7.4970344 C2.5,9.83788059 3.67042309,12.605773 5.96381969,15.7216291 C7.62455516,17.9675761 9.26156584,19.5650455 9.32483195,19.6362198 C9.5778964,19.8734678 9.9100435,20 10.2421906,20 C10.5664294,20 10.8985765,19.881376 11.151641,19.6362198 C11.2228153,19.5650455 12.859826,17.9675761 14.5126532,15.7216291 C16.8139581,12.605773 17.9764729,9.83788059 17.9764729,7.4970344 C17.9764729,3.36101226 14.504745,0 10.2421906,0 Z"
          ></path>
        </g>
      </svg>
      <div class="dropdown location-dropdown">
        <div class="location-selection d-flex">
          <div class="location-text d-flex">
            <button
              class="caret-btn text-white"
              type="button"
              @click="toggleDropdown('location')"
            >
              Select Location
            </button>
          </div>
          <svg
            id="gds-svg-598"
            width="13"
            height="11"
            viewBox="0 0 16 11"
            version="1.1"
            focusable="false"
            class="ms-1 mt-2"
          >
            <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
              <g transform="translate(-1256.000000, -4877.000000)">
                <g transform="translate(1254.000000, 4872.000000)">
                  <circle cx="10" cy="10" r="10"></circle>
                  <g
                    transform="translate(10.000000, 10.454545) rotate(90.000000) translate(-10.000000, -10.454545) translate(5.000000, 2.454545)"
                    fill="#0368D9"
                  >
                    <path
                      fill="#ffffff"
                      d="M0.191136012,15.0150334 C-0.0642242506,15.2408104 -0.0636359733,15.6063486 0.192449966,15.8314858 C0.448535906,16.056623 0.863144972,16.0561044 1.11850523,15.8303274 L10,7.97774631 L1.11718941,0.16851254 C0.861102437,-0.0566237496 0.446493373,-0.0561036216 0.191134145,0.169674278 C-0.0642250836,0.395452178 -0.0636351321,0.760990353 0.192451838,0.986126642 L8.14788573,7.98006649 L0.191136012,15.0150334 Z"
                    ></path>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
        <ul
          :class="['dropdown-menu', { show: isLocationDropdownOpen }]"
          v-if="isLocationDropdownOpen"
        >
          <li v-for="(location, index) in locations" :key="index">
            <a class="dropdown-item" href="#">{{ location }}</a>
          </li>
        </ul>
      </div>
      <div class="dropdown help-dropdown d-flex">
        <div class="help-selection">
          <div class="help-text">
            <button
              class="caret-btn text-white"
              type="button"
              @click="toggleDropdown('help')"
            >
              Help
            </button>
          </div>
        </div>
        <svg
          id="gds-svg-598"
          width="13"
          height="11"
          viewBox="0 0 16 11"
          version="1.1"
          focusable="false"
          class="mt-1"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1256.000000, -4877.000000)">
              <g transform="translate(1254.000000, 4872.000000)">
                <circle cx="10" cy="10" r="10"></circle>
                <g
                  transform="translate(10.000000, 10.454545) rotate(90.000000) translate(-10.000000, -10.454545) translate(5.000000, 2.454545)"
                  fill="#0368D9"
                >
                  <path
                    fill="#ffffff"
                    d="M0.191136012,15.0150334 C-0.0642242506,15.2408104 -0.0636359733,15.6063486 0.192449966,15.8314858 C0.448535906,16.056623 0.863144972,16.0561044 1.11850523,15.8303274 L10,7.97774631 L1.11718941,0.16851254 C0.861102437,-0.0566237496 0.446493373,-0.0561036216 0.191134145,0.169674278 C-0.0642250836,0.395452178 -0.0636351321,0.760990353 0.192451838,0.986126642 L8.14788573,7.98006649 L0.191136012,15.0150334 Z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <ul
          :class="['dropdown-menu', { show: isHelpDropdownOpen }]"
          v-if="isHelpDropdownOpen"
        >
          <li v-for="(item, index) in helpItems" :key="index">
            <a class="dropdown-item" href="#">{{ item }}</a>
          </li>
        </ul>
      </div>

      <a href="/" class="dropdown-link fw-bold text-white ms-2">Park Hours</a>
      <a href="/" class="dropdown-link fw-bold text-white">Shop Merch</a>

      <svg
        class="ms-2"
        id="gds-svg-394"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        version="1.1"
        focusable="false"
      >
        <g>
          <path
            fill="#ffffff"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.6919 20.4717C11.5919 20.7112 11.55 20.9274 11.55 21.0816C11.55 21.6457 11.9765 22 12.6371 22C13.1978 22 13.5157 21.7453 13.7156 21.1435L14.5105 19.0287H19.0206L19.8154 21.1587C20.0087 21.7534 20.3342 22 20.9196 22C21.5479 22 22 21.6215 22 21.0816C22 20.9049 21.9572 20.7265 21.8563 20.4717L18.3428 11.6735C18.0411 10.9247 17.5566 10.6 16.7617 10.6C15.9745 10.6 15.49 10.9399 15.1968 11.6807L11.6919 20.4717ZM16.7779 12.6996L18.4932 17.4538H15.0216L16.7198 12.6996H16.7779Z"
          ></path>
          <path
            fill="#ffffff"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.2368 6.14171C10.2245 6.22053 10.2121 6.29194 10.1998 6.35779C12.2374 6.78438 13.4 8.09107 13.4 9.97274C13.4 12.5314 12.0789 14.2498 9.33237 14.35H9.33142C8.79995 14.35 8.42602 14.0032 8.4042 13.5256C8.4042 13.0118 8.72592 12.6538 9.20519 12.6538C11.3339 12.6538 11.7002 10.7174 11.5712 9.92173C11.3975 8.85338 10.9458 8.1226 9.80405 7.88612C9.35989 9.34304 8.5978 10.7434 7.72942 11.6958C7.76928 11.7895 7.81199 11.8887 7.86324 11.9954C7.90784 12.0835 7.96289 12.23 7.96289 12.4025C7.96289 12.7187 7.78826 12.9914 7.48077 13.1509C7.30804 13.2251 7.17138 13.2575 7.04895 13.2575C6.76708 13.2575 6.51653 13.1138 6.37418 12.8717C5.63961 13.3642 4.93067 13.5951 4.16384 13.5951C2.86933 13.5951 2 12.6455 2 11.2331C2 9.49977 3.21384 7.86572 5.18027 6.9374C5.17742 6.82612 5.17742 6.71298 5.17742 6.59613C5.17742 6.19642 5.18596 5.79765 5.19451 5.40443C4.56528 5.41371 3.87343 5.42298 3.20719 5.42298C2.66434 5.40443 2.34545 5.08449 2.34545 4.56886C2.34545 4.0894 2.68332 3.75369 3.16733 3.75369H3.85824H3.86394C4.32043 3.75369 4.79116 3.75369 5.26853 3.7472C5.28561 3.3716 5.30934 3.02383 5.33971 2.72893C5.38526 2.29213 5.73072 2 6.1986 2H6.26409C6.77752 2.0408 7.07268 2.32459 7.07268 2.76324V2.82816C7.04421 3.11843 7.02143 3.40499 7.0034 3.68506C8.71928 3.61087 10.1495 3.48475 11.3681 3.30298L11.5133 3.29927C11.9555 3.29927 12.282 3.5849 12.3456 4.02634L12.3494 4.16452C12.3494 4.60595 12.0533 4.91756 11.575 4.97969C10.2539 5.15311 8.72023 5.27367 6.89046 5.34508C6.88192 5.691 6.87433 6.03227 6.87338 6.37726C7.38776 6.2734 7.93442 6.21404 8.5048 6.1992C8.52662 6.09348 8.5456 5.99703 8.55984 5.9145C8.63292 5.53334 8.93472 5.29871 9.3485 5.29871C9.39026 5.29871 9.47567 5.29871 9.57248 5.3321C9.93976 5.35621 10.2368 5.66132 10.2368 6.06288V6.14171ZM8.12233 7.73774C7.87747 8.46666 7.53392 9.17426 7.12488 9.78912C7.00909 9.20857 6.93601 8.57888 6.90849 7.93342C7.15145 7.86479 7.56239 7.77298 8.12233 7.73774ZM4.2967 11.8859C3.91613 11.8859 3.72253 11.6448 3.72253 11.1691C3.72253 10.2778 4.31379 9.3551 5.28656 8.69573C5.37198 9.63053 5.53806 10.5245 5.76109 11.2599C5.07398 11.8015 4.5539 11.8859 4.2967 11.8859Z"
          ></path>
        </g>
      </svg>
      <div class="dropdown language-dropdown d-flex">
        <div class="lanuage-selection">
          <div class="language-text gap-2"></div>
          <button
            class="caret-btn text-white"
            type="button"
            @click="toggleDropdown('language')"
          >
            Language
          </button>
        </div>
        <svg
          id="gds-svg-598"
          width="13"
          height="11"
          viewBox="0 0 16 11"
          version="1.1"
          focusable="false"
          class="ms-1 mt-2"
        >
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1256.000000, -4877.000000)">
              <g transform="translate(1254.000000, 4872.000000)">
                <circle cx="10" cy="10" r="10"></circle>
                <g
                  transform="translate(10.000000, 10.454545) rotate(90.000000) translate(-10.000000, -10.454545) translate(5.000000, 2.454545)"
                  fill="#0368D9"
                >
                  <path
                    fill="#ffffff"
                    d="M0.191136012,15.0150334 C-0.0642242506,15.2408104 -0.0636359733,15.6063486 0.192449966,15.8314858 C0.448535906,16.056623 0.863144972,16.0561044 1.11850523,15.8303274 L10,7.97774631 L1.11718941,0.16851254 C0.861102437,-0.0566237496 0.446493373,-0.0561036216 0.191134145,0.169674278 C-0.0642250836,0.395452178 -0.0636351321,0.760990353 0.192451838,0.986126642 L8.14788573,7.98006649 L0.191136012,15.0150334 Z"
                  ></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
        <ul
          :class="['dropdown-menu', { show: isLanguageDropdownOpen }]"
          v-if="isLanguageDropdownOpen"
        >
          <li v-for="(language, index) in languageOptions" :key="index">
            <a class="dropdown-item" href="#">{{ language }}</a>
          </li>
        </ul>
      </div>
      <a href="/">
        <svg
          class="nav-icon"
          id="gds-svg-205"
          fill="rgb(34, 34, 34)"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          focusable="false"
        >
          <path
            fill="#ffffff"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6 21.0008V19C6 15.6865 8.6865 13 12 13C15.3135 13 18 15.6865 18 19V21.0008C20.4289 19.1764 22 16.2718 22 13C22 7.477 17.523 3 12 3C6.477 3 2 7.477 2 13C2 16.2718 3.57108 19.1764 6 21.0008ZM15 9C15 10.657 13.657 12 12 12C10.343 12 9 10.657 9 9C9 7.343 10.343 6 12 6C13.657 6 15 7.343 15 9Z"
          ></path>
        </svg>
      </a>
      <a href="/">
        <svg
          class="nav-icon"
          id="gds-svg-207"
          fill="rgb(34, 34, 34)"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          focusable="false"
        >
          <path
            fill="#ffffff"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.1 3A8.1 8.1 0 0 0 3 11.1a8.1 8.1 0 0 0 8.1 8.1c1.913 0 3.67-.663 5.056-1.771l3.308 3.307.057.053a.9.9 0 0 0 1.215-1.325l-3.307-3.308a8.066 8.066 0 0 0 1.77-5.056A8.1 8.1 0 0 0 11.1 3Zm0 14.4a6.3 6.3 0 1 1 0-12.6 6.3 6.3 0 0 1 0 12.6Z"
          ></path>
        </svg>
      </a>
      <a href="/">
        <svg
          class="nav-icon"
          id="gds-svg-20 ms-3"
          fill="rgb(34, 34, 34)"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          version="1.1"
          focusable="false"
        >
          <path
            fill="#ffffff"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.15 2.818A1 1 0 0 0 5.168 2H3a1 1 0 0 0-1 1l.003.075A1 1 0 0 0 3 4h1.335l2.253 12.182a1 1 0 0 0 .984.818h12.832a1 1 0 0 0 1-1l-.003-.075a1 1 0 0 0-.997-.925H8.403l-.185-1h12.186L22 6H6.739L6.15 2.818ZM9.51 22c1.106 0 2.003-.873 2.003-1.95 0-1.076-.897-1.948-2.003-1.948s-2.003.872-2.003 1.949c0 1.076.897 1.949 2.003 1.949Zm11.017-1.95c0 1.077-.897 1.95-2.003 1.95s-2.003-.873-2.003-1.95c0-1.076.897-1.948 2.003-1.948s2.003.872 2.003 1.949Z"
          ></path>
        </svg>
      </a>
    </div>

    <hr />

    <div class="middle-navbar p-2">
      <a href="/" class="univeral-link">
        <img
          :src="universalLogo"
          alt="Universal Orlando Logo"
          class="universal-image"
        />
      </a>
      <a href="/" class="middlebar-links">Things to Do</a>
      <a href="/" class="middlebar-links">Hotels & Packages</a>
      <a href="/" class="middlebar-links">Tickets & Passes</a>
      <a href="/" class="middlebar-links">Explore Parks</a>
      <a href="/" class="middlebar-links">Plan Your Trip</a>
      <a href="/" class="middlebar-links">Passholders</a>
      <button class="browse-btn bg-white text-center">
        Browse All Products
      </button>
    </div>
  </div>

  <div class="bottom-navbar bg-white">
    <a class="btn-link ticket-btn text-decoration-none" href="/"
      >Park Tickets</a
    >
    <a class="btn-link express-btn text-decoration-none" href="/"
      >Express Passes</a
    >
    <a class="btn-link deals-btn text-decoration-none" href="/"
      >Deals & Specials</a
    >
    <a class="btn-link hotels-btn text-decoration-none" href="/">Hotels</a>
    <a class="btn-link annual-btn text-decoration-none" href="/"
      >Annual Passes</a
    >
    <a class="btn-link vacation-btn text-decoration-none" href="/"
      >Vacation Packages</a
    >
    <a class="btn-link merchandise-btn text-decoration-none" href="/"
      >Merchandise</a
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "LargeScreenNavbar",
  setup() {
    const isLocationDropdownOpen = ref(false);
    const isHelpDropdownOpen = ref(false);
    const isLanguageDropdownOpen = ref(false);

    const locations = ref([
      "Universal Orlando Resort",
      "Universal Studios Hollywood, CA",
      "Universal Studios Japan",
      "Universal Beijing Resort",
      "Universal Studios Singapore",
    ]);

    const helpItems = ref([
      "Contact Us",
      "FAQs",
      "Park Accessibility",
      "Park Guest Services",
      "Rider Safety",
    ]);

    const languageOptions = ref([
      "English (US)",
      "English (UK)",
      "Español",
      "Portuguese",
    ]);

    const toggleDropdown = (dropdown: "location" | "help" | "language") => {
      if (dropdown === "location") {
        isLocationDropdownOpen.value = !isLocationDropdownOpen.value;
        isHelpDropdownOpen.value = false;
        isLanguageDropdownOpen.value = false;
      } else if (dropdown === "help") {
        isHelpDropdownOpen.value = !isHelpDropdownOpen.value;
        isLocationDropdownOpen.value = false;
        isLanguageDropdownOpen.value = false;
      } else if (dropdown === "language") {
        isLanguageDropdownOpen.value = !isLanguageDropdownOpen.value;
        isLocationDropdownOpen.value = false;
        isHelpDropdownOpen.value = false;
      }
    };

    return {
      isLocationDropdownOpen,
      isHelpDropdownOpen,
      isLanguageDropdownOpen,
      locations,
      helpItems,
      languageOptions,
      toggleDropdown,

      universalLogo: require("@/assets/universal-orlando-logo.png"),
    };
  },
});
</script>

<style lang="scss" scoped>
.navbar-container {
  background-color: #0368d9;
  padding: 0.5rem 1rem;
}

.top-navbar {
  display: flex;
  align-items: center;
  padding: 0.75rem;

  .location-symbol {
    margin-right: 0.5rem;
  }

  .dropdown {
    position: relative;

    .caret-btn {
      background-color: transparent;
      border: none;
      color: #fff;
      font-weight: bold;
      cursor: pointer;
    }

    .dropdown-menu {
      position: absolute;
      top: 100%;
      left: 0;
      background-color: #fff;
      color: #000;
      border: 1px solid #ccc;
      border-radius: 0.25rem;
      display: none;

      &.show {
        display: block;
      }

      .dropdown-item {
        padding: 0.5rem 1rem;
        cursor: pointer;

        &:hover {
          background-color: #f8f9fa;
        }
      }
    }
  }

  // .location-dropdown {}

  .help-dropdown {
    margin-left: 10rem;

    @media (min-width: 1100px) {
      margin-left: 30rem;
    }
  }

  // .language-dropdown {}

  .dropdown-link {
    font-size: 1rem;
    text-decoration: none;
    color: #fff;
    margin-right: 1rem;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }

  .nav-icon {
    margin-left: 1.5rem;
    cursor: pointer;

    &:hover {
      fill: #ccc;
    }
  }
}

.middle-navbar {
  display: flex;

  .universal-image {
    width: 100px;
  }

  .middlebar-links {
    margin: 10px;
    color: white;
    text-decoration: none;
    font-weight: 600;
  }

  .browse-btn {
    border: none;
    color: #0368d9;
    border-radius: 25px;
    font-weight: 600;
    padding: 0.375rem 1.125rem;
    font-size: 0.875rem;
    letter-spacing: 0.0125rem;
    line-height: 2rem;

    @media (min-width: 1100px) {
      margin-left: 10rem;
    }
  }
}

.bottom-navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  color: #7d7d7d;
  font-weight: 500;

  .btn-link {
    display: inline-flex;
    align-items: center;
    justify-content: left;
    padding: 14px;
    color: inherit;
    background-color: transparent;
    background-repeat: no-repeat;
    transition: background-color 0.1s ease, color 0.1s ease;

    &:hover {
      background-color: #162b75;
      color: white;
    }

    &.ticket-btn {
      background-size: 18.48px;
      background-position: 35px;
      background-image: url(/src/assets/images/tickets-blue.png);
      padding-right: 5px;
      padding-left: 70px;

      &:hover {
        background-image: url(/src/assets/images/tickets-white.png);
      }
    }

    &.express-btn {
      background-size: 42.69px;
      background-position: 25px center;
      background-image: url(/src/assets/images/express-pass-blue.png);
      padding-right: 5px;
      padding-left: 75px;

      &:hover {
        background-image: url(/src/assets/images/express-pass-white.png);
      }
    }

    &.deals-btn {
      background-size: 15.34px;
      background-position: 40px center;
      background-image: url(/src/assets/images/deals-blue.png);
      padding-right: 5px;
      padding-left: 65px;

      &:hover {
        background-image: url(/src/assets/images/deals-white.png);
      }
    }

    &.hotels-btn {
      background-size: 21.13px;
      background-position: 40px center;
      background-image: url(/src/assets/images/hotels-blue.png);
      padding: 23px;
      padding-right: 30px;
      padding-left: 70px;

      &:hover {
        background-image: url(/src/assets/images/hotels-white.png);
      }
    }

    &.annual-btn {
      background-size: 29.11px;
      background-position: 35px center;
      background-image: url(/src/assets/images/annual-icon-blue.png);
      padding-right: 5px;
      padding-left: 75px;

      &:hover {
        background-image: url(/src/assets/images/annual-icon-white.png);
      }
    }

    &.vacation-btn {
      background-size: 35.17px;
      background-position: 25px center;
      background-image: url(/src/assets/images/vacation-blue.png);
      padding-right: 1px;
      padding-left: 70px;

      &:hover {
        background-image: url(/src/assets/images/vacation-white.png);
      }
    }

    &.merchandise-btn {
      background-size: 23.77px;
      background-position: 25px center;
      background-image: url(/src/assets/images/merchandise-blue.png);
      padding: 23px;
      padding-right: 25px;
      padding-left: 60px;

      &:hover {
        background-image: url(/src/assets/images/merchandise-white.png);
      }
    }
  }
}
</style>