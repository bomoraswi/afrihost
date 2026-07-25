<template>
  <v-container>
    <h1>Test 2</h1>
  </v-container>
</template>

<script>
import recipeService from "@/api/apiService";

export default {
  name: "RecipeDetailsView",

  data: () => ({
    recipe: null,
    loading: false,
    id: 1,
  }),

  methods: {
    async loadRecipe() {
      try {
        this.loading = true;
        // this.id = 1;
        const response = await recipeService.getRecipeById(this.id);

        this.recipe = response.data;
      } catch (error) {
        console.error("Failed to load recipe", error);
      } finally {
        this.loading = false;
      }
    },
  },

  props: {
    // id: {
    //   type: String,
    //   required: true,
    // },
  },

  mounted() {
    this.loadRecipe();
  },
};
</script>
