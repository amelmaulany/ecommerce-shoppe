<template>
    <div class="star-rating">
        <span>
            {{ getRating(rating, max) }}
        </span>
    </div>
</template>

<script>
    export default {
        name: 'StarRating',
        props: {
            rating: {
                type: Number,
                default: 0,
            },
            max: {
                type: Number,
                default: 5,
            }
        },
        methods: {
            getRating(rate, max) {
                let rating = '';
                for (let i = 0; i < max; i++) {
                    if (i < rate) {
                        rating += '★';
                    } else {
                        rating += '☆';
                    }
                }
                console.log(rate, max, rating);
                return rating;
            }
        }
    }
</script>

<style scoped>
    .star-rating {
        display: inline-block;
        gap: 10px;
    }
    
</style>