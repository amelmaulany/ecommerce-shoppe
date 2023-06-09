import Img01 from "../assets/product-img/img-01.svg";
import Img02 from "../assets/product-img/img-02.svg";
import Img03 from "../assets/product-img/img-03.svg";
import Img04 from "../assets/product-img/img-04.svg";
import Img05 from "../assets/product-img/img-05.svg";

const state = {
  products: [
    {
      id: 1,
      name: "Lira Earrings",
      price: 20,
      images: [
        {
          id: 1,
          url: Img01,
        },
        {
          id: 2,
          url: Img02,
        },
        {
          id: 3,
          url: Img03,
        },
        {
          id: 4,
          url: Img04,
        },
      ],
      tags: "- %21",
      starReview: [4, 5, 3, 4, 5, 5, 5],
      quantity: 22,
      sku: "SKU-0001",
      categories: ["Earrings", "Jewelry"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ",
    },
    {
      id: 2,
      name: "Hal Earrings",
      price: 25,
      images: [
        {
          id: 1,
          url: Img02,
        },
        {
          id: 2,
          url: Img03,
        },
        {
          id: 3,
          url: Img04,
        },
        {
          id: 4,
          url: Img05,
        },
      ],
      starReview: [4, 5, 4, 5, 5, 5, 5],
      quantity: 4,
      sku: "SKU-0002",
      categories: ["Earrings", "Jewelry", "New Arrivals", "Gold"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ",
    },
    {
      id: 3,
      name: "Kaede Hair Pin Set Of 3",
      price: 30,
      images: [
        {
          id: 1,
          url: Img03,
        },
        {
          id: 2,
          url: Img04,
        },
        {
          id: 3,
          url: Img05,
        },
        {
          id: 4,
          url: Img01,
        },
      ],
      starReview: [5, 5, 5, 4, 5, 5, 5],
      quantity: 7,
      sku: "SKU-0003",
      categories: ["Hair Pin", "Jewelry", "Hair Accessories", "Discount"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ",
    },
    {
      id: 4,
      name: "Hair Pin Set of 3",
      price: 30,
      images: [
        {
          id: 1,
          url: Img03,
        },
        {
          id: 2,
          url: Img04,
        },
        {
          id: 3,
          url: Img05,
        },
        {
          id: 4,
          url: Img01,
        },
      ],
      starReview: [3, 5, 5, 5, 5, 5, 5],
      quantity: 1,
      sku: "SKU-0004",
      categories: ["Hair Pin", "Jewelry", "Hair Accessories"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ",
    },
    {
      id: 5,
      name: "Plaine Necklace",
      price: 19,
      images: [
        {
          id: 1,
          url: Img04,
        },
        {
          id: 2,
          url: Img05,
        },
        {
          id: 3,
          url: Img01,
        },
        {
          id: 4,
          url: Img02,
        },
      ],
      tags: "Sold out",
      starReview: [5, 2],
      quantity: 22,
      sku: "SKU-0005",
      categories: ["Necklace", "Jewelry", "Gold", "Favorite Items"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ",
    },
    {
      id: 6,
      name: "Yuki Hair Pin Set of 3",
      price: 29,
      images: [
        {
          id: 1,
          url: Img05,
        },
        {
          id: 2,
          url: Img01,
        },
        {
          id: 3,
          url: Img02,
        },
        {
          id: 4,
          url: Img03,
        },
      ],
      starReview: [4, 5, 5],
      quantity: 50,
      sku: "SKU-0005",
      categories: ["Hair Pin", "Jewelry", "Hair Accessories", "New Arrivals"],
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis consequat sed eu felis. ",
    },
  ],
};

const getters = {
  getAllProducts: (state) => {
    return state.products;
  },
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === Number(id));
  },
};

export default {
  namespaced: true,
  state,
  getters,
};
