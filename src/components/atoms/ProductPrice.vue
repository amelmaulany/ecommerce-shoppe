<template>
    <p class="product-price">${{ text }}</p>
</template>

<script>
    export default {
        name: 'ProductPrice',
        props: {
            text: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .product-name {
        color: #A18A68;
        font-size: 20px;
        font-weight: 500;
    }
</style>