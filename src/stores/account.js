const state = {
  account: {
    id: 1,
    name: "Katherine",
    email: "katherine@gmail.com",
  },
  orders: [
    {
      orderId: 1,
      orderDate: "2021-01-01",
      orderStatus: "Delivered",
      orderTotal: 100,
      orderItems: [
        {
          productId: 1,
          productName: "Lira Earrings",
          productPrice: 20,
          productImage: "https://i.ibb.co/0j4Hb6X/img-01.png",
          productQuantity: 2,
        },
        {
          productId: 2,
          productName: "Hal Earrings",
          productPrice: 25,
          productImage: "https://i.ibb.co/0j4Hb6X/img-01.png",
          productQuantity: 1,
        },
      ],
    },
  ],
  cart: [
    {
      productId: 1,
      productName: "Lira Earrings",
      productPrice: 20,
      productImage: "https://i.ibb.co/0j4Hb6X/img-01.png",
      productQuantity: 2,
    },
  ],
  lovedItems: [1, 2, 3],
};

const getters = {
  getLovedItemsById: (state) => (id) => {
    return state.lovedItems.find((item) => item.id === id) ? true : false;
  },
  addOrRemoveFromLovedItems: (state) => (id) => {
    if (state.lovedItems.find((item) => item.id === id)) {
      return state.lovedItems.filter((item) => item.id !== id);
    } else state.lovedItems.push(id);
  },
  addToCart: (state) => (product) => {
    state.cart.push(product);
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
