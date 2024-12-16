import { defineStore } from 'pinia'

export const useTvFavoritesStore = defineStore('tvFavorites', {
  state: () => ({
    tvs: [],
  }),
  actions: {
    toggleFavorite(tv) {
      const exists = this.tvs.find((t) => t.id === tv.id)
      if (exists) {
        this.tvs = this.tvs.filter((t) => t.id !== tv.id)
      } else {
        this.tvs.push(tv)
      }
    },
    isFavorite(tvId) {
      return this.tvs.some((tv) => tv.id === tvId)
    },
  },
})