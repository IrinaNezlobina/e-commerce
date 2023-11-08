<template>
  <div>

    <div v-if="data.length" class="products catalog__list">
      <swiper :effect="'fade'" :centeredSlides="true"
              :autoplay="{
        delay: 500,

      }" :slides-per-view="3"
              :space-between="20"

      >
        <swiper-slide class="product-slide" v-for="(item, index) in data" :key="index" :item="item">
          <img :src="item.image"/>
        </swiper-slide>

      </swiper>
    </div>

    <router-link class="btn btn--green" to="/products">In catalog</router-link>
  </div>
</template>

<script>
// import { RouterLink, RouterView } from 'vue-router';
import {getProducts} from '@/api/products';
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay} from 'swiper/modules';

import 'swiper/css';

export default {
  name: 'HomeView',
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
  components: {
    Swiper,
    SwiperSlide,
  },
  mounted() {
    console.log(this.data)
    this.getData();
  },
  setup() {
    return {
      modules: [Autoplay],
    };
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
</style>
