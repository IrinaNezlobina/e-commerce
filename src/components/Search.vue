<template>
  <div class="header__search">
    <input
        v-model="valueSearch"
        placeholder="Search"
        type="search"
        @input="change">
    <div v-if="products.length" class="block">
      <div
          v-for="product in products"
          class="block-item">
        {{ product }}
      </div>
    </div>
  </div>
</template>

<script>
import {useSearchStore} from "@/stores/SearchStore";

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
    /* Custom case */
    // debounceInput: debounce(() => {
    //
    // }, 500),
    change() {
      if (this.valueSearch) {
        this.storeSearch.getSearch(this.valueSearch);
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = 'auto';
      }
    },
  },

  computed: {
    products() {
      return this.storeSearch.searchResult;
    },
  },
};
</script>

<style lang="scss" scoped>
.block {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  top: 85px;
  right: 0;
  bottom: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  overflow-y: auto;
  max-height: calc(100vh - 85px);
  z-index: 1000;

  &-item {
    width: 30%;
    background: black;
  }
}

.header__search {
  margin-right: 20px;
  margin-left: auto;

  input {
    border: unset;
    box-shadow: 0 5px 22px rgba(0, 0, 0, 0.1);
    padding: 8px 15px;

  }
}
</style>