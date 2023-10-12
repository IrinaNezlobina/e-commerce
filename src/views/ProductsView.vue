<template>
  <div class="content">
    <el-space :size="size" :spacer="spacer">
      <div v-for="i in 2" :key="i">
        <el-button> button {{ i }} </el-button>
      </div>
    </el-space>
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
    }
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
.catalog__list {
  //@include breakpoint(lg) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
  //}

}
</style>
