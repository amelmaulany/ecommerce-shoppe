<template>
    <div class="page">
      <HeaderText :text="headerText" />
      <div class="body">
        <div class="filter">
            <div class="search-bar">
                <InputBar :placeholder="placeholderSearch" :icon="iconSearch" />
            </div>
            <DropDown 
                :options="shopByOptions" 
                :selectedOption="selectedShopByOption"
                :isOpen="isShopDropdownOpen"
                @update:selectedOption="onSelectShopChange"
                @update:isOpen="onShopDropdownStateChange"
            />
            <DropDown 
                :options="sortByOptions" 
                :selectedOption="selectedSortByOption"
                :isOpen="isSortDropdownOpen"
                @update:selectedOption="onSelectSortChange"
                @update:isOpen="onSortDropdownStateChange"
            />
            <RangeSlider />
            <SwitchButtonLabel :text="onSaleText" />
            <SwitchButtonLabel :text="inStockText" />
        </div>
        <div class="product-list">
            <ProductCard
              v-for="product of productArr"
              :key="product.name" 
              :name="product.name"
              :image="product.image"
              :price="product.price"
              :tags="product.tags"
            />
        </div>
      </div>
    </div>
</template>

<script>
    import HeaderText from '../../components/atoms/HeaderText.vue';
    
    import InputBar from '../../components/molecules/InputBar.vue';
    import DropDown from '../../components/molecules/DropDown.vue';
    import RangeSlider from '../../components/molecules/RangeSlider.vue';
    import SwitchButtonLabel from '../../components/molecules/SwitchButtonLabel.vue';
    import ProductCard from '../../components/organisms/ProductCard.vue';

    import Img01 from '../../assets/product-img/img-01.svg';
    import Img02 from '../../assets/product-img/img-02.svg';
    import Img03 from '../../assets/product-img/img-03.svg';
    import Img04 from '../../assets/product-img/img-04.svg';
    import Img05 from '../../assets/product-img/img-05.svg';

    import SearchIcon from '../../components/atoms/SearchIcon.vue';

    export default {
        name: 'ShopPage',
        components: {
            HeaderText,
            InputBar,
            DropDown,
            RangeSlider,
            SwitchButtonLabel,
            ProductCard,
        },
        data() {
            return {
                placeholderSearch: 'Search...',
                iconSearch: SearchIcon,
                isShopDropdownOpen: false,
                isSortDropdownOpen: false,
                shopByOptions: [
                    'All',
                    'Bags',
                    'Wallets',
                    'Accessories',
                    'Shoes',
                    'Clothes',
                ],
                sortByOptions: [
                    'Newest',
                    'Price: Low to High',
                    'Price: High to Low',
                ],
                selectedShopByOption: 'Shop By',
                selectedSortByOption: 'Sort By',
                headerText: 'Shop The Latest',
                onSaleText: 'On Sale',
                inStockText: 'In Stock',
                productArr: [
                    {
                        name: 'Lira Earrings',
                        price: 20,
                        image: Img01,
                        tags: '- %21',
                    },
                    {
                        name: 'Hal Earrings',
                        price: 25,
                        image: Img02,
                    },
                    {
                        name: 'Kaede Hair Pin Set Of 3',
                        price: 30,
                        image: Img03,
                    },
                    {
                        name: 'Hair Pin Set of 3',
                        price: 30,
                        image: Img03,
                    },
                    {
                        name: 'Plaine Necklace',
                        price: 19,
                        image: Img04,
                        tags: 'Sold out',
                    },
                    {
                        name: 'Yuki Hair Pin Set of 3',
                        price: 29,
                        image: Img05,
                    },
                ]
            }
        },
        methods: {
            onSelectShopChange(option) {
                this.selectedShopByOption = option;
                this.isShopDropdownOpen = true;
                this.isSortDropdownOpen = false;
            },
            onShopDropdownStateChange(isOpen) {
                this.isShopDropdownOpen = isOpen;
                if (isOpen) this.isSortDropdownOpen = false;
            },
            onSelectSortChange(option) {
                this.selectedSortByOption = option;
                this.isSortDropdownOpen = true;
                this.isShopDropdownOpen = false;
            },
            onSortDropdownStateChange(isOpen) {
                this.isSortDropdownOpen = isOpen;
                if (isOpen) this.isShopDropdownOpen = false;
            },

        }
    }
</script>

<style scoped>
    .page {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 38px;
    }
    .title {
        margin-top: 56px;
    }
    .body {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        width: 100%;
        gap: 50px;
    }
    .filter {
        display: flex;
        flex-direction: column;
        min-width: 100px;
        gap: 16px;
        max-width: 350px;
    }
    .search-bar {
        margin-bottom: 18px;
    }

    .product-list {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 24px;
        width: 80%;
    }
</style>
  