<template>
  <div class="catalog__list">

    <product-item v-for="(product, index) in favStore.favoriteArr" :key="index" :item="product"></product-item>

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

</style>