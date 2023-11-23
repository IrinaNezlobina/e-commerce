import {defineStore} from 'pinia';

export const useFavStore = defineStore('favStore', {
    state: () => ({
        favoriteArr: []
    }),

    getters: {},

    actions: {
        addToFavorite(item) {

            if (this.favoriteArr.find((el) => el.id === item.id)) {
                console.log(444)
                /* Ищет элемент */
                const product = this.favoriteArr.find((el) => el.id === item.id);
                // item.classList.remove('favorite')
                console.log(item)
                /* Ищем index */
                const index = this.favoriteArr.indexOf(product);
                this.favoriteArr.splice(index, 1);
                // this.favoriteArr[index].quantity++;
            } else {
                // item.classList.add('favorite')
                // item.quantity = 1;
                this.favoriteArr.push(item);
            }
        }
    },
    persist: true
    

});
