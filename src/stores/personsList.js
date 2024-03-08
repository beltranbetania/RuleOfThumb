
import { defineStore } from 'pinia'

export const usePersonsListStore = defineStore('personsList', {
  state: () => ({
    loading: true,
    isGrid:false
  }),
  actions: {
    setLoadingState(showFlag) {
      this.loading= showFlag
    },

    setGridState(gridFlag) {
      this.isGrid= gridFlag
    },
    
  }
})