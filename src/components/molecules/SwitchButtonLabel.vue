<template>
    <div class="switch-container">
        <p>{{ text }}</p>
        <SwitchButton />
    </div>
</template>

<script>

    import SwitchButton from '../atoms/SwitchButton.vue';

    export default {
        name: 'SwitchButtonLabel',
        props: {
            text: {
                type: String,
                required: true,
            }
        },
        components: {
            SwitchButton,
        }
    }
</script>

<style>
    .switch-container {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
        padding-top: 10px;
        padding-bottom: 10px;
    }
</style>
