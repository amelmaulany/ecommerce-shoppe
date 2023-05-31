<template>
    <div class="product-card">
        <div class="product-tags">
            <TagProduct :text="tags" v-if="tags"></TagProduct>
        </div>
        <img :src="image" :alt="name" class="product-image">
        <div class="product-info">
            <product-name :text="name"></product-name>
            <product-price :text="price"></product-price>
        </div>
    </div>
</template>

<script>
    import ProductName from '../atoms/ProductName.vue'
    import ProductPrice from '../atoms/ProductPrice.vue'
    import TagProduct from '../atoms/Tag.vue'

    export default {
        name: 'ProductCard',
        components: {
            ProductName,
            ProductPrice,
            TagProduct,
        },
        props: {
            name: {
                type: String,
                required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            image: {
                type: String,
                required: true,
            },
            tags: {
                type: String,
                required: false,
            }
        },
        data() {
            return {
                tagszzz: '50%',
            }
        },
    }
</script>

<style scoped>
    .product-card {
        position: relative;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 16px;
        border-radius: 4px;
        background-color: #fff;
        height: 392px;
        gap: 16px;
    }
    .product-image {
        width: 100%;
        height: 300px;
        border-radius: 8px;
        margin-right: 16px;
    }
    .product-info {
        display: flex;
        flex-direction: column;
        padding-left: 5px;
    }
    .product-tags {
        position:absolute;
        margin-left: 20px;
        margin-top: 16px;
        flex-direction: row;
    }
</style>