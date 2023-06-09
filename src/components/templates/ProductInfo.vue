<template>
    <div class="product-info-container">
        <div class="product-info">
            <product-name :text="product.name"/>
            <product-price :text="product.price" />
        </div>
        <div class="product-review">
            <product-rating :rating="product.starReview" :max="5" />
            <text-description :text="product.description" />
        </div>
        <div class="quantity-container">
            <add-quantity :maxQuantity="product.quantity" />
            <outlined-button :text="addToCartLabel"></outlined-button>
        </div>
        <div class="icon-container">
            <love-icon-button v-bind:isLoved="isLoved" @click="toggleLove" />
            <vertical-divider />
            <message-icon />
            <facebook-icon />
            <instagram-icon />
            <twitter-icon />
        </div>
        <product-group-desc :sku="product.sku" :categories="product.categories" />
    </div>
</template>

<script>
    import ProductName from '../atoms/ProductName.vue';
    import ProductPrice from '../atoms/ProductPrice.vue';
    import AddQuantity from '../molecules/AddQuantity.vue';
    import ProductRating from '../organisms/ProductRating.vue';
    import OutlinedButton from '../atoms/OutlinedButton.vue';
    import TextDescription from '../atoms/TextDescription.vue';
    import LoveIconButton from '../atoms/LoveIconButton.vue';
    import VerticalDivider from '../atoms/VerticalDivider.vue';
    import MessageIcon from '../atoms/MessageIcon.vue';
    import FacebookIcon from '../atoms/FacebookIcon.vue';
    import InstagramIcon from '../atoms/InstagramIcon.vue';
    import TwitterIcon from '../atoms/TwitterIcon.vue';
    import ProductGroupDesc from '../molecules/ProductGroupDesc.vue';

    export default {
        name: 'ProductInfo',
        components: {
            ProductName,
            ProductPrice,
            AddQuantity,
            ProductRating,
            OutlinedButton,
            TextDescription,
            LoveIconButton,
            VerticalDivider,
            MessageIcon,
            FacebookIcon,
            InstagramIcon,
            TwitterIcon,
            ProductGroupDesc,
        },
        props: {
            product: {
                type: Object,
                required: true,
                default: () => ({}),
                validator: (value) => {
                    return (
                        typeof value.name === 'string' &&
                        typeof value.price === 'number' &&
                        Array.isArray(value.starReview) &&
                        typeof value.quantity === 'number' &&
                        typeof value.image === 'string' &&
                        typeof value.description === 'string' &&
                        typeof value.sku === 'string' &&
                        Array.isArray(value.categories)
                    );
                },
            },
        },
        data() {
            return {
                addToCartLabel: 'ADD TO CART',
                isLoved: false,
            }
        },
        mounted() {
            console.log(this.product);
        },
        methods: {
            addToCart() {
                this.$store.commit('addToCart', this.product);
            },
            toggleLove() {
                this.isLoved = !this.isLoved;
            }
        },
        }    
</script>

<style scoped>
    .product-info-container {
        display: flex;
        flex-direction: column;
        gap: 40px;
        padding-left: 30px;
        padding-right: 30px;
        justify-content: flex-start;
        width: 50%;
    }
    .product-info {
        display: flex;
        flex-direction: column;
        gap: 8px;
    }

    .product-review {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    .quantity-container {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 16px;
    }

    .icon-container {
        padding: 5px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 24px;
    }
</style>