<template>
    <div class="mobile-filter-component">
        <IconButton
            :icon="FilterIcon"
            :active="isFilterActive"
            @click="handleFilter"
        />
        <span class="">Filters</span>
    </div>
</template>

<script>
    import FilterIcon from '../atoms/FilterIcon.vue';
    import IconButton from '../molecules/IconButton.vue';

    export default {
        name: 'MobileFilter',
        components: {
            IconButton,
        },
        methods: {
            handleFilter() {
                this.isFilterActive = !this.isFilterActive;
                if (this.isFilterActive) alert('Filter');
            },
        },
        data() {
            return {
                FilterIcon,
                isFilterActive: false,
            };
        }
        }
</script>

<style scoped>
    .mobile-filter-component {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 10px;
    }
    .filter-text {
        font-size: 12px;
        font-weight: 400;
        color: #A18A68;

    }
</style>
