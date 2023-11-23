<template>
  <div v-if="favStore.favoriteArr.length" class="catalog__list">
    <product-item v-for="(product, index) in favStore.favoriteArr" :key="index" :item="product"></product-item>
  </div>
  <div v-else class="fav-empty">
    <h1>
      There is nothing in favorites
    </h1>
  </div>
</template>

<script>

import {useFavStore} from "@/stores/FavoriteStore";
import ProductItem from "@/components/products/ProductItem.vue";

export default {
  name: 'FavoriteView.vue',

  setup() {
    const favStore = useFavStore();

    return {
      favStore,
    }
  },
  methods: {},
  computed: {},
  components: {
    ProductItem,
  },
}
</script>

<style scoped>
.fav-empty {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}
</style>