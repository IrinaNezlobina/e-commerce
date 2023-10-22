<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <router-link to="/">
            <img src="../assets/images/logo.jpg" alt="">
          </router-link>
        </div>
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/products">Products</RouterLink>
        </nav>
       <Search :search="getSearch" />
        <div class="header__right">
          <div class="favorite">
          </div>
          <div class="cart">
            <router-link to="/cart">
              <ShoppingCart />
              <div v-if="cartStore.countProducts" class="cart__counter">
                {{ cartStore.countProducts }}
              </div>
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import Search from "@/components/Search";
import { useCartStore } from "@/stores/CartStore";

export default {
  name: "TheHeader",

  setup() {
    const cartStore = useCartStore();

    return {
      cartStore,
    }
  },

  components: {Search},

  data() {
    return {
      // valueSearch: '',
      searchResult:[]
    }
  },
  methods: {
    getSearch() {

    },
  },
  props: ['search'],
}
</script>

<style scoped lang="scss">
.header {
  padding: 10px 0;
  margin-bottom: 10px;
  box-shadow: 0 1px 5px #F8BBD0;
  //background: rgba(1, 99, 103, 0.1);
}
.header__logo {
  max-width: 80px;
}
.cart__counter {
  position: absolute;
  width: 15px;
  height: 15px;
  font-size: 12px;
  border-radius: 50%;
  color: white;
  background: #016367;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: -5px;
}
.header__inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.cart {
  position: relative;
  svg {
    color: #016367;
    width: 30px ;
    height: 30px;
  }
}
header {
  line-height: 1.5;
  max-height: 100vh;
}

nav {
  font-size: 12px;
  text-align: center;
  margin-top: 16px;
}

nav a.router-link-exact-active {
  //color: var(--color-text);
  text-decoration: underline;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  color: #252525;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>