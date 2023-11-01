import { defineStore } from 'pinia';

export const useFavStore = defineStore('favStore', {
  state: () => ({
    favoriteArr: []
  }),

  getters: {},

  actions: {
    addToFavorite(item) {
      if (this.favoriteArr.find((el) => el.id === item.id)) {
        /* Ищет элемент */
        const product = this.favoriteArr.find((el) => el.id === item.id);
        /* Ищем index */
        const index = this.favoriteArr.indexOf(product);

        this.favoriteArr[index].quantity++;
      } else {
        item.quantity = 1;
        this.favoriteArr.push(item);
      }
    }
  }
});
