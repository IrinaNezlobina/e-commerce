<template>
  <div class="header__search">
    <input
        v-model="valueSearch"
        placeholder="Search"
        type="search"
        @input="debouncedHandler">
    <div v-if="products.length" :class="{'active':valueSearch}" class="block catalog__list"
         v-on:click.stop="valueSearch = null">

      <product-item v-for="(product, index) in storeSearch.searchResult" :key="index" :item="product"></product-item>
    </div>
  </div>
</template>

<script>
import {useSearchStore} from "@/stores/SearchStore";
import {debounce} from "debounce";
import ProductItem from "@/components/products/ProductItem.vue";

export default {
  name: "Search",

  setup() {
    const storeSearch = useSearchStore();

    return {
      storeSearch,
    }
  },

  data() {
    return {
      valueSearch: null,
    }
  },

  methods: {
    debouncedHandler: debounce(function () {
      if (this.valueSearch) {
        console.log(this.valueSearch);
        this.storeSearch.getSearch(this.valueSearch);
        document.body.style.overflow = 'hidden';
      } else {
        console.log(777)
        document.body.style.overflow = 'auto';
      }
    }, 500),
  },

  computed: {
    products() {
      return this.storeSearch.searchResult;
    },
  },
  components: {
    ProductItem,

  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/base/mixins.scss";

.block {
  position: fixed;
  top: 85px;
  @include breakpoint(md) {
    grid-template-columns: repeat(3, 1fr);
  }
  @include breakpoint(lg) {
    grid-template-columns: repeat(5, 1fr);
  }

  padding: 30px;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  max-height: calc(100vh - 85px);
  z-index: 1000;
  visibility: hidden;
  opacity: 0;

  &.active {
    opacity: 1;
    visibility: visible;
  }

  &-item {
    width: 30%;
    background: black;
  }
}

.header__search {
  margin-right: 20px;
  order: -2;
  flex-basis: 100%;
  padding-top: 12px;

  input {
    border: unset;
    box-shadow: 0 5px 22px rgba(0, 0, 0, 0.1);
    padding: 8px 15px;
    border-radius: 6px;
    display: block;
    width: 100%;
    margin-bottom: 10px;

  }

  @include breakpoint(lg) {
    padding-top: 0px;
    flex-basis: unset;
    order: unset;

  }
}
</style>
