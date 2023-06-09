<template>
    <button
      class="button-component"
      @click="handleClick"
      :class="clicked ? 'active-menu' : ''"
    >
        <span class="textbtn" :class="clicked ? 'active-menu' : ''">{{ buttonText }}</span>
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
                console.log('click');
                this.$emit('click');
            },
        },
        mounted() {
            console.log('mounted', this.clicked);
        }
    }
</script>

<style scoped>
 .button-component {
    background-color: transparent;
    padding: 40px;
    cursor: pointer;
    padding: 0;
    height: 100%;
 }
 .textbtn {
    color: #000;
    display: inline-block;
    padding: 5px 10px;
    white-space: nowrap;
 }
 .textbtn:hover {
    color: #707070;
 }
 .active-menu {
    text-decoration: underline;
    text-decoration-thickness: 0.2rem;
    text-underline-offset: 25px;
 }

</style>
