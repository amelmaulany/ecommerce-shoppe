<template>
    <button class="button" :class="{'active': active}">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'ButtonAtom',
        props: {
            active: {
                type: Boolean,
                default: false,
            }
        },
        methods: {
            onClick() {
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>
    .button {
        background-color: transparent;
        border: none;
        padding: 10px;
        cursor: pointer;
        padding: 0;
    }

    .button.active {
        border-bottom: 1px;
        border-bottom-color: #000;
    }
</style>
