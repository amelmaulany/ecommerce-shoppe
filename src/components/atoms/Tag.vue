<template>
    <div class="tag">
        <p class="text">{{ text }}</p>
    </div>
</template>

<script>
    export default {
        name: 'TagProduct',
        props: {
            text: {
                type: String,
                required: true,
            }
        }
    }
</script>

<style scoped>
    .tag {
        background-color: #A18A68;
        border-radius: 4px;
        padding: 2px 8px;
        display: inline-block;
    }
    .text {
        color: #fff;
        font-size: 12px;
        font-weight: 400;
    }
</style>
