<template>
  <h1 class="restaurant text-white text-center">Leaky Cauldron™</h1>
  <div class="p-3">
    <h2 class="fw-bold text-white text-center">Lunch and Dinner Menu</h2>
    <p class="p-3 h4 text-white text-center">
      Allergen Note: Please inform a manager or Chef's Assistant prior to
      ordering if someone in your party requires special dietary accommodations
    </p>
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
        name: "Beef, Lamb & Guinness Stew",
        description:
          "Served in a warm, crusty bread bowl (DS, ES, FS, PS, SES, SFS, SS, TNS) - $17.99",
        image: require("@/assets/images/beef-lamb-guinness-stew.png"),
      },
      {
        name: "Cottage Pie",
        description:
          "Savory combination of beef and chunky vegetables in a potato crust served with a garden salad (ES, FS, PS, SES, SFS, TNS) - $17.99",
        image: require("@/assets/images/cottage-pie.png"),
      },
      {
        name: "Bangers & Mash",
        description:
          "Roasted English sausage, creamy mashed potatoes, roasted tomatoes, sautéed onions and cabbage, minted peas & onion gravy (Request no sauce for soy protein-sensitive options.) (ES, FS, PS, SES, SFS, TNS) - $16.99",
        image: require("@/assets/images/bangers-and-mash.png"),
      },
      {
        name: "Mini Pie Combination",
        description:
          "Mini cottage pie and mini fisherman's pie served with garden salad (ES, PS, SES, TNS) - $18.99",
        image: require("@/assets/images/mini-pie-combo.png"),
      },
      {
        name: "Vegan Curry",
        description:
          "Plant based Chick`n and potato curry with pita and served with garden salad (DS, ES, FS, PS, SFS, VG) - $17.99",
        image: require("@/assets/images/vegan-curry.png"),
      },
      {
        name: "Shepherd's Pasty Pie",
        description:
          "Meatless beef crumbles and vegetable stew hand pie; served with creamy stone ground mustard dipping sauce, apple beet salad, and chips (DS, ES, FS, SES, SFS, VG) - $17.99",
        image: require("@/assets/images/shepherds-pasty-pie.png"),
      },
      {
        name: "Hunter's Chicken",
        description:
          "Bacon wrapped chicken breast with BBQ gravy, Monterey & Cheddar cheese blend, English minted peas, pea tendrils and chips (ES, FS, PS, SES, SFS, TNS) - $16.99",
        image: require("@/assets/images/hunters-chicken.png"),
      },
      {
        name: "Fish & Chips",
        description:
          "Fresh north Atlantic cod battered and fried with chips and tartar sauce (Request no tartar sauce for egg-sensitive options.) (PS, SFS, TNS) - $17.99",
        image: require("@/assets/images/fish-and-chips.png"),
      },
      {
        name: "Fisherman's Pie",
        description:
          "Salmon, shrimp and cod baked together under a potato crust served with garden salad (ES, GS, PS, SES, SS, TNS) - $18.99",
        image: require("@/assets/images/fishermans-pie.png"),
      },
      {
        name: "Scotch Eggs",
        description:
          "Hard-boiled eggs wrapped in pork sausage, dusted with bread crumbs and fried. Served warm with apple beet salad and mustard sauce (PS, SFS, TNS) - $13.99",
        image: require("@/assets/images/scotch-eggs.png"),
      },
      {
        name: "Soup & Salad",
        description:
          "Split Pea & Ham soup served with side garden salad (ES, FS, PS, SES, SFS, TNS) - $12.99",
        image: require("@/assets/images/soup-and-salad.png"),
      },
      {
        name: "Ploughman's",
        description:
          "A feast of English cheese, crusty bread, field green salad, roasted tomatoes, cornichon pickles, apple beet salad, Branston pickle & scotch eggs (Request no scotch egg for egg-sensitive options, or request no scotch egg sauce for fish-sensitive options.) (PS, SFS, TNS) - $23.99 (Serves 2)",
        image: require("@/assets/images/ploughmans-platter.png"),
      },

      {
        name: "Kid's Macaroni Cheese",
        description:
          "Served with grapes and applesauce (ES, FS, PS, SES, SFS, SS, TNS, V) - $8.29",
        image: require("@/assets/images/kids-mac-and-cheese.png"),
      },
      {
        name: "Kid's Mini Pie",
        description:
          "Served with grapes and applesauce (ES, FS, PS, SES, SFS, TNS) - $8.29",
        image: require("@/assets/images/kids-mini-pie.png"),
      },
      {
        name: "Kid's Fish & Chips",
        description:
          "Served with chips and tartar sauce (Request no tartar sauce for egg-sensitive options.) (PS, SFS, TNS) - $8.29",
        image: require("@/assets/images/kids-fish-and-chips.png"),
      },
      {
        name: "Banger Sandwich",
        description:
          "Roasted English sausage, mustard aioli, roasted tomatoes, sautéed cabbage and onions on a crusted baguette (Served with chips) (Gluten-free buns are available upon request.) (Request no mustard aioli for egg-sensitive options.) (DS, FS, PS, SES, SFS, SS, TNS) - $14.99",
        image: require("@/assets/images/banger-sandwich.png"),
      },
      {
        name: "Specialty Chicken",
        description:
          "Grilled chicken breast, apple butter mayo, Colby cheese, smoky apple bacon, roasted tomatoes on a housemade specialty bun (Served with chips) (Gluten-free buns are available upon request.) (FS, PS, SES, SFS, SS, TNS) - $15.99",
        image: require("@/assets/images/specialty-chicken.png"),
      },
      {
        name: "Side of Chips",
        description: "(DS, ES, FS, GS, PS, SES, SFS, SS, TNS, VG) - $4.99",
        image: require("@/assets/images/chips.png"),
      },
      {
        name: "Side of Mashed Potatoes with Gravy",
        description: "(ES, FS, PS, SES, SFS, TNS) - $3.99",
        image: require("@/assets/images/mashed-potatoes-side.png"),
      },
      {
        name: "Side Garden Salad",
        description: "(DS, ES, FS, GS, PS, SES, SFS, SS, TNS, VG) - $6.99",
        image: require("@/assets/images/side-salad.png"),
      },
      {
        name: "Scotch Egg (Side)",
        description:
          "Hard-boiled egg wrapped in pork sausage, dusted with bread crumbs and fried (PS, SFS, TNS) - $5.49",
        image: require("@/assets/images/scotch-egg.png"),
      },
      {
        name: "Banger (1 each)",
        description: "(DS, ES, FS, PS, SES, SFS, TNS) - $5.49",
        image: require("@/assets/images/banger-side.png"),
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