<template>
    <button
      class="outlined-button"
      :style="buttonStyle"
      @click="handleClick"
      @mouseover="isHovered = true"
      @mouseout="isHovered = false"
    >
        {{ text }}
    </button>
</template>

<script>
    export default {
        name: 'OutlinedButton',
        props: {
            text: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
                isHovered: false,
            }
        },
        computed: {
            buttonStyle() {
                return {
                    border: '2px solid black',
                    borderRadius: '4px',
                    fontWeight: '700',
                    backgroundColor: this.isHovered ? 'black' : 'white',
                    color: this.isHovered ? 'white' : 'black',
                }
            }
        },
        methods: {
            handleClick() {
                this.isHovered = false;
                this.$emit('click');
            }
        }
    }
</script>

<style scoped>
    .outlined-button {
        padding: 0.5rem 1rem;
        cursor: pointer;
        width: 100%;
        height: 53px;
    }
</style>