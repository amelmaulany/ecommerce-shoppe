<template>
    <div class="product-details-container">
        <div class="info-container">
            <photo-slider :photos="product.images" />
            <product-info :product="product" />
        </div>
        <product-details :id="product.id" />
    </div>
</template>

<script>
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';
    import PhotoSlider from '@/components/molecules/PhotoSlider.vue';
    import ProductInfo from '@/components/templates/ProductInfo.vue';
    import ProductDetails from '@/components/templates/ProductDetails.vue';

    export default {
        name: 'ShopDetail',
        setup() {
            const route = useRoute();
            const store = useStore();

            const id = route.params.id;
            const product = store.getters['product/getProductById'](id);
            
            return { id, product };
        },
        components: {
            PhotoSlider,
            ProductInfo,
            ProductDetails,
        },
    }
</script>

<style scoped>
    .product-details-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 50px;
        gap: 70px;
    }
    .info-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: flex-start;
    }
</style>
