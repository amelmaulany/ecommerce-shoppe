<template>
    <p class="text-description">{{ text }}</p>
</template>

<script>
    export default {
        name: 'TextDescription',
        props: {
            text: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .text-description {
        font-size: 16px;
        font-weight: 400;
        color: #707070;
        text-align: left;
    }
</style>
