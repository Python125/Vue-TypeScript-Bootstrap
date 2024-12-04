<template>
  <div class="footer-container text-white">
    <div class="logo-social-wrapper">
      <div class="logo-container">
        <a href="/">
          <img
            class="universal-logo mt-1"
            :src="universalLogo"
            alt="Universal Logo"
          />
        </a>
      </div>

      <div class="socialMedia">
        <button class="socialMedia-links" aria-label="Facebook">
          <svg
            id="gds-svg-531"
            fill="#ffffff"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            focusable="false"
            class="facebook"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M11.9994 2.13373C17.5225 2.13373 22 6.60811 22 12.1276C22 17.1158 18.3429 21.2502 13.562 22L13.5618 15.0227L15.8782 15.023L15.8788 15.0157L15.8922 15.0164L16.3356 12.1276H13.562V10.2529C13.562 9.50228 13.9114 8.7697 15.0107 8.69793L15.1769 8.69291H16.4394L16.4388 8.69173L16.4528 8.69218V6.23276C16.4528 6.23276 16.3935 6.22265 16.289 6.20703C16.2057 6.19497 16.0921 6.17867 15.9553 6.16108C15.9005 6.15388 15.8412 6.14657 15.7787 6.13923C15.3502 6.0886 14.7674 6.03585 14.1982 6.03585C11.9113 6.03585 10.4165 7.42065 10.4165 9.92766L10.4158 12.1267L7.89756 12.1276L7.89678 12.1307L7.87439 12.1315V15.023H10.4165L10.4167 21.9968C5.6456 21.2386 1.99878 17.1088 1.99878 12.1276C1.99878 6.60811 6.47619 2.13373 11.9994 2.13373Z"
            ></path>
          </svg>
        </button>

        <button class="socialMedia-links" aria-label="Instagram">
          <svg
            id="gds-svg-532"
            fill="#ffffff"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            focusable="false"
            class="instagram"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M12.0051 2.00505C9.28923 2.00505 8.94869 2.01655 7.88208 2.06521C6.81768 2.11378 6.09078 2.28283 5.45468 2.53004C4.79709 2.78559 4.23941 3.12751 3.68347 3.68345C3.12753 4.23939 2.78561 4.79708 2.53005 5.45466C2.28284 6.09076 2.1138 6.81766 2.06523 7.88207C2.01657 8.94867 2.00507 9.2892 2.00507 12.0051C2.00507 14.7209 2.01657 15.0614 2.06523 16.128C2.1138 17.1924 2.28285 17.9193 2.53005 18.5554C2.78561 19.213 3.12753 19.7707 3.68347 20.3267C4.23941 20.8826 4.79709 21.2245 5.45467 21.4801C6.09077 21.7273 6.81768 21.8963 7.88208 21.9449C8.94868 21.9936 9.28922 22.0051 12.0051 22.0051C14.7209 22.0051 15.0614 21.9936 16.1281 21.9449C17.1925 21.8963 17.9194 21.7273 18.5555 21.4801C19.213 21.2245 19.7707 20.8826 20.3267 20.3267C20.8826 19.7707 21.2245 19.213 21.4801 18.5554C21.7273 17.9193 21.8963 17.1924 21.9449 16.128C21.9936 15.0614 22.0051 14.7209 22.0051 12.0051C22.0051 9.28921 21.9936 8.94867 21.9449 7.88207C21.8963 6.81766 21.7273 6.09076 21.4801 5.45466C21.2245 4.79708 20.8826 4.23939 20.3267 3.68345C19.7707 3.12752 19.213 2.78559 18.5555 2.53004C17.9194 2.28283 17.1925 2.11378 16.1281 2.06522C15.0615 2.01655 14.7209 2.00505 12.0051 2.00505ZM12.0051 3.80685C14.6752 3.80685 14.9915 3.81703 16.0459 3.86514C17.0209 3.90963 17.5504 4.07253 17.9028 4.20947C18.3696 4.39087 18.7027 4.6076 19.0526 4.95751C19.4025 5.30744 19.6192 5.64057 19.8006 6.10734C19.9376 6.45971 20.1005 6.98922 20.145 7.96419C20.1931 9.01867 20.2033 9.33493 20.2033 12.0051C20.2033 14.6752 20.1931 14.9914 20.145 16.0459C20.1005 17.0209 19.9376 17.5504 19.8006 17.9028C19.6192 18.3695 19.4025 18.7027 19.0526 19.0526C18.7027 19.4025 18.3695 19.6192 17.9028 19.8006C17.5504 19.9376 17.0209 20.1005 16.0459 20.145C14.9916 20.1931 14.6754 20.2033 12.0051 20.2033C9.33477 20.2033 9.01853 20.1931 7.96421 20.145C6.98923 20.1005 6.45972 19.9376 6.10735 19.8006C5.64058 19.6192 5.30746 19.4025 4.95754 19.0526C4.60762 18.7027 4.39089 18.3695 4.20949 17.9028C4.07255 17.5504 3.90965 17.0209 3.86516 16.0459C3.81705 14.9914 3.80687 14.6752 3.80687 12.0051C3.80687 9.33493 3.81705 9.01866 3.86516 7.9642C3.90965 6.98922 4.07255 6.45971 4.20949 6.10734C4.39089 5.64057 4.60761 5.30744 4.95753 4.95753C5.30746 4.6076 5.64059 4.39088 6.10735 4.20948C6.45973 4.07253 6.98924 3.90964 7.96421 3.86515C9.01868 3.81703 9.33495 3.80685 12.0051 3.80685ZM6.86993 12.0051C6.86993 9.16899 9.16901 6.86991 12.0051 6.86991C14.8411 6.86991 17.1402 9.16899 17.1402 12.0051C17.1402 14.8411 14.8411 17.1402 12.0051 17.1402C9.16901 17.1402 6.86993 14.8411 6.86993 12.0051ZM12.0051 15.3384C10.1641 15.3384 8.67174 13.846 8.67174 12.0051C8.67174 10.1641 10.1641 8.67172 12.0051 8.67172C13.846 8.67172 15.3384 10.1641 15.3384 12.0051C15.3384 13.846 13.846 15.3384 12.0051 15.3384ZM17.3431 7.86703C18.0058 7.86703 18.5431 7.32977 18.5431 6.66702C18.5431 6.00428 18.0058 5.46702 17.3431 5.46702C16.6804 5.46702 16.1431 6.00428 16.1431 6.66702C16.1431 7.32977 16.6804 7.86703 17.3431 7.86703Z"
            ></path>
          </svg>
        </button>

        <button class="socialMedia-links" aria-label="Twitter">
          <svg
            id="gds-svg-533"
            fill="#ffffff"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            focusable="false"
            class="x-logo"
          >
            <path
              d="M10.0973 13.5314L2.65183 22H4.41617L10.8811 14.6468L16.0445 22H22L14.1918 10.8807L22 2H20.2356L13.4085 9.76523L7.95547 2H2L10.0973 13.5314ZM12.5139 10.7827L13.305 11.8899L19.5998 20.7003H16.8898L11.8098 13.5901L11.0187 12.4828L4.41533 3.24057H7.1254L12.5139 10.7827Z"
            ></path>
          </svg>
        </button>

        <button class="socialMedia-links" aria-label="Pinterest">
          <svg
            id="gds-svg-534"
            fill="#ffffff"
            stroke="none"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            version="1.1"
            focusable="false"
            class="pinterest"
          >
            <path
              d="M11.9959 2C6.4673 2 2 6.47552 2 11.9959C2 16.2328 4.63266 19.8527 8.3513 21.3089C8.2608 20.5191 8.18676 19.3015 8.3842 18.4377C8.5652 17.6561 9.55244 13.4685 9.55244 13.4685C9.55244 13.4685 9.25628 12.868 9.25628 11.9877C9.25628 10.5973 10.0625 9.56068 11.0662 9.56068C11.9218 9.56068 12.3332 10.2024 12.3332 10.9675C12.3332 11.8231 11.7902 13.1065 11.5023 14.2995C11.2637 15.2949 12.0041 16.1094 12.9831 16.1094C14.7602 16.1094 16.1259 14.2336 16.1259 11.5352C16.1259 9.1411 14.4064 7.471 11.9465 7.471C9.09996 7.471 7.42986 9.6018 7.42986 11.8067C7.42986 12.6623 7.75894 13.5837 8.1703 14.0856C8.25258 14.1843 8.2608 14.2748 8.23612 14.3735C8.16208 14.6861 7.9893 15.369 7.9564 15.5088C7.91526 15.6898 7.8083 15.731 7.61908 15.6405C6.38502 15.0481 5.61168 13.2217 5.61168 11.7573C5.61168 8.60634 7.8988 5.7104 12.218 5.7104C15.6816 5.7104 18.3801 8.17852 18.3801 11.4858C18.3801 14.9329 16.2081 17.7055 13.197 17.7055C12.1851 17.7055 11.2308 17.1789 10.9099 16.5537C10.9099 16.5537 10.4081 18.4624 10.2847 18.9313C10.0625 19.8034 9.45372 20.8893 9.04236 21.5557C9.98026 21.8437 10.9675 22 12.0041 22C17.5245 22 22 17.5245 22 12.0041C21.9918 6.47552 17.5162 2 11.9959 2Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="footer-categories text white">
      <div class="footer-category">
        <h4>Destinations</h4>
          <li><a href="/">Universal Orlando Resort</a></li>
          <li><a href="/">Universal Studios Hollywood</a></li>
          <li><a href="/">Universal Studios Japan</a></li>
          <li><a href="/">Universal Beijing Resort</a></li>
          <li><a href="/">Universal Studios Singapore</a></li>
      </div>

      <div class="footer-category">
        <h4>Tickets and Passes</h4>
          <li><a href="/">Park Tickets</a></li>
          <li><a href="/">Annual Passes</a></li>
          <li><a href="/">Universal Express Passes</a></li>
          <li><a href="/">Vacation Packages</a></li>
          <li><a href="/">Group Vacations</a></li>
          <li><a href="/">Military Sales</a></li>
      </div>

      <div class="footer-category">
        <h4>Events and Experiences</h4>
          <li><a href="/">Seasonal Events</a></li>
          <li><a href="/">Meetings and Events</a></li>
          <li><a href="/">Weddings & Celebrations</a></li>
          <li><a href="/">Youth & Education Programs</a></li>
          <li><a href="/">Travel Agents</a></li>
      </div>
    </div>

    <div class="footer-categories text white">
      <div class="footer-category">
        <h4>Beyond the Parks</h4>
          <li><a href="/">Sign Up for Email Alerts</a></li>
          <li><a href="/">Discover Universal Blog</a></li>
          <li><a href="/">Shop Merchandise</a></li>
          <li><a href="/">My Universal Photos</a></li>
          <li><a href="/">Universal Rewards Visa</a></li>
          <li><a href="/">Corporate Partners</a></li>
          <li><a href="/">Studio Production</a></li>
          <li><a href="/">Green is Universal</a></li>
          <li><a href="/">Community Relations</a></li>
          <li><a href="/">Media Relations</a></li>
          <li><a href="/">Careers</a></li>
      </div>

      <div class="footer-category">
        <h4>Help</h4>
          <li><a href="/">Code of Conduct</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">FAQs</a></li>
          <li><a href="/">Park Accessibility</a></li>
          <li><a href="/">Park Guest Services</a></li>
          <li><a href="/">Rider Height Requirements</a></li>
          <li><a href="/">Policies & Restrictions</a></li>
          <li><a href="/">Rider Safety</a></li>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      universalLogo: require("@/assets/universal-orlando-logo.png"),
    };
  },
});
</script>

<style lang="scss" scoped>
.footer-container {
  background-color: #162b75;
}

.logo-social-wrapper {
  padding: 1rem;

  .universal-logo {
    width: 175px;
  }

  .socialMedia {
    display: flex;
    justify-content: left;

    .socialMedia-links {
      background: none;
      border: none;
      width: 48px;
      height: 48px;
    }
  }
}

.footer-categories {
  display: flex;
  justify-content: center;

  // .footer-category {
  //   margin-left: 1%;
  // }

  li {
    list-style: none;

    a {
      text-decoration: none;
      color: white;
    }
  }
}
</style>