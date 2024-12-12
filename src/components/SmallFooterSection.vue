<template>
  <div class="footer-container">
    <div class="logo-social-wrapper">
      <div class="logo-container">
        <a href="/">
          <img class="universal-logo mt-1" :src="universalLogo" alt="Universal Logo" />
        </a>
      </div>

      <div class="socialMedia">
        <button class="socialMedia-links" aria-label="Facebook">
          <svg id="gds-svg-531" fill="#ffffff" stroke="none" width="24" height="24" viewBox="0 0 24 24" version="1.1" focusable="false" class="facebook">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9994 2.13373C17.5225 2.13373 22 6.60811 22 12.1276C22 17.1158 18.3429 21.2502 13.562 22L13.5618 15.0227L15.8782 15.023L15.8788 15.0157L15.8922 15.0164L16.3356 12.1276H13.562V10.2529C13.562 9.50228 13.9114 8.7697 15.0107 8.69793L15.1769 8.69291H16.4394L16.4388 8.69173L16.4528 8.69218V6.23276C16.4528 6.23276 16.3935 6.22265 16.289 6.20703C16.2057 6.19497 16.0921 6.17867 15.9553 6.16108C15.9005 6.15388 15.8412 6.14657 15.7787 6.13923C15.3502 6.0886 14.7674 6.03585 14.1982 6.03585C11.9113 6.03585 10.4165 7.42065 10.4165 9.92766L10.4158 12.1267L7.89756 12.1276L7.89678 12.1307L7.87439 12.1315V15.023H10.4165L10.4167 21.9968C5.6456 21.2386 1.99878 17.1088 1.99878 12.1276C1.99878 6.60811 6.47619 2.13373 11.9994 2.13373Z"></path>
          </svg>
        </button>

        <button class="socialMedia-links" aria-label="Instagram">
          <svg id="gds-svg-532" fill="#ffffff" stroke="none" width="24" height="24" viewBox="0 0 24 24" version="1.1" focusable="false" class="instagram">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12.0051 2.00505C9.28923 2.00505 8.94869 2.01655 7.88208 2.06521C6.81768 2.11378 6.09078 2.28283 5.45468 2.53004C4.79709 2.78559 4.23941 3.12751 3.68347 3.68345C3.12753 4.23939 2.78561 4.79708 2.53005 5.45466C2.28284 6.09076 2.1138 6.81766 2.06523 7.88207C2.01657 8.94867 2.00507 9.2892 2.00507 12.0051C2.00507 14.7209 2.01657 15.0614 2.06523 16.128C2.1138 17.1924 2.28285 17.9193 2.53005 18.5554C2.78561 19.213 3.12753 19.7707 3.68347 20.3267C4.23941 20.8826 4.79709 21.2245 5.45467 21.4801C6.09077 21.7273 6.81768 21.8963 7.88208 21.9449C8.94868 21.9936 9.28922 22.0051 12.0051 22.0051C14.7209 22.0051 15.0614 21.9936 16.1281 21.9449C17.1925 21.8963 17.9194 21.7273 18.5555 21.4801C19.213 21.2245 19.7707 20.8826 20.3267 20.3267C20.8826 19.7707 21.2245 19.213 21.4801 18.5554C21.7273 17.9193 21.8963 17.1924 21.9449 16.128C21.9936 15.0614 22.0051 14.7209 22.0051 12.0051C22.0051 9.28921 21.9936 8.94867 21.9449 7.88207C21.8963 6.81766 21.7273 6.09076 21.4801 5.45466C21.2245 4.79708 20.8826 4.23939 20.3267 3.68345C19.7707 3.12752 19.213 2.78559 18.5555 2.53004C17.9194 2.28283 17.1925 2.11378 16.1281 2.06522C15.0615 2.01655 14.7209 2.00505 12.0051 2.00505ZM12.0051 3.80685C14.6752 3.80685 14.9915 3.81703 16.0459 3.86514C17.0209 3.90963 17.5504 4.07253 17.9028 4.20947C18.3696 4.39087 18.7027 4.6076 19.0526 4.95751C19.4025 5.30744 19.6192 5.64057 19.8006 6.10734C19.9376 6.45971 20.1005 6.98922 20.145 7.96419C20.1931 9.01867 20.2033 9.33493 20.2033 12.0051C20.2033 14.6752 20.1931 14.9914 20.145 16.0459C20.1005 17.0209 19.9376 17.5504 19.8006 17.9028C19.6192 18.3695 19.4025 18.7027 19.0526 19.0526C18.7027 19.4025 18.3695 19.6192 17.9028 19.8006C17.5504 19.9376 17.0209 20.1005 16.0459 20.145C14.9916 20.1931 14.6754 20.2033 12.0051 20.2033C9.33477 20.2033 9.01853 20.1931 7.96421 20.145C6.98923 20.1005 6.45972 19.9376 6.10735 19.8006C5.64058 19.6192 5.30746 19.4025 4.95754 19.0526C4.60762 18.7027 4.39089 18.3695 4.20949 17.9028C4.07255 17.5504 3.90965 17.0209 3.86516 16.0459C3.81705 14.9914 3.80687 14.6752 3.80687 12.0051C3.80687 9.33493 3.81705 9.01866 3.86516 7.9642C3.90965 6.98922 4.07255 6.45971 4.20949 6.10734C4.39089 5.64057 4.60761 5.30744 4.95753 4.95753C5.30746 4.6076 5.64059 4.39088 6.10735 4.20948C6.45973 4.07253 6.98924 3.90964 7.96421 3.86515C9.01868 3.81703 9.33495 3.80685 12.0051 3.80685ZM6.86993 12.0051C6.86993 9.16899 9.16901 6.86991 12.0051 6.86991C14.8411 6.86991 17.1402 9.16899 17.1402 12.0051C17.1402 14.8411 14.8411 17.1402 12.0051 17.1402C9.16901 17.1402 6.86993 14.8411 6.86993 12.0051ZM12.0051 15.3384C10.1641 15.3384 8.67174 13.846 8.67174 12.0051C8.67174 10.1641 10.1641 8.67172 12.0051 8.67172C13.846 8.67172 15.3384 10.1641 15.3384 12.0051C15.3384 13.846 13.846 15.3384 12.0051 15.3384ZM17.3431 7.86703C18.0058 7.86703 18.5431 7.32977 18.5431 6.66702C18.5431 6.00428 18.0058 5.46702 17.3431 5.46702C16.6804 5.46702 16.1431 6.00428 16.1431 6.66702C16.1431 7.32977 16.6804 7.86703 17.3431 7.86703Z"></path>
          </svg>
        </button>

        <button class="socialMedia-links" aria-label="Twitter">
          <svg id="gds-svg-533" fill="#ffffff" stroke="none" width="24" height="24" viewBox="0 0 24 24" version="1.1" focusable="false" class="x-logo">
            <path d="M10.0973 13.5314L2.65183 22H4.41617L10.8811 14.6468L16.0445 22H22L14.1918 10.8807L22 2H20.2356L13.4085 9.76523L7.95547 2H2L10.0973 13.5314ZM12.5139 10.7827L13.305 11.8899L19.5998 20.7003H16.8898L11.8098 13.5901L11.0187 12.4828L4.41533 3.24057H7.1254L12.5139 10.7827Z"></path>
          </svg>
        </button>

        <button class="socialMedia-links" aria-label="Pinterest">
          <svg id="gds-svg-534" fill="#ffffff" stroke="none" width="24" height="24" viewBox="0 0 24 24" version="1.1" focusable="false" class="pinterest">
          <path d="M11.9959 2C6.4673 2 2 6.47552 2 11.9959C2 16.2328 4.63266 19.8527 8.3513 21.3089C8.2608 20.5191 8.18676 19.3015 8.3842 18.4377C8.5652 17.6561 9.55244 13.4685 9.55244 13.4685C9.55244 13.4685 9.25628 12.868 9.25628 11.9877C9.25628 10.5973 10.0625 9.56068 11.0662 9.56068C11.9218 9.56068 12.3332 10.2024 12.3332 10.9675C12.3332 11.8231 11.7902 13.1065 11.5023 14.2995C11.2637 15.2949 12.0041 16.1094 12.9831 16.1094C14.7602 16.1094 16.1259 14.2336 16.1259 11.5352C16.1259 9.1411 14.4064 7.471 11.9465 7.471C9.09996 7.471 7.42986 9.6018 7.42986 11.8067C7.42986 12.6623 7.75894 13.5837 8.1703 14.0856C8.25258 14.1843 8.2608 14.2748 8.23612 14.3735C8.16208 14.6861 7.9893 15.369 7.9564 15.5088C7.91526 15.6898 7.8083 15.731 7.61908 15.6405C6.38502 15.0481 5.61168 13.2217 5.61168 11.7573C5.61168 8.60634 7.8988 5.7104 12.218 5.7104C15.6816 5.7104 18.3801 8.17852 18.3801 11.4858C18.3801 14.9329 16.2081 17.7055 13.197 17.7055C12.1851 17.7055 11.2308 17.1789 10.9099 16.5537C10.9099 16.5537 10.4081 18.4624 10.2847 18.9313C10.0625 19.8034 9.45372 20.8893 9.04236 21.5557C9.98026 21.8437 10.9675 22 12.0041 22C17.5245 22 22 17.5245 22 12.0041C21.9918 6.47552 17.5162 2 11.9959 2Z"></path>
          </svg>
        </button>
      </div>
    </div>

    <div class="accordion-menu">
      <button class="accordion-btn" aria-expanded="false">
        <div class="accordion-title">Destinations</div>
        <span class="chevron">
          <svg id="gds-svg-264" fill="#ffffff" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24" version="1.1" focusable="false">
            <path d="M3.397 9.527c.512.539 7.613 7.543 7.613 7.543.26.275.617.43.99.43.372 0 .729-.155.99-.43 0 0 7.1-7.004 7.615-7.543a1.565 1.565 0 0 1 0-2.08 1.331 1.331 0 0 1-.99-.447 1.33 1.33 0 0 0-.991.447l-6.623 6.57-6.622-6.57A1.331 1.331 0 0 1 4.389 7c-.377 0-.736.162-.992.447a1.56 1.56 0 0 1 0 2.08Z" fill-rule="evenodd"></path>
          </svg>
        </span>
      </button>

      <button class="accordion-btn">
        <div class="accordion-title">Tickets and Passes</div>
        <span>
          <svg id="gds-svg-264" fill="currentColor" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24" version="1.1" focusable="false" class="chevron">
            <path d="M3.397 9.527c.512.539 7.613 7.543 7.613 7.543.26.275.617.43.99.43.372 0 .729-.155.99-.43 0 0 7.1-7.004 7.615-7.543a1.565 1.565 0 0 1 0-2.08 1.331 1.331 0 0 1-.99-.447 1.33 1.33 0 0 0-.991.447l-6.623 6.57-6.622-6.57A1.331 1.331 0 0 1 4.389 7c-.377 0-.736.162-.992.447a1.56 1.56 0 0 1 0 2.08Z" fill-rule="evenodd"></path>
          </svg>
        </span>
      </button>

      <button class="accordion-btn">
        <div class="accordion-title">Events and Experiences</div>
        <span>
          <svg id="gds-svg-264" fill="currentColor" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24" version="1.1" focusable="false" class="chevron">
            <path d="M3.397 9.527c.512.539 7.613 7.543 7.613 7.543.26.275.617.43.99.43.372 0 .729-.155.99-.43 0 0 7.1-7.004 7.615-7.543a1.565 1.565 0 0 1 0-2.08 1.331 1.331 0 0 1-.99-.447 1.33 1.33 0 0 0-.991.447l-6.623 6.57-6.622-6.57A1.331 1.331 0 0 1 4.389 7c-.377 0-.736.162-.992.447a1.56 1.56 0 0 1 0 2.08Z" fill-rule="evenodd"></path>
          </svg>
        </span>
      </button>

      <button class="accordion-btn">
        <div class="accordion-title">Beyond the Parks</div>
        <span>
          <svg id="gds-svg-264" fill="currentColor" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24" version="1.1" focusable="false" class="chevron">
            <path d="M3.397 9.527c.512.539 7.613 7.543 7.613 7.543.26.275.617.43.99.43.372 0 .729-.155.99-.43 0 0 7.1-7.004 7.615-7.543a1.565 1.565 0 0 1 0-2.08 1.331 1.331 0 0 1-.99-.447 1.33 1.33 0 0 0-.991.447l-6.623 6.57-6.622-6.57A1.331 1.331 0 0 1 4.389 7c-.377 0-.736.162-.992.447a1.56 1.56 0 0 1 0 2.08Z" fill-rule="evenodd"></path>
          </svg>
        </span>
      </button>

      <button class="accordion-btn">
        <div class="accordion-title">Help</div>
        <span>
          <svg id="gds-svg-264" fill="currentColor" stroke="currentColor" width="24" height="24" viewBox="0 0 24 24" version="1.1" focusable="false" class="chevron">
            <path d="M3.397 9.527c.512.539 7.613 7.543 7.613 7.543.26.275.617.43.99.43.372 0 .729-.155.99-.43 0 0 7.1-7.004 7.615-7.543a1.565 1.565 0 0 1 0-2.08 1.331 1.331 0 0 1-.99-.447 1.33 1.33 0 0 0-.991.447l-6.623 6.57-6.622-6.57A1.331 1.331 0 0 1 4.389 7c-.377 0-.736.162-.992.447a1.56 1.56 0 0 1 0 2.08Z" fill-rule="evenodd"></path>
          </svg>
        </span>
      </button>
    </div>

    <div class="app-links">
      <p class="app-links-title fw-bold text-white mt-4 mb-1">Download the app for exclusive deals and easy ordering.</p>
      <div class="app-images mb-3">
        <img class="app-image" :src="apple" alt="Apple App Store" />
        <img class="app-image" :src="google" alt="Google Play Store" />
      </div>
      <p class="contact-info text-white mb-3">Need to get in touch? <a href="#" class="contact-link">Contact us</a> or <a href="mailto:support@example.com" class="contact-link">email</a> our Guest Services Coordinator.</p>
    </div>

    <div class="language-container text-white px-2">
      <div class="language-selection">
        <div class="language-text d-flex gap-2 ms-2">
          <svg id="gds-svg-394" width="24" height="24" viewBox="0 0 24 24" version="1.1" focusable="false">
            <g><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M11.6919 20.4717C11.5919 20.7112 11.55 20.9274 11.55 21.0816C11.55 21.6457 11.9765 22 12.6371 22C13.1978 22 13.5157 21.7453 13.7156 21.1435L14.5105 19.0287H19.0206L19.8154 21.1587C20.0087 21.7534 20.3342 22 20.9196 22C21.5479 22 22 21.6215 22 21.0816C22 20.9049 21.9572 20.7265 21.8563 20.4717L18.3428 11.6735C18.0411 10.9247 17.5566 10.6 16.7617 10.6C15.9745 10.6 15.49 10.9399 15.1968 11.6807L11.6919 20.4717ZM16.7779 12.6996L18.4932 17.4538H15.0216L16.7198 12.6996H16.7779Z"></path><path fill="#ffffff" fill-rule="evenodd" clip-rule="evenodd" d="M10.2368 6.14171C10.2245 6.22053 10.2121 6.29194 10.1998 6.35779C12.2374 6.78438 13.4 8.09107 13.4 9.97274C13.4 12.5314 12.0789 14.2498 9.33237 14.35H9.33142C8.79995 14.35 8.42602 14.0032 8.4042 13.5256C8.4042 13.0118 8.72592 12.6538 9.20519 12.6538C11.3339 12.6538 11.7002 10.7174 11.5712 9.92173C11.3975 8.85338 10.9458 8.1226 9.80405 7.88612C9.35989 9.34304 8.5978 10.7434 7.72942 11.6958C7.76928 11.7895 7.81199 11.8887 7.86324 11.9954C7.90784 12.0835 7.96289 12.23 7.96289 12.4025C7.96289 12.7187 7.78826 12.9914 7.48077 13.1509C7.30804 13.2251 7.17138 13.2575 7.04895 13.2575C6.76708 13.2575 6.51653 13.1138 6.37418 12.8717C5.63961 13.3642 4.93067 13.5951 4.16384 13.5951C2.86933 13.5951 2 12.6455 2 11.2331C2 9.49977 3.21384 7.86572 5.18027 6.9374C5.17742 6.82612 5.17742 6.71298 5.17742 6.59613C5.17742 6.19642 5.18596 5.79765 5.19451 5.40443C4.56528 5.41371 3.87343 5.42298 3.20719 5.42298C2.66434 5.40443 2.34545 5.08449 2.34545 4.56886C2.34545 4.0894 2.68332 3.75369 3.16733 3.75369H3.85824H3.86394C4.32043 3.75369 4.79116 3.75369 5.26853 3.7472C5.28561 3.3716 5.30934 3.02383 5.33971 2.72893C5.38526 2.29213 5.73072 2 6.1986 2H6.26409C6.77752 2.0408 7.07268 2.32459 7.07268 2.76324V2.82816C7.04421 3.11843 7.02143 3.40499 7.0034 3.68506C8.71928 3.61087 10.1495 3.48475 11.3681 3.30298L11.5133 3.29927C11.9555 3.29927 12.282 3.5849 12.3456 4.02634L12.3494 4.16452C12.3494 4.60595 12.0533 4.91756 11.575 4.97969C10.2539 5.15311 8.72023 5.27367 6.89046 5.34508C6.88192 5.691 6.87433 6.03227 6.87338 6.37726C7.38776 6.2734 7.93442 6.21404 8.5048 6.1992C8.52662 6.09348 8.5456 5.99703 8.55984 5.9145C8.63292 5.53334 8.93472 5.29871 9.3485 5.29871C9.39026 5.29871 9.47567 5.29871 9.57248 5.3321C9.93976 5.35621 10.2368 5.66132 10.2368 6.06288V6.14171ZM8.12233 7.73774C7.87747 8.46666 7.53392 9.17426 7.12488 9.78912C7.00909 9.20857 6.93601 8.57888 6.90849 7.93342C7.15145 7.86479 7.56239 7.77298 8.12233 7.73774ZM4.2967 11.8859C3.91613 11.8859 3.72253 11.6448 3.72253 11.1691C3.72253 10.2778 4.31379 9.3551 5.28656 8.69573C5.37198 9.63053 5.53806 10.5245 5.76109 11.2599C5.07398 11.8015 4.5539 11.8859 4.2967 11.8859Z"></path></g>
          </svg>
          <p class="language-label">English (US)</p>
        </div>
        <svg id="gds-svg-598" width="13" height="11" viewBox="0 0 16 11" version="1.1" focusable="false" class="arrow-down mb-3">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-1256.000000, -4877.000000)">
              <g transform="translate(1254.000000, 4872.000000)">
                <circle cx="10" cy="10" r="10"></circle>
                <g transform="translate(10.000000, 10.454545) rotate(90.000000) translate(-10.000000, -10.454545) translate(5.000000, 2.454545)" fill="#0368D9">
                  <path fill="#ffffff" d="M0.191136012,15.0150334 C-0.0642242506,15.2408104 -0.0636359733,15.6063486 0.192449966,15.8314858 C0.448535906,16.056623 0.863144972,16.0561044 1.11850523,15.8303274 L10,7.97774631 L1.11718941,0.16851254 C0.861102437,-0.0566237496 0.446493373,-0.0561036216 0.191134145,0.169674278 C-0.0642250836,0.395452178 -0.0636351321,0.760990353 0.192451838,0.986126642 L8.14788573,7.98006649 L0.191136012,15.0150334 Z"></path>
                </g>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <hr class="language-separator" />
    </div>

    <div class="footer-links">
      <a href="#" class="link-item">Copyright & Trademark</a>
      <a href="#" class="link-item">Privacy Center</a>
      <a href="#" class="link-item">Ad Choices</a>
      <a href="#" class="link-item">Privacy Policy</a>

      <a href="#" class="link-item d-flex">
        <svg id="gds-svg-408" fill="rgb(34, 34, 34)" width="30" height="14" viewBox="0 0 30 12" aria-label="privacy" version="1.1" focusable="false" class="privacy">
          <g>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M7.39998 12.8H14.2L17.3 1.20001H7.39998C4.19998 1.20001 1.59998 3.80001 1.59998 7.00001C1.59998 10.2 4.19998 12.8 7.39998 12.8Z" fill="white"></path>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6 0H7.40002C3.50002 0 0.400024 3.1 0.400024 7C0.400024 10.9 3.50002 14 7.40002 14H22.6C26.5 14 29.6 10.9 29.6 7C29.6 3.1 26.4 0 22.6 0ZM1.60002 7C1.60002 3.8 4.20002 1.2 7.40002 1.2H17.3L14.2 12.8H7.40002C4.20002 12.8 1.60002 10.2 1.60002 7Z" fill="#0066FF"></path>
            <path d="M24.6 3.99998C24.8 4.19998 24.8 4.59998 24.6 4.79998L22.5 6.99998L24.7 9.19998C24.9 9.39998 24.9 9.79998 24.7 9.99998C24.5 10.2 24.1 10.2 23.9 9.99998L21.7 7.79998L19.5 9.99998C19.3 10.2 18.9 10.2 18.7 9.99998C18.5 9.79998 18.5 9.39998 18.7 9.19998L20.8 6.99998L18.6 4.79998C18.4 4.59998 18.4 4.19998 18.6 3.99998C18.8 3.79998 19.2 3.79998 19.4 3.99998L21.6 6.19998L23.8 3.99998C24 3.79998 24.4 3.79998 24.6 3.99998Z" fill="white"></path>
            <path d="M12.7 4.10001C12.9 4.30001 13 4.70001 12.8 4.90001L8.60003 9.80001C8.50003 9.90001 8.40003 10 8.30003 10C8.10003 10.1 7.80003 10.1 7.60003 9.90001L5.40003 7.70001C5.20003 7.50001 5.20003 7.10001 5.40003 6.90001C5.60003 6.70001 6.00003 6.70001 6.20003 6.90001L8.00003 8.60001L11.8 4.10001C12 3.90001 12.4 3.90001 12.7 4.10001Z" fill="#0066FF"></path>
          </g>
        </svg>
        <span class="ms-2">Your Privacy Choices</span>
      </a>
      <a href="#" class="link-item">CA Notice</a>
      <a href="#" class="link-item">Terms of Service</a>
      <a href="#" class="link-item">Severe Weather Policy</a>
      <a href="#" class="link-item">UPRV Terms of Service</a>
    </div>

    <div class="copyright text-white px-2 mt-2">
      <p class="copyright-text">© 2024 Universal Studios. All rights reserved. <br /> Some imagery shown throughout our website does not represent current operational and safety guidelines.</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  setup() {
    return {
      universalLogo: require("@/assets/universal-orlando-logo.png"),
      apple: require("@/assets/ma-appstore.png"),
      google: require("@/assets/ma-googleplay.png"),
    };
  },
});
</script>

<style lang="scss" scoped>
.footer-container {
  background-color: #162b75;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  .universal-logo {
    width: 171.92px;
    height: 96px;
  }
 
  .socialMedia {
    display: flex;
    justify-content: center;

    .socialMedia-links {
      background: none;
      border: none;
      padding: 0;
      width: 48px;
      height: 48px;
    }
  }

  @media (min-width: 600px) and (max-width: 900px) and (orientation: portrait) {
    align-items: flex-start;
  }
}

.logo-social-wrapper {
  @media (min-width: 600px) and (max-width: 900px) and (orientation: portrait) {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 0.5rem;
  }
}

.accordion-menu {
  display: flex;
  width: 100%;
  flex-direction: column;

  @media (min-width: 600px) and (max-width: 900px) and (orientation: portrait) {
    margin-top: 1.5rem;
  }

  .accordion-btn {
    display: flex;
    justify-content: space-between; // Ensures space between text and arrow
    align-items: center;
    background: none;
    border: none;
    padding: 0.5rem;
    font-size: 1rem;
    font-weight: bold;
    color: white;
    gap: 0.5rem; // Small gap between title and arrow for balance
    text-align: left;

    // Increase spacing between buttons
    margin-bottom: 8px;

    &[aria-expanded="true"] .chevron {
      transform: rotate(180deg); // Rotate chevron when expanded
      transition: transform 0.3s ease-in-out; // Smooth transition
    }
  }

  .accordion-title {
    font-size: 1rem;
  }

  .chevron {
    margin-left: auto;
  }
}

.app-links {
  .app-links-title {
    font-size: 14px;
    text-align: center;

    @media (min-width: 600px) and (max-width: 900px) and (orientation: portrait) {
      text-align: left;
      padding-left: 0.5rem;
    }
  }

  .app-images {
    display: flex;
    gap: 1rem;
    padding: 0.3rem;

    @media (min-width: 600px) and (max-width: 900px) and (orientation: portrait) {
      padding-left: 0.5rem;
    }
  }

  .contact-info {
    font-size: 13px;
    font-weight: 400;
    padding-left: 0.5rem;

    .contact-link {
      font-weight: bold;
      text-decoration: none;
      color: white;
    }
  }
}

.language-container {
  width: 100%;

  .language-selection {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .language-text {
      display: flex;

      .language-label {
        font-size: 0.9rem; // Mobile-first size
        font-weight: 600;
      }
    }
  }

  .language-separator {
    border: none;
    border-top: 1px solid #ffffff;
    opacity: 1;
  }

  @media (min-width: 600px) and (max-width: 900px) and (orientation: portrait) {
    .language-selection {
      justify-content: flex-end;
      gap: 1rem;
    }
  }
}

.footer-links {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0.5rem;
  font-weight: 600;
  gap: 2.5rem;

  .link-item {
    font-size: 0.9rem;
    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
  }

  @media (min-width: 600px) and (max-width: 900px) and (orientation: portrait) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 3rem;


    .link-item {
      font-size: 0.85rem;
      width: 25%;
      text-align: left;
    }

    margin-right: 10%;
  }
}

.copyright {
  padding: 1rem 0;
  text-align: left;
  width: 100%;

  .copyright-text {
    font-size: 0.775rem;
    font-weight: 400;
    line-height: 1.5;
    color: #ffffff;
    margin: 0;
  }

  @media (min-width: 600px) and (max-width: 900px) and (orientation: portrait) {
    width: 60%;
  }
}
</style>