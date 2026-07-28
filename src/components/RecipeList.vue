<template>
  <div class="recipe-list-wrapper">
    <TopHeader class="top-header-section" />

    <v-container class="pa-0 px-5">


      <div>
          <h2 class="section-title font-h3 font-weight-bold mb-0">Featured</h2>

      </div>

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
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <div class="featured-overlay">
                  <v-btn icon class="heart-btn" color="white">
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
          <h2 class="section-title font-h3 font-weight-bold mb-0">
            Popular Recipes
          </h2>
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
                  <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                  >
                    <v-progress-circular
                      indeterminate
                      color="grey lighten-5"
                    ></v-progress-circular>
                  </v-row>
                </template>
                <div class="recipe-overlay">
                  <v-btn icon class="heart-btn-small" color="white">
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
                    <v-icon x-small class="mr-1 meta-icon-small"
                      >mdi-fire</v-icon
                    >
                    {{ recipe.kcal }}
                  </span>
                  <span class="meta-dot">•</span>
                  <span class="d-flex align-center ml-3">
                    <v-icon x-small class="mr-1 meta-icon-small"
                      >mdi-clock-outline</v-icon
                    >
                    {{ recipe.time }}
                  </span>
                </div>
              </v-card-text>
            </v-card>
          </div>
        </div>
      </div>
    </v-container>

    <BottomNav @navigate="handleNavigate" />
  </div>
</template>

<script>
import apiService from "@/api/apiService";
import TopHeader from "@/components/TopHeader";
import BottomNav from "@/components/BottomNav";

export default {
  components: {
    TopHeader,
    BottomNav,
  },
  data: () => ({
    recipes: [],
    categories: [
      { name: "Breakfast", active: true },
      { name: "Lunch", active: false },
      { name: "Dinner", active: false },
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
        image: "recipe5.jpg",
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
    handleNavigate(destination) {
      console.log("Navigate to:", destination);
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
  padding-bottom: 140px;
  background-color: #f8f9fa;
  position: relative;
  overflow-x: hidden;
  width: 100%;
}

.top-header-section {
  width: 100%;
  margin: 0;
  padding: 0;
  display: block;
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
    background: #5db9b4;

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
  font-family: "Sofia Pro", "Open Sans", sans-serif;
  font-size: 15px;
  color: #1a2b3c;
  font-weight: 500;
  white-space: nowrap;
}

.section-header-row {
  margin-left: 0;
  margin-right: 0;
}

.section-title {
  color: #1a2b3c;
  font-family: "Sofia Pro", "Open Sans", sans-serif;
  margin: 0;
  font-size: 20px;
}

.see-all-link {
  color: #5db9b4;
  font-family: "Open Sans", sans-serif;
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
    color: #5db9b4;
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
  border-radius: 20px 20px 20px 20px;
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
    color: #5db9b4;
  }
}

.recipe-title {
  color: #0a2533;
  font-family: "Sofia Pro", "Open Sans", sans-serif;
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
  color: #6b7c8e;
  font-size: 12px;
  font-family: "Open Sans", sans-serif;
}

.meta-icon-small {
  color: #5db9b4;
}

.meta-dot {
  color: #6b7c8e;
  font-size: 14px;
}
</style>
