<template>
  <h1 class="restaurant text-white text-center">Leaky Cauldron™</h1>
  <div class="p-3">
    <h2 class="fw-bold text-white text-center">Beverage Menu</h2>
    <!-- <p class="p-3 h4 text-white text-center">
      Allergen Note: Please inform a manager or Chef's Assistant prior to
      ordering if someone in your party requires special dietary accommodations
    </p> -->
  </div>

  <div class="menu-slider">
    <div class="slider-container">
      <div
        v-for="(item, index) in menuItems"
        :key="index"
        class="menu-card"
        @click="openModal(index)"
      >
        <img :src="item.image" :alt="item.name" class="card-image" />
        <h3 class="card-title">{{ item.name }}</h3>
      </div>
    </div>
  </div>

  <div v-if="activeItem !== null" class="modal-overlay" @click="closeModal">
    <div class="modal-content" @click.stop>
      <div class="modal-header">
        <h3>{{ menuItems[activeItem].name }}</h3>
        <button class="close-button" @click="closeModal">&times;</button>
      </div>
      <div class="modal-body">
        <img
          :src="menuItems[activeItem].image"
          :alt="menuItems[activeItem].name"
          class="modal-image"
        />
        <p>{{ menuItems[activeItem].description }}</p>
      </div>
    </div>
  </div>

  <div class="sensitivity-info text-white">
    <div class="info-row">
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
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface MenuItem {
  name: string;
  description: string;
  image: string;
}

export default defineComponent({
  name: "LunchAndDinnerMenu",
  setup() {
    const menuItems = ref<MenuItem[]>([
      {
        name: "Butterbeer™",
        description:
          "A non-alcoholic sweet drink reminiscent of shortbread and butterscotch (can be served in a souvenir cup) - $8.99",
        image: require("@/assets/images/butterbeer.png"),
      },
      {
        name: "Frozen Butterbeer™",
        description:
          "A non-alcoholic sweet drink reminiscent of shortbread and butterscotch (can be served in a souvenir cup) - $8.99",
        image: require("@/assets/images/frozen-butterbeer.png"),
      },
      {
        name: "Hot Butterbeer™",
        description:
          "A non-alcoholic sweet drink reminiscent of shortbread and butterscotch - $8.99",
        image: require("@/assets/images/hot-butterbeer.png"),
      },
      {
        name: "Pumpkin Juice™",
        description: "Pumpkin Juice™ - $5.49", // COME BACK TO THIS LATER
        image: require("@/assets/images/pumpkin-juice.png"),
      },
      {
        name: "Tongue Tying Lemon Squash",
        description:
          "Sweet and tart lemon flavored beverage served with squashed lemon - $6.49",
        image: require("@/assets/images/tongue-tying-lemon-squash.png"),
      },
      {
        name: "Fishy Green Ale",
        description:
          "Smooth and creamy with notes of mint and cinnamon and popping blueberry fish eggs - $6.49",
        image: require("@/assets/images/fishy-green-ale.png"),
      },
      {
        name: "Iced Tea",
        description: "Fountain Beverages (Iced Tea) - $4.49", // COME BACK TO THIS LATER
        image: require("@/assets/images/iced-tea.png"),
      },
      {
        name: "Lemonade",
        description: "Fountain Beverages (Iced Tea) - $4.49", // COME BACK TO THIS LATER
        image: require("@/assets/images/lemonade.png"),
      },
      {
        name: "Cider",
        description: "Fountain Beverages (Iced Tea) - $4.49", // COME BACK TO THIS LATER
        image: require("@/assets/images/cider.png"),
      },
      {
        name: "Gillywater",
        description: "Gillywater - $6.00", // COME BACK TO THIS LATER
        image: require("@/assets/images/gillywater.png"),
      },
      {
        name: "Otter's Fizzy Orange Juice",
        description:
          "Effervescent fresh orange beverage with notes of vanilla and cinnamon - $6.49",
        image: require("@/assets/images/otters-fizzy-orange-juice.png"),
      },
      {
        name: "Peachtree Fizzing Tea",
        description:
          "Fizzy but smooth with flavors of fresh peach nectar and ginger - $6.49",
        image: require("@/assets/images/peachtree-fizzing-tea.png"),
      },
      {
        name: "Dragon's Scale",
        description: "Unique lager with a light crisp, malty finish - $13.00",
        image: require("@/assets/images/dragon-scale.png"),
      },
      {
        name: "Daisyroot Ale",
        description:
          "Refreshing traditional English Mild with a light malty flavor profile and a clean finish - $13.00",
        image: require("@/assets/images/daisyroot-ale.png"),
      },
      {
        name: "Wizard's Brew",
        description:
          "Full bodied, sweet stout with a smooth, light sweetness and clean, dry finish - $13.00",
        image: require("@/assets/images/wizards-brew.png"),
      },
      {
        name: "Dark Forest Ale",
        description:
          "Traditional brown ale with roasty caramel/toffee notes and warming finish - $13.00",
        image: require("@/assets/images/dark-forest-ale.png"),
      },
      {
        name: "Fire Whisky",
        description: "Fire Whisky, Fire and Strongbow Cocktail - $13.00",
        image: require("@/assets/images/fire-whisky.png"),
      },

      {
        name: "2% Milk",
        description: "2% Milk - $2.99",
        image: require("@/assets/images/milk.png"),
      },
      {
        name: "Orange Juice",
        description: "Orange Juice - $3.49",
        image: require("@/assets/images/orange-juice.png"),
      },
      {
        name: "Apple Juice",
        description: "Apple Juice - $3.49",
        image: require("@/assets/images/apple-juice.png"),
      },
      {
        name: "Coffee",
        description: "Hot Beverages (Coffee) - $3.79",
        image: require("@/assets/images/coffee.png"),
      },
      {
        name: "Decaf Coffee",
        description: "Hot Beverages (Decaf Coffee) - $3.79",
        image: require("@/assets/images/decaf-coffee.png"),
      },
      {
        name: "Hot Beverages (Hot Tea)",
        description: "Hot Tea (Hot Beverages) - $3.79",
        image: require("@/assets/images/hot-tea.png"),
      },

      {
        name: "Chocolate Milk",
        description: "Chocolate Milk - $2.99",
        image: require("@/assets/images/chocolate-milk.png"),
      },
      {
        name: "Draught Beer (Heineken)",
        description: "Draught Beer (Heineken) - $11.25",
        image: require("@/assets/images/heineken.png"),
      },
      {
        name: "Draught Beer (Stella Artois)",
        description: "Draught Beer (Stella Artois) - $11.25",
        image: require("@/assets/images/stella-artois.png"),
      },
      {
        name: "Draught Beer (Strongbow)",
        description: "Draught Beer (Strongbow) - $11.25",
        image: require("@/assets/images/strongbow.png"),
      },
      {
        name: "Draught Beer (Yuengling)",
        description: "Draught Beer (Yuengling) - $11.25",
        image: require("@/assets/images/yuengling-lager.png"),
      },

      {
        name: "Wine by the Glass (Chardonnay)",
        description: "Wine by the Glass (Chardonnay) - $11.00",
        image: require("@/assets/images/chardonnay.png"),
      },
      {
        name: "Wine by the Glass (Cabernet Sauvignon)",
        description: "Wine by the Glass (Cabernet Sauvignon) - $11.00",
        image: require("@/assets/images/cabernet-sauvignon.png"),
      },
      {
        name: "Courtesy Cup of Water",
        description: "Courtesy Cup of Water - $0",
        image: require("@/assets/images/water-cup.png"),
      },
    ]);

    const activeItem = ref<number | null>(null);

    const openModal = (index: number): void => {
      activeItem.value = index;
    };

    const closeModal = (): void => {
      activeItem.value = null;
    };

    return {
      menuItems,
      activeItem,
      openModal,
      closeModal,
    };
  },
});
</script>

<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.restaurant {
  background: linear-gradient(to right, #3555a3, #1c3385);
  font-weight: 900;
  padding: 1rem;
  font-size: 1.5rem;
}

.menu-slider {
  padding: 1rem;

  .slider-container {
    display: flex;
    gap: 1rem;
    overflow-x: auto;
    padding: 1rem;

    &::-webkit-scrollbar {
      display: none;
    }
  }

  .menu-card {
    flex: 0 0 auto;
    width: 250px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #fff;
    text-align: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }

    .card-image {
      width: 100%;
      height: 150px;
      object-fit: cover;
      border-radius: 8px 8px 0 0;
    }

    .card-title {
      font-size: 1rem;
      font-weight: bold;
      margin: 0.5rem 0;
      color: #333;
    }
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal-content {
  background: white;
  border-radius: 10px;
  padding: 1.5rem;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;

  .modal-header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .close-button {
      background: none;
      border: none;
      font-size: 1.5rem;
      cursor: pointer;
    }
  }

  .modal-body {
    img {
      width: 100%;
      border-radius: 10px;
      margin-bottom: 1rem;
    }

    p {
      color: #333;
      font-size: 1rem;
      line-height: 1.5;
    }
  }
}

.note {
  font-size: 14px;
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
</style>