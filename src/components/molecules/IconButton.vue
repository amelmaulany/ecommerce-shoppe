<template>
    <ButtonAtom class="icon-button" :active="active" @click="$emit('click')">
        <component :is="icon" />
    </ButtonAtom>
</template>

<script>

import ButtonAtom from '../atoms/Button.vue';

export default {
    name: 'IconButton',
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
