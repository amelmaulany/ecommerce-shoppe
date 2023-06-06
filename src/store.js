import { createStore } from "vuex";
import Img01 from "./assets/product-img/img-01.svg";
import Img02 from "./assets/product-img/img-02.svg";
import Img03 from "./assets/product-img/img-03.svg";
import Img04 from "./assets/product-img/img-04.svg";
import Img05 from "./assets/product-img/img-05.svg";

const store = createStore({
  state() {
    return {
      products: [
        {
          id: 1,
          name: "Lira Earringssssss",
          price: 20,
          image: Img01,
          tags: "- %21",
        },
        {
          id: 2,
          name: "Hal Earrings",
          price: 25,
          image: Img02,
        },
        {
          id: 3,
          name: "Kaede Hair Pin Set Of 3",
          price: 30,
          image: Img03,
        },
        {
          id: 4,
          name: "Hair Pin Set of 3",
          price: 30,
          image: Img03,
        },
        {
          id: 5,
          name: "Plaine Necklace",
          price: 19,
          image: Img04,
          tags: "Sold out",
        },
        {
          id: 6,
          name: "Yuki Hair Pin Set of 3",
          price: 29,
          image: Img05,
        },
      ],
    };
  },
  getters: {
    getAllProducts(state) {
      return state.products;
    },
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
  },
});

export default store;
