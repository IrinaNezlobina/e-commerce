<template>
  <div class="product">

    <!--{{ product.rating.rate}}-->
    <div class="product__item">
      <div class="product__image">
        <img :src="product.image"/>

      </div>


    </div>
    <div v-if="loading">Идет загрузка ...
      <!--      <Skeleton width="5rem" class="mb-2"></Skeleton>-->
    </div>
    <!--    <div class="border-round border-1 surface-border p-4 surface-card">-->
    <!--      <div class="flex mb-3">-->
    <!--        <Skeleton shape="circle" size="4rem" class="mr-2"></Skeleton>-->
    <!--        <div>-->
    <!--          <Skeleton width="10rem" class="mb-2"></Skeleton>-->
    <!--          <Skeleton width="5rem" class="mb-2"></Skeleton>-->
    <!--          <Skeleton height=".5rem"></Skeleton>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--      <Skeleton width="100%" height="150px"></Skeleton>-->
    <!--      <div class="flex justify-content-between mt-3">-->
    <!--        <Skeleton width="4rem" height="2rem"></Skeleton>-->
    <!--        <Skeleton width="4rem" height="2rem"></Skeleton>-->
    <!--      </div>-->
    <!--      <Skeleton></Skeleton>-->
    <!--    </div>-->
    <div class="product__info">
      <!--      <Skeleton width="500px" class="mb-2"></Skeleton>-->
      <div class="product__title">{{ product.title }}</div>
      <div class="product__description">{{ product.description }}</div>
      <div class="product__price">
        {{ product.price }} $
      </div>
      <el-rate
          v-model="rating"
          disabled
          score-template=""
          show-score
          text-color="#ff9900"
      />
      <button class="btn btn--cart btn--green" @click="cartStore.addProduct(product)">Add to cart</button>
    </div>
  </div>
</template>

<script>
import {getProduct} from '@/api/products';
import {useCartStore} from "@/stores/CartStore";

export default {
  name: "ProductElement",

  setup() {
    const cartStore = useCartStore();

    return {
      cartStore,
    }
  },
  skeleton: {
    root: ({props}) => ({
      class: [
        'overflow-hidden',
        '!mb-2',
        'bg-gray-300 dark:bg-gray-800',
        'after:absolute after:top-0 after:left-0 after:right-0 after:bottom-0 after:content after:w-full after:h-full after:bg-blue-400 after:left-full after:transform after:translate-x-full after:z-10 after:bg-gradient-to-r after:from-transparent after:via-white after:to-transparent animate-pulse',
        {
          'rounded-md': props.shape !== 'circle',
          'rounded-full': props.shape == 'circle'
        }
      ]
    })
  },
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

          this.rating = res.rating.rate;
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

<style lang="scss" scoped>
@import "@/styles/base/mixins.scss";

.product__item {
  box-shadow: 0 5px 22px rgba(0, 0, 0, .1);
  height: 500px;
  width: 500px;
  padding: 20px;
  margin-inline: auto;
  @include breakpoint(lg) {
    margin-inline: unset;
  }
}

.product {
  @include breakpoint(lg) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 20px;
  }

  color: black;
}

.product__title {
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: 500;
}

.product__description {
  font-size: 16px;
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