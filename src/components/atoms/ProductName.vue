<template>
    <p class="product-name">{{ text }}</p>
</template>

<script>
    export default {
        name: 'ProductName',
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
        color: #000;
        font-size: 20px;
        font-weight: 400;
    }
</style>