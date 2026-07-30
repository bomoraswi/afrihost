import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const STORAGE_KEY = 'afrihost_favorite_recipes'

const loadFavoritesFromStorage = () => {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    return stored ? JSON.parse(stored) : []
  } catch (e) {
    console.error('Failed to load favorites from localStorage', e)
    return []
  }
}

const saveFavoritesToStorage = (favorites) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites))
  } catch (e) {
    console.error('Failed to save favorites to localStorage', e)
  }
}

export default new Vuex.Store({
  state: {
    favoriteRecipeIds: loadFavoritesFromStorage(),
  },
  getters: {
    isFavorite: (state) => (recipeId) => {
      return state.favoriteRecipeIds.includes(Number(recipeId))
    },
    favoriteCount: (state) => {
      return state.favoriteRecipeIds.length
    },
    allFavoriteIds: (state) => {
      return state.favoriteRecipeIds
    },
  },
  mutations: {
    ADD_FAVORITE(state, recipeId) {
      const id = Number(recipeId)
      if (!state.favoriteRecipeIds.includes(id)) {
        state.favoriteRecipeIds.push(id)
        saveFavoritesToStorage(state.favoriteRecipeIds)
      }
    },
    REMOVE_FAVORITE(state, recipeId) {
      const id = Number(recipeId)
      state.favoriteRecipeIds = state.favoriteRecipeIds.filter((fid) => fid !== id)
      saveFavoritesToStorage(state.favoriteRecipeIds)
    },
    TOGGLE_FAVORITE(state, recipeId) {
      const id = Number(recipeId)
      const index = state.favoriteRecipeIds.indexOf(id)
      if (index === -1) {
        state.favoriteRecipeIds.push(id)
      } else {
        state.favoriteRecipeIds.splice(index, 1)
      }
      saveFavoritesToStorage(state.favoriteRecipeIds)
    },
  },
  actions: {
    toggleFavorite({ commit }, recipeId) {
      commit('TOGGLE_FAVORITE', recipeId)
    },
    addFavorite({ commit }, recipeId) {
      commit('ADD_FAVORITE', recipeId)
    },
    removeFavorite({ commit }, recipeId) {
      commit('REMOVE_FAVORITE', recipeId)
    },
  },
  modules: {
  }
})
