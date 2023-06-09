<template>
    <p class="product-price">$ {{ text.toFixed(2) }}</p>
</template>

<script>
    export default {
        name: 'ProductPrice',
        props: {
            text: {
                type: Number,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .product-price {
        color: #A18A68;
        font-size: 16px;
        font-weight: 500;
    }
</style>