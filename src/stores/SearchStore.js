import {defineStore} from 'pinia';
import {getProducts} from '@/api/products';

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
                // console.log(this.searchResult);
            } else {
                this.searchResult = [];
                this.isFavorite = !this.isFavorite
                console.log(this.searchResult, 2222);
                console.log(2313);
            }
        }
    }
});
