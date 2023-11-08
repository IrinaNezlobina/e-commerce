<template>
  <header class="header">
    <div class="container">
      <div class="header__inner">
        <div class="header__logo">
          <router-link to="/">
            <img alt="" src="../assets/images/logo.jpg">
          </router-link>
        </div>
        <nav class="navigation">
          <RouterLink class="navigation__item" to="/">Home</RouterLink>
          <RouterLink class="navigation__item" to="/products">Products</RouterLink>
        </nav>
        <Search/>
        <div class="header__right">
          <div class="favorite">
            <router-link to="/favorite">
              <vue-feather type="heart" stroke="#F8BBD0"></vue-feather>
              <div v-if="favStore.favoriteArr.length" class="fav__counter">
                {{ favStore.favoriteArr.length }}
              </div>
            </router-link>

          </div>
          <div class="cart">
            <router-link to="/cart">
              <vue-feather type="shopping-cart" stroke="#016367"></vue-feather>

              <ShoppingCart/>
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
import {useCartStore} from "@/stores/CartStore";
import {useFavStore} from "@/stores/FavoriteStore";

export default {
  name: "TheHeader",
  props: ['search'],
  setup() {
    const cartStore = useCartStore();
    const favStore = useFavStore();
    return {
      cartStore, favStore
    }
  },

  data() {
    return {}
  },

  methods: {},

  components: {Search},
}
</script>

<style lang="scss" scoped>
@import "@/styles/base/mixins.scss";

.header {
  padding: 10px 0;
  margin-bottom: 10px;
  box-shadow: 0 1px 5px #F8BBD0;
  position: fixed;
  z-index: 4;
  background: white;
  right: 0;
  left: 0;
  //background: rgba(1, 99, 103, 0.1);
}

.header__logo {
  max-width: 80px;
}

.cart__counter, .fav__counter {
  position: absolute;
  width: 15px;
  height: 15px;
  font-size: 11px;
  border-radius: 50%;
  color: white;
  background: #016367;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: -5px;
}

.fav__counter {
  background: #F8BBD0;
}

.header__inner {

  display: flex;
  justify-content: space-between;
  align-items: center;
  @include breakpoint(lg) {
    position: relative;
  }
}

.cart {
  position: relative;

  svg {
    color: #016367;
    width: 30px;
    height: 30px;
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.navigation {
  margin-inline: auto;
}

.navigation__item {
  font-size: 14px;
  text-align: center;
  margin-top: 16px;
  font-weight: 600;

}

nav a.router-link-exact-active {
  //color: var(--color-text);
  color: #016367;
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

.header__right {
  display: flex;
}

.favorite {
  margin-right: 10px;
  position: relative;
}
</style>