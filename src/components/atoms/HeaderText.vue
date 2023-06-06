<template>
    <p class="title">
        {{ text }}
    </p>    
</template>

<script>
    export default {
        name: 'HeaderText',
        props: {
            text: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style>
    .title {
        font-size: 33px;
        font-style: normal;
        font-weight: 500;
    }
</style>
