<template>
  <div>
    <div v-if="data.length" class="products catalog__list">
      <!-- Slider main container -->
      <carousel :autoplay="2000" :wrap-around="true" :items-to-show="1.5">
        <slide v-for="(item, index) in data" :key="index" :item="item">
          <div class="carousel__item">
            <img :src="item.image"/>
          </div>
        </slide>

        <template #addons>
          <pagination/>
        </template>
      </carousel>
    </div>

    <router-link class="btn btn--green" to="/products">In catalog</router-link>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router';
import {getProducts} from '@/api/products';
import 'vue3-carousel/dist/carousel.css';
import {Carousel, Slide, Pagination, Navigation} from 'vue3-carousel';

export default {
  name: 'HomeView',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      data: [],
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
  mounted() {
    this.getData();
  },
  /* срабатывает тогда, когда компонент инициализируется */

  /* */
  // created() {
  // },
  /* срабатывает тогда, когда компонент проявляется v-if */
  // activated() {
  // },
  /* срабатывает когда уходишь из компонента */
  deactivated() {
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/base/mixins.scss";

.product-slide {
  @include ratio50(150, 100)
}

.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: #fff;
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;

  img {
    max-width: 400px;
    max-height: 400px;
    object-fit: cover;
  }
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
