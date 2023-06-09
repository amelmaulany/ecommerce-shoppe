<template>
    <div>
        <tab-view :titles="titles" :contents="contents" :props-data="propsData" />
    </div>
</template>

<script>
    import TabView from '../organisms/TabView.vue';
    import TextDescription from '../atoms/TextDescription.vue';
    import ProductRating from '../organisms/ProductRating.vue';

    export default {
        name: 'ProductDetails',
        components: {
            TabView,
            // TextDescription,
            // ProductRating,
        },
        props: {
            id: {
                type: Number,
                required: true,
            },
        },
        data() {
            return {
                titles: ['Description', 'Additional Information', 'Reviews'],
                contents: [TextDescription, TextDescription, ProductRating],
                propsData: [
                    { text: 'this is for tab 1: description' },
                    { text: 'this is for tab 2: additional information' },
                    { rating: [4,5,5,5,1,1,1,1], max: 5 },
                ]
            }
        }
    }
</script>
