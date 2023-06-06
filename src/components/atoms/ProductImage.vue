<template>
    <div class="product-image-container">
        <img :src="image" :alt="alt" />
    </div>
</template>

<script>
    export default {
        name: 'ProductImage',
        props: {
            image: {
                type: String,
                required: true,
            },
            alt: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .product-image-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }

    .product-image-container img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
</style>