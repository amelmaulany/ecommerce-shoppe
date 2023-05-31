<template>
    <div class="container" :class="active ? 'underline' : ''">
        <ButtonAtom
            class="icon-button"
            @click="$emit('click')"
        >
            <component :is="icon" />
        </ButtonAtom>
    </div>
    
</template>

<script>

import ButtonAtom from '../atoms/Button.vue';

export default {
    name: 'UnderlineIconButton',
    components: {
        ButtonAtom,
    },
    props: {
        icon: {
            type: [String, Object],
            required: true,
        },
        active: {
            type: Boolean,
            default: false,
        }
    },
}
</script>

<style scoped>
.container {
    margin-bottom: -4px;
}
.underline {
    border-bottom: 0.2rem solid #000;
    height: 100%;
    margin-bottom: -20px;
 }
</style>
