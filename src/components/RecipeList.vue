<template>
  <div class="recipe-list-wrapper">
    <v-container class="pa-0">
  

      <v-row class="section-header-row mb-4">
        <v-col cols="12" class="d-flex align-center justify-space-between pa-0">
          <h2 class="section-title font-h3 font-weight-bold mb-0">Featured</h2>
          <a href="#" class="see-all-link">See All</a>
        </v-col>
      </v-row>

      <!-- featured -->
      <div class="featured-section mb-8">
        <div class="featured-scroll">
          <div
            v-for="(featured, index) in featuredRecipes"
            :key="index"
            class="featured-card-wrapper"
          >
            <v-card class="featured-card" flat>
              <v-img
                :src="require(`@/assets/img/${featured.image}`)"
                class="featured-img"
         
                cover
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
                <div class="featured-overlay">
                  <v-btn
                    icon
                    class="heart-btn"
                    color="white"
                  >
                    <v-icon>mdi-heart-outline</v-icon>
                  </v-btn>
                </div>
              </v-img>
            </v-card>
          </div>
        </div>
      </div>

      <!-- category -->
      <div class="category-section mb-8">
        <div class="category-scroll">
          <div
            v-for="(category, index) in categories"
            :key="index"
            class="category-item"
            :class="{ active: category.active }"
          >
            <span class="category-name">{{ category.name }}</span>
          </div>
        </div>
      </div>


      <!-- Popular Recipes -->
      <v-row class="section-header-row mb-4">
        <v-col cols="12" class="d-flex align-center justify-space-between pa-0">
          <h2 class="section-title font-h3 font-weight-bold mb-0">Popular Recipes</h2>
          <a href="#" class="see-all-link">See All</a>
        </v-col>
      </v-row>

      <div class="popular-section mb-6">
        <div class="popular-scroll">
          <div
            v-for="(recipe, index) in popularRecipes"
            :key="index"
            class="popular-card-wrapper"
          >
            <v-card class="recipe-card" flat>
              
              <v-img
                :src="require(`@/assets/img/recipes/${recipe.image}`)"
                class="recipe-img"
                height="128"
                width="168"
                cover
              >
                <template v-slot:placeholder>
                  <v-row class="fill-height ma-0" align="center" justify="center">
                    <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
                  </v-row>
                </template>
                <div class="recipe-overlay">
                  <v-btn
                    icon
                    class="heart-btn-small"
                    color="white"
                  >
                    <v-icon small>mdi-heart-outline</v-icon>
                  </v-btn>
                </div>
              </v-img>
              <v-card-text class="pa-3">
                <h6 class="recipe-title font-h4 mb-2">
                  {{ recipe.title }}
                </h6>
                <div class="d-flex align-center recipe-meta-small">
                  <span class="d-flex align-center mr-3">
                    <v-icon x-small class="mr-1 meta-icon-small">mdi-fire</v-icon>
                    {{ recipe.kcal }}
                  </span>
                  <span class="meta-dot">•</span>
                  <span class="d-flex align-center ml-3">
                    <v-icon x-small class="mr-1 meta-icon-small">mdi-clock-outline</v-icon>
                    {{ recipe.time }}
                  </span>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </v-container>

    <v-bottom-navigation
      class="bottom-nav"
      absolute
      hide-on-scroll
      color="white"
    >
      <v-btn class="nav-btn" value="home">
        <v-icon class="nav-icon active">mdi-home</v-icon>
      </v-btn>
      <v-btn class="nav-btn" value="search">
        <v-icon class="nav-icon">mdi-magnify</v-icon>
      </v-btn>
      <div class="center-btn-wrapper">
        <v-btn
          fab
          color="teal darken-4"
          class="center-fab"
        >
          <v-icon large class="text-white">mdi-chef-hat</v-icon>
        </v-btn>
      </div>
      <v-btn class="nav-btn" value="notifications">
        <v-icon class="nav-icon">mdi-bell-outline</v-icon>
      </v-btn>
      <v-btn class="nav-btn" value="profile">
        <v-icon class="nav-icon">mdi-account-outline</v-icon>
      </v-btn>
      <div class="active-indicator"></div>
    </v-bottom-navigation>
  </div>
</template>

<script>
import apiService from "@/api/apiService";

export default {
  data: () => ({
    recipes: [],
    categories: [
      { name: "Breakfast", active: true },
      { name: "Lunch",  active: false },
      { name: "Dinner",  active: false },

    ],
    featuredRecipes: [
      { image: "featuredCard1.png" },
      { image: "featuredCard1.png" },
    ],
    popularRecipes: [
      {
        image: "recipe1.png",
        title: "Healthy Taco Salad with fresh vegetable",
        kcal: "120 Kcal",
        time: "20 Min",
      },
      {
        image: "recipe1.png",
        title: "Japanese-style Pancakes Recipe",
        kcal: "64 Kcal",
        time: "12 Min",
      },
     
    ],
  }),

  methods: {
    async loadRecipes() {
      const response = await apiService.getRecipes();
      this.recipes = response.data.recipes;
    },
  },

  mounted() {
    // this.loadRecipes();
  },
};
</script>

<style lang="scss" scoped>
.recipe-list-wrapper {
  min-height: 100vh;
  padding-bottom: 100px;
  background-color: #f8f9fa;
  position: relative;
  overflow-x: hidden;
}

.category-section {
  padding: 0;
}

.category-scroll {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 4px 0 8px 0;
  gap: 12px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
}

.category-item {
  flex: 0 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 9px 24px;
  background: #f1f5f5;
  border-radius: 40px;
  cursor: pointer;
  // transition: all 0.25s ease;
  gap: 10px;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 0;
  }

  &.active {
    background: #5DB9B4;

    .category-name {
      color: white;
      font-weight: 600;
    }

    .category-icon {
      filter: brightness(1.1);
    }
  }
}

.category-icon {
  font-size: 20px;
  line-height: 1;
}

.category-name {
  font-family: 'Sofia Pro', 'Open Sans', sans-serif;
  font-size: 15px;
  color: #1A2B3C;
  font-weight: 500;
  white-space: nowrap;
}

.section-header-row {
  margin-left: 0;
  margin-right: 0;
}

.section-title {
  color: #1A2B3C;
  font-family: 'Sofia Pro', 'Open Sans', sans-serif;
  margin: 0;
}

.see-all-link {
  color: #5DB9B4;
  font-family: 'Open Sans', sans-serif;
  font-size: 18px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.featured-section {
  padding: 0;
}

.featured-scroll {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 4px 0 8px 0;
  gap: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
}

.featured-card-wrapper {
  flex: 0 0 auto;
  width: 265px;
}

.featured-card {
  border-radius: 16px !important;
  overflow: hidden;
  background: transparent;
  height: 172px;
  width: 264px;
}

.featured-img {
  border-radius: 20px !important;
}

.featured-overlay {
  position: absolute;
  top: 12px;
  right: 12px;
}

.heart-btn {
  background: white !important;
  border-radius: 12px !important;
  width: 44px !important;
  height: 44px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: auto !important;
  padding: 0 !important;

  ::v-deep .v-icon {
    color: #5DB9B4;
  }
}

.popular-section {
  padding: 0;
}

.popular-scroll {
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  padding: 4px 0 8px 0;
  gap: 16px;

  &::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
}

.popular-card-wrapper {
  flex: 0 0 auto;
  width: 200px;
}

.recipe-card {
  border-radius: 20px !important;
  overflow: hidden;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.06) !important;
  background: white;
  height: 240px;
  width: 200px;
  padding: 12px;
}

.recipe-img {
  border-radius: 20px 20px 0 0;
  margin: 0 auto;
}

.recipe-overlay {
  position: absolute;
  top: 10px;
  right: 10px;
}

.heart-btn-small {
  background: white !important;
  border-radius: 10px !important;
  width: 36px !important;
  height: 36px !important;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  min-width: auto !important;
  padding: 0 !important;

  ::v-deep .v-icon {
    color: #5DB9B4;
  }
}

.recipe-title {
  color: #0A2533;
  font-family: 'Sofia Pro', 'Open Sans', sans-serif;
  font-weight: 700;
  font-size: 16px;
  line-height: 135%;
  letter-spacing: 0%;
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.recipe-meta-small {
  color: #6B7C8E;
  font-size: 12px;
  font-family: 'Open Sans', sans-serif;
}

.meta-icon-small {
  color: #5DB9B4;
}

.meta-dot {
  color: #6B7C8E;
  font-size: 14px;
}

.bottom-nav {
  position: fixed !important;
  bottom: 0;
  left: 0;
  right: 0;
  height: 80px;
  box-shadow: 0 -4px 24px rgba(0, 0, 0, 0.08) !important;
  border-radius: 32px 32px 0 0 !important;
  overflow: visible !important;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 16px;
}

.nav-btn {
  background: transparent !important;
  box-shadow: none !important;
  width: 56px;
  height: 56px;
  margin: 0;
}

.nav-icon {
  color: #B0BEC5;
  font-size: 28px !important;

  &.active {
    color: #5DB9B4;
  }
}

.center-btn-wrapper {
  position: relative;
  z-index: 10;
  margin-top: -32px;
}

.center-fab {
  width: 68px !important;
  height: 68px !important;
  background-color: #0D4C4B !important;
  box-shadow: 0 8px 24px rgba(13, 76, 75, 0.35) !important;

  ::v-deep .v-icon {
    font-size: 32px !important;
  }
}

.active-indicator {
  position: absolute;
  bottom: 6px;
  left: calc(10% - 20px);
  width: 40px;
  height: 4px;
  background-color: #5DB9B4;
  border-radius: 2px;
}
</style>
