<template>
  <div class="content">
    <h1 class="page-title">Catalog</h1>


    <div v-if="data.length" class="products catalog__list">
      <product-item v-for="(item, index) in data" :key="index" :item="item"></product-item>
    </div>
    <div v-if="loading">Идет загрузка ...</div>

  </div>
</template>

<script>
import {getProducts} from '@/api/products';
import ProductItem from "@/components/products/ProductItem.vue";

export default {
  name: 'ProductView',

  data() {
    return {
      data: [],
      loading: true,
      searchResult: [],
    }
  },
  methods: {
    async getData() {
      this.loading = true;

      try {
        const res = await getProducts();

        this.data = res;
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false;
      }
    },


  },
  computed() {
  },
  components: {
    ProductItem,

  },
  mounted() {
    this.getData();
  },
}
</script>


<style lang="scss">
@import "@/styles/base/mixins.scss";

.catalog__list {
  display: grid;
  grid-template-columns: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 20px;
  @include breakpoint(md) {

    grid-template-columns: 1fr 1fr;


  }
  @include breakpoint(lg) {

    grid-template-columns: 1fr 1fr 1fr 1fr;


  }
  @include breakpoint(xl) {

    grid-column-gap: 30px;
    grid-row-gap: 30px;


  }
}
</style>
