import { createStore } from "vuex";

const cartStore = createStore({
  state() {
    return {
      cart: [],
    };
  },
  mutations: {
    addToCart(state, productId) {
      state.cart.push(productId);
    },
  },
});

export default cartStore;
