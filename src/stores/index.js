import { createStore } from "vuex";
import product from "./product";
import account from "./account";

const store = createStore({
  modules: {
    product,
    account,
  },
});

export default store;
