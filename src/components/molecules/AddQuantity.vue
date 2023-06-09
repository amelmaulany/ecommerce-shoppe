<template>
    <div class="add-quantity-container">
        <button class="change-quantity-button" @click="decrementQuantity" :disabled="quantity <= 1">-</button>
        <span class="current-quantity">{{ quantity }}</span>
        <button class="change-quantity-button" @click="incrementQuantity" :disabled="quantity >= maxQuantity">+</button>
    </div>
</template>

<script>
    export default {
        name: 'AddQuantity',
        props: {
            maxQuantity: {
                type: Number,
                required: true,
            },
        },
        data() {
            return {
                quantity: 1,
            }
        },
        methods: {
            incrementQuantity() {
                if (this.quantity < this.maxQuantity) this.quantity += 1
            },
            decrementQuantity() {
                if (this.quantity > 1) this.quantity -= 1
            }
        }
    }
</script>

<style scoped>
    .add-quantity-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: inherit;
        height: 53px;
        border-radius: 4px;
        background-color: #EFEFEF;
        font-weight: 600;
        padding: 5px;
        min-width: 100px;
    }
    button {
        padding: 0.5rem;
        font-size: 1rem;
    }
    .current-quantity {
        margin: 0 0.5rem;
        font-size: 1.1rem;
    }

    :disabled {
        color: #a4a4a4;
    }

</style>