<template>
  <div class="recipe-details-wrapper">
    <div class="background-header">
      <v-img
        :src="require('@/assets/img/hermes-rivera-OzBLe_Eg1mg-unsplash 1.png')"
        class="bg-img"
        cover
      >
        <div class="header-overlay">
          <div class="d-flex align-center justify-space-between pa-4">
            <v-btn
              icon
              class="header-btn"
              color="white"
            >
              <v-icon>mdi-close</v-icon>
            </v-btn>
            <v-btn
              icon
              class="header-btn"
              color="white"
            >
              <v-icon>mdi-heart-outline</v-icon>
            </v-btn>
          </div>
        </div>
      </v-img>
    </div>

    <div class="content-card">
      <div class="handle-wrapper">
        <div class="drag-handle"></div>
      </div>

      <div class="pa-5 pb-0">
        <div class="d-flex align-start justify-space-between mb-3">
          <div>
            <h3 class="recipe-title mb-2">Healthy Taco Salad</h3>
            <p class="recipe-desc">
              This Healthy Taco Salad is the universal delight of taco night
              <a href="#" class="view-more-link">View More</a>
            </p>
          </div>
          <div class="time-badge ">
            <v-icon small class="time-icon">mdi-clock-outline</v-icon>
            <span class="time-text">15 Min</span>
          </div>
        </div>

        <div class="nutrition-grid mb-7">
          <div class="nutrition-item">
            <div class="nutrition-icon-box">
              <v-img
                :src="require('@/assets/img/icons/Carbs.png')"
                class="nutrition-icon-img"
                width="28"
                height="28"
                contain
              />
            </div>
            <span class="nutrition-value">65g carbs</span>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-icon-box">
              <v-img
                :src="require('@/assets/img/icons/Ellipse 77.png')"
                class="nutrition-icon-img"
                width="28"
                height="28"
                contain
              />
            </div>
            <span class="nutrition-value">27g proteins</span>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-icon-box">
              <v-img
                :src="require('@/assets/img/icons/Calories.png')"
                class="nutrition-icon-img"
                width="28"
                height="28"
                contain
              />
            </div>
            <span class="nutrition-value">120 Kcal</span>
          </div>
          <div class="nutrition-item">
            <div class="nutrition-icon-box">
              <v-img
                :src="require('@/assets/img/icons/Fats.png')"
                class="nutrition-icon-img"
                width="28"
                height="28"
                contain
              />
            </div>
            <span class="nutrition-value">91g fats</span>
          </div>
        </div>

        <div class="tab-container mb-5">
          <div
            class="tab-btn"
            :class="{ active: activeTab === 'ingredients' }"
            @click="activeTab = 'ingredients'"
          >
            Ingredients
          </div>
          <div
            class="tab-btn"
            :class="{ active: activeTab === 'instructions' }"
            @click="activeTab = 'instructions'"
          >
            Instructions
          </div>
        </div>

        <div v-if="activeTab === 'ingredients'">
          <div class="ingredients-header mb-5">
            <h2 class="section-header mb-0">Ingredients</h2>
            <span class="item-count">6 Item</span>
          </div>

          <div class="ingredients-list mb-6">
            <div
              v-for="(ingredient, index) in ingredients"
              :key="index"
              class="ingredient-item"
            >
              <div class="ingredient-icon-box">
                <v-img
                  :src="require(`@/assets/img/ingredients/${ingredient.icon}`)"
                  class="ingredient-icon-img"
                  contain
                />
              </div>
              <span class="ingredient-name">{{ ingredient.name }}</span>
              <span class="ingredient-quantity">{{ ingredient.quantity }}</span>
            </div>
          </div>
        </div>

        <div v-if="activeTab === 'instructions'">
          <div class="mb-4">
            <h2 class="section-header mb-2">Instructions</h2>
            <span class="item-count instructions-time">15 min</span>
          </div>

          <div class="instructions-paragraphs mb-6">
            <p
              v-for="(paragraph, index) in instructionsParagraphs"
              :key="index"
              class="instruction-paragraph"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="divider-line mb-6"></div>

        <div class="creator-section mb-6">
          <h2 class="section-header mb-4">Creator</h2>
          <div class="creator-card">
            <v-avatar class="creator-avatar" size="48">
              <v-img :src="require('@/assets/img/creator.png')" cover />
            </v-avatar>
            <div class="creator-info ml-3">
              <h4 class="creator-name mb-1">Natalia Luca</h4>
              <p class="creator-bio">I'm the author and recipe developer.</p>
            </div>
          </div>
        </div>

        <div class="related-section mb-6">
          <div class="d-flex align-center justify-space-between mb-4">
            <h2 class="section-header mb-0">Related Recipes</h2>
            <a href="#" class="see-all-link">See All</a>
          </div>

          <div class="related-scroll">
            <div
              v-for="(related, index) in relatedRecipes"
              :key="index"
              class="related-card"
            >
              <div class="related-img-wrap">
                <v-img
                  :src="require(`@/assets/img/recipes/${related.image}`)"
                  class="related-img"
                  contain
                />
              </div>
              <p class="related-title mt-3 mb-0">{{ related.title }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import recipeService from "@/api/apiService";

export default {
  name: "RecipeDetails",

  data: () => ({
    recipe: null,
    loading: false,
    id: 1,
    activeTab: "ingredients",
    ingredients: [
      { name: "Tortilla Chips", quantity: 2, icon: "PngItem_267538 1.png" },
      { name: "Avocado", quantity: 1, icon: "PngItem_1252977 1.png" },
      { name: "Red Cabbage", quantity: 9, icon: "PngItem_4288222 1.png" },
      { name: "Peanuts", quantity: 1, icon: "pngwing (1).png" },
      { name: "Red Onions", quantity: 1, icon: "pngwing.png" },
      { name: "Fresh Cilantro", quantity: 1, icon: "PngItem_267538 1.png" },
    ],
    instructionsParagraphs: [
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    ],
    relatedRecipes: [
      { image: "recipe1.png", title: "Egg & Avo..." },
      { image: "recipe2.png", title: "Bowl of r..." },
      { image: "recipe3.png", title: "Chicken S..." },
    ],
  }),

  methods: {
    async loadRecipe() {
      try {
        this.loading = true;
        const response = await recipeService.getRecipeById(this.id);
        this.recipe = response.data;
      } catch (error) {
        console.error("Failed to load recipe", error);
      } finally {
        this.loading = false;
      }
    },
  },

  mounted() {
    // this.loadRecipe();
  },
};
</script>

<style lang="scss" scoped>
.recipe-details-wrapper {
  min-height: 100vh;
  background-color: #f8f9fa;
  position: relative;
  padding-bottom: 30px;
}

.background-header {
  position: relative;
  width: 100%;
}

.bg-img {
  width: 100%;
}

.header-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.header-btn {
  background: white !important;
  border-radius: 12px !important;
  width: 44px !important;
  height: 44px !important;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.12);
  min-width: auto !important;
  padding: 0 !important;

  ::v-deep .v-icon {
    color: #1A2B3C;
  }
}

.content-card {
  position: relative;
  background: white;
  margin-top: -350px;
  border-radius: 32px 32px 0 0;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.06);
  min-height: calc(100vh - 340px);
  padding-bottom: 40px;
}

.handle-wrapper {
  display: flex;
  justify-content: center;
  padding-top: 14px;
  padding-bottom: 6px;
}

.drag-handle {
  width: 56px;
  height: 5px;
  background: #D8DEE5;
  border-radius: 3px;
}

.recipe-title {
  font-family: 'Sofia Pro', 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 24px;
  line-height: 135%;
  color: #0A2533;
 
}

.recipe-desc {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 145%;
  letter-spacing: 0%;
  color: #748189;
}

.view-more-link {
  color: #0A2533;
  font-weight: 600;
  text-decoration: none;
  line-height: 135%;
  letter-spacing: 0%;
}

.time-badge {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8px 12px;
  border-radius: 12px;
  // background: #F0F7F7;
  min-width: 64px;
}

.time-icon {
  color: #1A2B3C;
  margin-bottom: 2px;
}

.time-text {
  font-family: 'Open Sans', sans-serif;
  font-size: 11px;
  font-weight: 600;
  color: #1A2B3C;
}

.nutrition-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px 48px;
}

.nutrition-item {
  display: flex;
  align-items: center;
  background: transparent;
  border-radius: 0;
  padding: 0;
  gap: 14px;
}

.nutrition-icon-box {
  flex: 0 0 auto;
  width: 40px !important;
  height: 40px !important;
  background: #eef2f6;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nutrition-icon-img {
  width: 24px !important;
  height: 24px !important;
}

.nutrition-value {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #1A2B3C;
}

.tab-container {
  display: flex;
  background: #EEF1F4;
  border-radius: 16px;
  padding: 6px;
}

.tab-btn {
  flex: 1;
  text-align: center;
  padding: 14px 16px;
  border-radius: 12px;
  font-family: 'Sofia Pro', 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #6B7C8E;
  cursor: pointer;
  transition: all 0.25s ease;

  &.active {
    background: #042628;
    color: white;
    box-shadow: 0 2px 12px rgba(13, 76, 75, 0.2);
  }
}

.section-header {
  font-family: 'Sofia Pro', 'Open Sans', sans-serif;
  font-weight: 800;
  font-size: 20px;
  line-height: 135%;
  color: #1A2B3C;
}

.item-count {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #98A6B4;
}

.ingredients-list {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 0;
}

.ingredient-item {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 16px 22px;
  box-shadow: 0 6px 24px rgba(150, 160, 180, 0.12);
}

.ingredient-icon-box {
  flex: 0 0 auto;
  width: 48px;
  height: 48px;
  background: #eef2f6;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: none;
}

.ingredient-icon-img {
  width: 32px !important;
  height: 32px !important;
}

.ingredient-name {
  flex: 1;
  margin-left: 16px;
  font-family: 'Sofia Pro', 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 18px;
  color: #1A2B3C;
}

.ingredient-quantity {
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 17px;
  color: #1A2B3C;
}

.instructions-time {
  font-family: 'Sofia Pro', 'Open Sans', sans-serif;
  font-weight: 500;
  font-size: 20px;
  color: #98A6B4;
  display: block;
}

.instructions-paragraphs {
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.instruction-paragraph {
  font-family: 'Open Sans', sans-serif;
  font-size: 21px;
  line-height: 160%;
  color: #0A2533;
  font-weight: 500;
  margin: 0;
  letter-spacing: 0%;
}

.divider-line {
  height: 1px;
  background: #EEF1F4;
  width: 100%;
}

.creator-card {
  display: flex;
  align-items: center;
}

.creator-avatar {
  border: 2px solid #5DB9B4;
}

.creator-name {
  font-family: 'Sofia Pro', 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 17px;
  color: #1A2B3C;
  margin: 0;
}

.creator-bio {
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  color: #6B7C8E;
  margin: 0;
}

.see-all-link {
  color: #5DB9B4;
  font-family: 'Open Sans', sans-serif;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
}

.related-scroll {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  gap: 24px;
  padding-bottom: 8px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
}

.related-card {
  flex: 0 0 auto;
  width: 100px;
  height: 136px;
  cursor: pointer;
  background: white;
  border-radius: 10px;
  // padding: 24px 20px 28px 20px;
  box-shadow: 0 8px 32px rgba(140, 150, 170, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
}

.related-img-wrap {
  width: 84px;
  height: 84px;
  border-radius: 10px;
  overflow: hidden;
  background: #2a3a4a;
  display: flex;
  align-items: center;
  justify-content: center;
}

.related-img {
  border-radius: 0;
  width: 100% !important;
  height: 100% !important;
}

.related-title {
  font-family: 'Sofia Pro', 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: 15px;
  color: #1A2B3C;
  width: 100%;
  text-align: left;
  padding-left: 4px;
}
</style>
