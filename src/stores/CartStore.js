import { defineStore } from 'pinia';

export const useCartStore = defineStore('cartStore', {
    state: () => ({
       cart: [],
    }),

    /* return значение, которое нам нужно */
    getters: {
        countProducts() {
          let total = 0;

          this.cart.map((item) => {
              total = total + item.quantity;
          });

          return total;
        },
    },

    actions: {
        /* async функции */
        // async getCartProducts() {
        //     try {
        //         const res = await getProducts();
        //
        //         this.cart = res;
        //     } catch (e) {
        //         console.log(e);
        //     }
        // },

        addProduct(item) {
            /* Если элемент есть в корзине, то qty +1 */
            if (this.cart.find(el => el.id === item.id)) {
                /* Ищет элемент */
                const product = this.cart.find(el => el.id === item.id);
                /* Ищем index */
                const index = this.cart.indexOf(product);

                this.cart[index].quantity++;
            } else {
                item.quantity = 1;
                this.cart.push(item);
            }
        },

        removeProduct(id) {
            const product = this.cart.find(item => item.id === id);
            const index = this.cart.indexOf(product);

            this.cart.splice(index, 1);
        },
    }
});