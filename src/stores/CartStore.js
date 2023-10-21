import { defineStore } from 'pinia';

/* Функция defineStore принимает 2 параметра
* Название store
* Параметры store */

export const useCartStore = defineStore('cartStore', {
  state: () => ({
    cart: [],
  }),

  getters: {
    countProducts() {
      let total = 0;

      this.cart.map((item)=> {
        total = total + item.quantity;
      });

      return total;
    },
  },

  actions: {
    addProduct(item) {
      /* Если элемент есть в корзине, то qty +1 */
      if (this.cart.find(el => el.id === item.id)) {
        /* Ищем сам элемент в нашем массиве */
        let product = this.cart.find(el => el.id === item.id)
        /* Получаем index */
        let index = this.cart.indexOf(product);

        this.cart[index].quantity++;
      } else {
        item.quantity = 1;
        this.cart.push(item);
      }
    },

    removeProduct(id) {
      let item = this.cart.find(item => item.id === id);
      let index = this.cart.indexOf(item);
      this.cart.splice(index, 1);
    },
  },
});
