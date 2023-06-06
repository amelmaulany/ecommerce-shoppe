<template>
    <div class="product-detail-container">
        <PhotoSlider :photos="product.images" />
    </div>
</template>

<script>
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';
    import PhotoSlider from '@/components/organisms/PhotoSlider.vue';

    export default {
        name: 'ShopDetail',
        setup() {
            const route = useRoute();
            const store = useStore();

            const id = route.params.id;
            const product = store.getters.getProductById(id);
            
            return { id, product };
        },
        components: {
            PhotoSlider,
        },
    }
</script>

<style scoped>
    .product-detail-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        margin-top: 50px;
    }
</style>
