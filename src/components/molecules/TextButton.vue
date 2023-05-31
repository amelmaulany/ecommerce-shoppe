<template>
    <button
      class="text-button"
      @click="handleClick"
      :class="clicked ? 'underline' : ''"
    >
        {{ buttonText }}
    </button>
</template>

<script>
    export default {
        name: 'TextButton',
        props: {
            clicked: {
                type: Boolean,
                required: true,
                default: false,
            },
            buttonText: {
                type: String,
                required: true
            }
        },
        methods: {
            handleClick() {
                this.$emit('click');
            },
        }
    }
</script>

<style>
 .text-button {
    background-color: transparent;
    border: none;
    padding: 40px;
    cursor: pointer;
    padding: 0;
    height: 100%;
 }
 .text {
    display: inline-block;
    color: #000;
 }
 .text:hover {
    color: #707070;
 }
 .clicked {
    border-bottom: 2px solid #000;
 }

 .underline {
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 25px;
 }

</style>
