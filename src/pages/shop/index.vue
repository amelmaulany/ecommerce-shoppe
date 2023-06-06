<template>
    <div class="page">
      <HeaderText :text="headerText" />
      <div class="mobile-filter">
        <MobileFilter />
      </div>
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
              v-for="product of products"
              :key="product.name" 
              :name="product.name"
              :image="product.image"
              :price="product.price"
              :tags="product.tags"
              @click="navigateToShopDetail(product.id)"
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
    import MobileFilter from '../../components/molecules/MobileFilter.vue';

    import ProductCard from '../../components/organisms/ProductCard.vue';
    import SearchIcon from '../../components/atoms/SearchIcon.vue';

    import { mapGetters } from 'vuex';

    export default {
        name: 'ShopPage',
        components: {
            HeaderText,
            InputBar,
            DropDown,
            RangeSlider,
            SwitchButtonLabel,
            ProductCard,
            MobileFilter,
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
            navigateToShopDetail(id) {
                console.log('id', id);
                this.$router.push(`/shop/${id}`);
            }
        },
        computed: {
            ...mapGetters(['getAllProducts']),
            products() {
                return this.getAllProducts;
            }
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
    .mobile-filter {
        display: none;
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
        min-width: 80px;
        gap: 16px;
        max-width: 350px;
        align-items: stretch;
    }

    .search-bar {
        margin-bottom: 18px;
    }

    @media(max-width: 650px) {
        .filter {
            display: none;
        }
        .title {
            margin-top: 20px;
        }
        .body {
            gap: 0px;
        }
        .product-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            width: 100%;
        }
        .mobile-filter {
            display: flex;
        }
    }

    @media(min-width: 900px) {
        .filter {
            width: 200px;
        }
        .product-list {
            display: grid;
            grid-template-columns: repeat(1, 1fr);
            gap: 10px;
            width: 50%;
        }
    }
    @media(min-width: 1000px) {
        .filter {
            width: 250px;
        }
        .product-list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 10px;
            width: 60%;
        }
    }

    @media(min-width: 1200px) {
        .product-list {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            width: 80%;
        }
    }

    @media(min-width: 1400px) {
        .product-list {
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            gap: 10px;
            width: 80%;
        }
    }
    

    
</style>
  