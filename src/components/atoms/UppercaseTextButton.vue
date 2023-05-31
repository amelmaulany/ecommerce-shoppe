<template>
    <button class="uppercase-text">{{ text }}</button>
</template>

<script>
    export default {
        name: 'UppercaseTextButton',
        props: {
            text: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .uppercase-text {
        background-color: transparent;
        text-transform: uppercase;
        color: #707070;
        font-size: 16px;
        font-weight: 400;
    }
    .uppercase-text:hover {
        color: #000;
    }
    .uppercase-text:active {
        color: #707070;
        font-weight: 400;
    }
</style>
