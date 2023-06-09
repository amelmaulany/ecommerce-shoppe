<template>
    <div>
        <div class="tab-titles">
            <text-button
                v-for="(title, index) in titles"
                :key="index"
                :class="{ 'active': activeTabIndex === index }"
                :text="title"
                :active="index === activeTabIndex"
                @click="changeTab(index)"
            />
        </div>
        <div class="tab-contents">
            <component :is="activeTabComponent" :props="activeTabProps" />
        </div>
    </div>
</template>

<script>
    import TextButton from '../molecules/TextButton.vue';

    export default {
        name: 'TabView',
        components: { 
            TextButton,
        },
        props: {
            titles: {
                type: Array,
                required: true,
            },
            contents: {
                type: Array,
                required: true,
            },
            propsData: {
                type: Array,
                default: () => [],
            },
        },
        data() {
            return {
                activeTabIndex: 0,
            }
        },
        computed: {
            activeTabComponent() {
                return this.contents[this.activeTabIndex];
            },
            activeTabProps() {
                return this.propsData[this.activeTabIndex] || {};
            }

        },
        methods: {
            changeTab(index) {
                this.activeTabIndex = index;
            }
        }
    }
</script>

<style scoped>
    .tab-titles {
        display: flex;
    }

    .tab-titles button {
        padding: 8px 16px;
        background-color: #f0f0f0;
        border: none;
        border-bottom: 2px solid #ccc;
        cursor: pointer;
    }

    .tab-titles button.active {
        border-bottom: 2px solid #000;
    }

    .tab-contents {
        margin-top: 16px;
    }
</style>