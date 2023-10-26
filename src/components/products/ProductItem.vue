<template>
  <!-- <pre v-for="it in  cartItems" class="cart">-->
  <!--  {{ it.title }}-->
  <!--</pre>-->
  <div class="catalog content">
    <el-card :body-style="{ padding: '0px' }" class="catalog__item">
      <router-link
          :to="linkOpen" class="catalog__img">
        <img :src="item.image"/>
      </router-link>

      <router-link
          :to="linkOpen" class="catalog__title"> {{ item.title }}
      </router-link>
      <div class="catalog__bottom">
        <div class="catalog__item-price">
          {{ item.price }} $
        </div>
        <el-rate
            v-model="rating"
            disabled
            score-template=""
            show-score
            text-color="#ff9900"
        />
        <div class="catalog__item-rating">
          {{ rating }}
        </div>
        <button class="btn btn-cart" @click="cartStore.addProduct(item)">Add to cart</button>
      </div>
    </el-card>
  </div>
</template>

<script>
import {useCartStore} from "@/stores/CartStore";

export default {
  name: 'ProductItem',

  props: ['item'],

  setup() {
    const cartStore = useCartStore();
    return {
      cartStore,
    }
  },

  data() {
    return {
      cartItems: [],
      rating: null,
    }
  },
  mounted() {
    this.rating = this.item.rating.rate;
  },
  computed: {
    linkOpen() {
      return `/products/${this.item.id}`;
    },
  },
  components: {},
}
</script>

<style lang="scss">
@import "@/styles/base/mixins.scss";

.catalog__item {
  padding: 20px;
  border-radius: 20px;
  //@include ratio(100, 100);
  box-shadow: 0 5px 22px rgba(0, 0, 0, .1);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: .4s;

  &:hover {
    box-shadow: 0 1px 8px #F8BBD0;
  }

  .el-card__body {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
}

.catalog__img {
  padding-bottom: 100%;
  display: block;
  height: 0;
  overflow: hidden;
  position: relative;
  margin-bottom: 10px;
  @include ratio(333, 334);
  //img {
  //  width: 100%;
  //  height: 100%;
  //  object-fit: contain;
  //  position: absolute;
  //}
}

.catalog__item-price {
  font-size: 20px;
  font-weight: 600;
}

.catalog__title {
  margin-bottom: 10px;
  font-weight: 600;
}

.catalog__bottom {
  margin-top: auto;
}

.btn-cart {
  margin-top: auto;
  background: #016367;

}

.catalog__item-price {
  margin-bottom: 10px;
}

.catalog__item-rating {
  margin-bottom: 10px;
}

</style>
