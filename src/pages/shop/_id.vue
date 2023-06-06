<template>
    <div>
        shop details page {{ id }}
    </div>
</template>

<script>
    import { useRoute } from 'vue-router';

    export default {
        name: 'ShopDetail',
        setup() {
            const route = useRoute();
            const id = route.params.id;
            return { id };
        }
    }
</script>

<style scoped></style>
