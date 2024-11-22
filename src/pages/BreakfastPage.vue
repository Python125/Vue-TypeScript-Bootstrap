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
        @click="toggleDescription(index)"
        :aria-expanded="expandedIndex === index"
      >
        <img :src="item.image" :alt="item.name" class="card-image" />
        <h3 class="card-title">{{ item.name }}</h3>
        <p v-if="expandedIndex === index" class="card-description">
          {{ item.description }}
        </p>
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

    const expandedIndex = ref<number | null>(null);

    const toggleDescription = (index: number): void => {
      expandedIndex.value = expandedIndex.value === index ? null : index;
    };

    return {
      menuItems,
      expandedIndex,
      toggleDescription,
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

    .card-description {
      font-size: 0.9rem;
      padding: 0.5rem;
      color: #666;
    }
  }
}
</style>