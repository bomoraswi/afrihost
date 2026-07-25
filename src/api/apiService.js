import httpService from "./httpService";

const apiService = {
  getRecipes() {
    return httpService.get("/recipes.json");
  },

  getRecipeById(id) {
    return httpService.get(`/recipes/${id}.json`);
  },
};

export default apiService;
