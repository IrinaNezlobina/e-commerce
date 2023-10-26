import { defineStore } from 'pinia';
import { getProducts } from '@/api/products';

export const useSearchStore = defineStore('searchStore', {
  state: () => ({
    catalog: [],
    searchResult: []
  }),

  getters: {},

  actions: {
    async getSearchProducts() {
      try {
        this.catalog = await getProducts();
      } catch (e) {
        console.log(e);
      }
    },

    getSearch(val) {
      if (val) {
        this.searchResult = this.catalog.filter((elem) =>
          elem.title.toLowerCase().includes(val.toLowerCase())
        );
      } else {
        this.searchResult = [];
      }
    }
  }
});
