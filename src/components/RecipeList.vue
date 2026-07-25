<template>
  <v-container>
    <h1>Test</h1>
  </v-container>
</template>

<script>
import apiService from "@/api/apiService";

export default {
  data: () => ({
    recipes: [],
  }),

  methods: {
    async loadRecipes() {
      const response = await apiService.getRecipes();

      this.recipes = response.data.recipes;
    },
  },

  mounted() {
    this.loadRecipes();
  },
};
</script>
