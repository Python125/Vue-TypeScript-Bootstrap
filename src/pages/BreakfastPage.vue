<template>
  <h1 class="restaurant text-white text-center">Leaky Cauldron™</h1>
  <div class="p-3">
    <h3 class="fw-bold text-center text-white">
      Breakfast - served until 10:30 am daily
    </h3>
    <p class="mt-3 h4 text-center text-white">
      <b><u>Allergen Note:</u></b> Please inform a manager or Chef's Assistant
      prior to ordering if someone in your party requires special dietary
      accommodations
    </p>
    <p class="fw-light text-center text-white p-3">Includes small beverage</p>
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

  <!-- Modal -->
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
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

interface MenuItem {
  name: string;
  description: string;
  image: string;
}

export default defineComponent({
  name: "BreakfastMenu",
  setup() {
    const menuItems = ref<MenuItem[]>([
      {
        name: "Traditional Breakfast",
        description:
          "Fresh scrambled eggs, sausage links, black pudding, English bacon, baked beans, grilled tomato, sautéed mushrooms and breakfast potatoes (FS, PS, SS, TNS) - $18.99",
        image: require("@/assets/images/traditional-breakfast.png"),
      },
      {
        name: "Pancake Breakfast",
        description:
          "Three fluffy buttermilk pancakes, crisp bacon and link sausage with butter croissant (FS, PS, SES, SS, TNS) - $18.99",
        image: require("@/assets/images/pancake-breakfast.png"),
      },
      {
        name: "Egg, Leek, & Mushroom Pasty",
        description:
          "Pastry wrapped scrambled eggs, mushrooms and leeks served with breakfast potatoes and fresh fruit (FS, PS, SES, TNS) - $18.99",
        image: require("@/assets/images/egg-leek-mushroom-pasty.png"),
      },
      {
        name: "American Breakfast",
        description:
          "Fresh scrambled eggs, breakfast potatoes, crisp bacon, and link sausage with butter croissant - (FS, PS, SES, SS, TNS) - $18.99",
        image: require("@/assets/images/american-breakfast.png"),
      },
      {
        name: "Apple Oatmeal Flan with Yogurt & Fruit",
        description:
          "Freshly baked flan of apples and oatmeal served with yogurt and fresh seasonal fruit (FS, GS, PS, SES, SS) - $18.99",
        image: require("@/assets/images/apple-oatmeal-flan.png"),
      },
      {
        name: "Kid's Breakfast",
        description: "Choose traditional, pancake or American - $13.49",
        image: require("@/assets/images/pancake-breakfast.png"),
      },
      {
        name: "Bacon",
        description: "Crispy American-style bacon - $2.49",
        image: require("@/assets/images/bacon.png"),
      },
      {
        name: "English Bacon",
        description: "Traditional English bacon - $5.49",
        image: require("@/assets/images/english-bacon.png"),
      },
      {
        name: "Roasted Potatoes",
        description: "Perfectly roasted breakfast potatoes - $4.99",
        image: require("@/assets/images/roasted-potatoes.png"),
      },
      {
        name: "Blood Sausage",
        description: "Rich and flavorful blood sausage - $5.49",
        image: require("@/assets/images/blood-sausage.png"),
      },
      {
        name: "Scrambled Eggs",
        description: "Fluffy scrambled eggs - $2.99",
        image: require("@/assets/images/scrambled-eggs.png"),
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
  position: relative;
  padding: 1rem;

  .slider-container {
    display: flex;
    gap: 1rem;
    padding: 10px;
    overflow-x: auto;
    background-color: #333;

    img {
      padding: 10px;
      border-radius: 8px;
      cursor: pointer;
    }

    &::-webkit-scrollbar {
      height: 8px;
      background: #444;
    }

    &::-webkit-scrollbar-thumb {
      background: #888;
      border-radius: 10px;
    }
  }

  @media (max-width: 1023px) {
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
</style>