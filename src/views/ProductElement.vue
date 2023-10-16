<template>
  <div class="product">

<!--{{ product.rating.rate}}-->
    <div class="product__item">
      <div class="product__image">
        <img :src="product.image"/>
      </div>


    </div>
    <div v-if="loading">Идет загрузка ...</div>

  <div class="product__info">
    <div class="product__title">{{ product.title }} </div>
    <div class="product__description">{{ product.description }} </div>
    <div class="product__price">
      {{ product.price }} $
    </div>
    <el-rate
        v-model="rating"
        disabled
        show-score
        text-color="#ff9900"
        score-template=""
    />
<!--{{ product.rating.rate}}-->
  </div>
  </div>
</template>

<script>
import {getProduct} from '@/api/products';

export default {
  name: "ProductElement",
  data() {
    return {
      product: {},
      loading: true,
      rating: null
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
    // this.rating = this.product.rating.rate;
  },
}
</script>

<style scoped lang="scss">
.product__item {
  box-shadow: 0 5px 22px rgba(0,0,0,.1); height: 500px; width: 500px;
  padding: 20px;
}
.product {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;color: black;
}
.product__title {
  margin-bottom: 10px;
  font-size: 20px;
}
.product__description {
font-size: 16px ;
  margin-bottom: 10px;
}
.product__price {
  font-size: 30px;
  font-weight: 600;
}
.product__info {
  padding: 20px;
}
.product__image {


  //@include ratio(500, 200);
  //@include textLimit(3);
  padding-bottom: 100%;
  display: block;
  height: 0;

  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: absolute;
  }
}
</style>