<template>
    <div class="product-card">
        <div class="image-container">
            <TagProduct :text="tags" v-if="tags" class="tag-stick" />
            <img :src="image" :alt="name" class="product-image" />
        </div>
        <div class="product-info">
            <product-name :text="name" />
            <product-price :text="price" />
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

    .image-container {
        position: relative;
        width: 100%;
        min-width: 200px;
        min-height: 200px;
        border-radius: 8px;
        overflow: hidden;
    }

    .tag-stick {
        position: absolute;
        top: 16px;
        left: 16px;
        background-color: rgba(0, 0, 0, 0.6);
        color: #fff;
        padding: 2px 8px;
        border-radius: 4px;
        font-size: 12px;
        font-weight: 400;
    }

    .product-image {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .product-info {
        display: flex;
        flex-direction: column;
        padding-left: 5px;
    }

    .tag {
        background-color: #a18a68;
        border-radius: 4px;
        padding: 2px 8px;
        display: inline-block;
    }
    .text {
        color: #fff;
        font-size: 12px;
        font-weight: 400;
    }
</style>