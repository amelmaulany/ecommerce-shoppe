<template>
        <div class="product-group-desc">
            <p><span class="black-text">SKU:&nbsp;&nbsp;&nbsp;</span><span class="grey-text">{{ sku }}</span></p>
            <p><span class="black-text">Categories:&nbsp;&nbsp;&nbsp;</span><span class="grey-text">{{ getJoinedCategories(categories) }}</span></p>
        </div>
</template>

<script>
    export default {
        name: 'ProductGroupDesc',
        props: {
            sku: {
                type: String,
                required: true,
            },
            categories: {
                type: Array,
                required: true,
            },
        },
        methods: {
            getJoinedCategories(categories) {
                return categories.join(', ');
            }
        }
    }
</script>

<style scoped>
    .product-group-desc {
        display: flex;
        flex-direction: column;
    }
    .black-text {
        color: #000;
        font-weight: 500;
    }
    .grey-text {
        color: #707070;
    }
   
</style>