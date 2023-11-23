<template>
  <div v-if="cartStore.cart.length" class="cart">
    <h1 class="page-title">Cart</h1>
    <div class="cart__inner">
      <div class="cart__list">
        <div
            v-for="(product, index) in cartStore.cart"
            :key="index"
            class="cart__item">
          <div class="cart__title">
            {{ product.title }}
          </div>
          <div class="cart__price">
            {{ (product.price * product.quantity).toFixed(2) }}
          </div>
          <div class="counter">
            <div
                class="increment"
                @click="addQty(index)">+
            </div>
            <div class="counter-quantity">
              {{ product.quantity }}
            </div>
            <div
                class="decrement"
                @click="removeQty(index)">-
            </div>
          </div>
          <div
              class="delete"
              @click="cartStore.removeProduct(product.id)">
            <vue-feather type="x"></vue-feather>
          </div>
        </div>
      </div>
      <div class="cart__total-container">
        <div class="cart__total">
          Total price {{ total.toFixed(2) }}
        </div>
      </div>
    </div>
  </div>
  <div v-else class="cart-empty">
    <h1>
      Your cart is Empty
    </h1>
  </div>
</template>

<script>
import {useCartStore} from '../stores/CartStore';

export default {
  name: 'Cart',

  setup() {
    const cartStore = useCartStore();

    return {
      cartStore,
    }
  },

  methods: {
    addQty(index) {
      if (this.cartStore.cart[index].quantity !== 99) {
        this.cartStore.cart[index].quantity++;
      }
    },

    removeQty(index) {
      if (this.cartStore.cart[index].quantity !== 1) {
        this.cartStore.cart[index].quantity--;
      }
    },
  },

  computed: {
    total() {
      let total = 0;

      this.cartStore.cart.map((item) => {
        total = total + (item.quantity * item.price);
      })
      return total;
    },
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/base/mixins.scss";

.cart {
  margin-bottom: 50px;
  @include breakpoint(lg) {
    padding: 25px;
  }
  color: #252525;
}

.cart-empty {
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
}

.cart__item {
  display: grid;
  position: relative;
  grid-template-columns: 2fr 1fr 1fr;
  padding: 20px 10px;
  box-shadow: 0 5px 22px rgba(0, 0, 0, 0.1);

  & + .cart__item {
    margin-top: 20px;
  }
}

.cart__title {
  font-weight: 500;
  font-size: 18px;
}

.products {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.cart__price {
  font-size: 16px;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.cart {
  &__inner {
    @include breakpoint(lg) {
      display: grid;
      grid-template-columns: 5fr 2fr;
      grid-column-gap: 20px;
    }
  }

  &__title {
    max-width: 150px;
    min-width: 150px;
  }
}

.cart__total {
  padding: 20px;
  font-size: 20px;
  font-weight: 600;
  box-shadow: 0 5px 22px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
}

.counter {
  display: flex;
  align-items: center;
  min-width: 50px;
  color: #252525;
  font-size: 18px;

  .increment, .decrement {
    display: flex;
    background: #016367;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    width: 36px;
    height: 36px;
    color: #fff;
    cursor: pointer;
  }
}

.counter-quantity {
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.delete {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 8px;
  cursor: pointer;
}

.total {
  margin-top: 25px;
  text-align: right;
  font-size: 18px;
}
</style>