<template>
    <button
      class="['text-button', {'clicked': isClicked }]"
    >
        <span class="text">{{ buttonText }}</span>
    </button>
</template>

<script>
    export default {
        props: {
            isClicked: {
                type: Boolean,
                required: true,
            },
            buttonText: {
                type: String,
                required: true
            }
        },
        methods: {
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

 .text-button.underline .text {
    text-decoration: underline;
 }
</style>
