<template>
  <div class="content">
    <Search :search="getSearch" />
    <el-space :size="size" :spacer="spacer">
      <div v-for="i in 2" :key="i">
        <button class="btn"> button {{ i }} </button>
      </div>

    </el-space>
    <div :data="searchResult" ></div>
    <div v-if="data.length" class="products catalog__list">
      <product-item v-for="(item, index) in data" :key="index" :item="item"></product-item>
    </div>
    <div v-if="loading">Идет загрузка ...</div>

  </div>
</template>

<script>
import { getProducts } from '@/api/products';
import ProductItem from "@/components/products/ProductItem.vue";
import Search from "@/components/Search";

export default {
  name: 'ProductView',

  data() {
    return {
      data: [],
      loading: true,
      searchResult:[]
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

    getSearch(val) {
      this.searchResult = this.catalog.filter((elem) => elem.title.toLowerCase().includes(val.toLowerCase()));
    },
  },

  computed() {},

  mounted() {
    this.getData();
  },

  components: {
    ProductItem,
    Search
  },
}
</script>


<style lang="scss">
.catalog__list {
  //@include breakpoint(lg) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  //}

}
</style>
