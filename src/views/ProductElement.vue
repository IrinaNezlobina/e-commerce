<template>
<div class="">
  {{  product }}
  <div class="catalog__item">
    <img
        :src="product.image"

    />
    {{ product.price}} $
  </div>
  <div v-if="loading">Идет загрузка ...</div>
</div>
</template>

<script>
import { getProduct } from '@/api/products';

export default {
  name: "ProductElement",
  data() {
    return {
      product: {},
      loading: true,
    }
  },
  methods: {
    async getData() {
      this.loading = true;

      const id = this.$route.params.id;

      try {
        const res = await getProduct(id);
        if (res) {
          this.product = res;
        } else {
          this.$router.push({name: 'notFound'});
        }
      } catch (e) {
        console.log(e)
      } finally {
        this.loading = false;
      }
    }
  },
  mounted() {
    this.getData();
  },
}
</script>

<style scoped>

</style>