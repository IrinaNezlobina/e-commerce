<template>
  <div class="cart">
    <h2>Корзина</h2>
    <div class="products">
      <div
        v-for="(product, index) in cartStore.cart"
        class="product">
        <div class="product__title">
          {{ product.title }}
        </div>
        <div class="">
          {{ (product.price * product.quantity).toFixed(2) }}
        </div>
        <div class="">
          Кол-во: {{ product.quantity }}
        </div>
        <div class="buttons">
          <div
            @click="addQty(index)"
            class="increment">+</div>
          <div
            @click="removeQty(index)"
            class="decrement">-</div>
        </div>
        <div
          @click="cartStore.removeProduct(product.id)"
          class="delete">x</div>
      </div>
    </div>
    <div class="total">
      Общая сумма {{ total.toFixed(2) }}
    </div>
  </div>
</template>

<script>
import { useCartStore } from '../stores/CartStore';

export default {
  name: 'Cart',

  setup() {
    const cartStore = useCartStore();

    return {
      cartStore,
    }
  },

  data() {
    return {
      str: '123',
    }
  },

  methods: {
    addQty(index) {
      if (this.cartStore.cart[index].quantity !== 99) {
        this.cartStore.cart[index].quantity++;
      }
    },

    removeQty(index) {
      if (this.cartStore.cart[index].quantity !== 1)
      this.cartStore.cart[index].quantity--;
    },
  },

  computed: {
    total() {
      let total = 0;

      this.cartStore.cart.map((item)=> {
        total = total + (item.quantity * item.price);
      });

      return total;
    },
  },

  components: {},

  mounted() {},
}
</script>

<style lang="scss" scoped>
.cart {
  padding: 25px;
  background: #252525;
}

.products {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.product {
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 36px 0 16px;
  background: #252525;
  &__title {
    max-width: 150px;
    min-width: 150px;
  }
}

.buttons  {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 50px;
  color: #252525;
  gap: 16px;
  font-size: 18px;
  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 36px;
    height: 36px;
    background: #fff;
    cursor: pointer;
  }
}

.delete {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 16px;
  height: 16px;
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
}

.total {
  margin-top: 25px;
  text-align: right;
  font-size: 18px;
}
</style>
