<template>
    <div class="rating-component">
        <star-rating :rating="getFinalRating(rating)" :max="max" />
        <product-description :text="getTotalRatingLength(rating) + ' customer review'"/>
    </div>
</template>

<script>

import StarRating from '@/components/molecules/StarRating.vue';
import ProductDescription from '../atoms/TextDescription.vue';

export default {
    name: 'ProductRating',
    components: {
        StarRating,
        ProductDescription,
    },
    props: {
        rating: {
            type: Array,
            default: () => [0],
        },
        max: {
            type: Number,
            default: 5,
        }
    },
    methods: {
        getFinalRating(rating) {
            let finalRating = 0;
            for (let i = 0; i < rating.length; i++) {
                finalRating += rating[i];
            }
            let averageRating = Math.ceil(finalRating / rating.length);
            return averageRating;
        },
        getTotalRatingLength(rating) {
            return rating.length;
        },
    }
    }
</script>

<style scoped>
    .rating-component {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 24px;
    }
</style>
