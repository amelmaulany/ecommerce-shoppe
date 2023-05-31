<template>
    <div class="header-bar">
        <Logo></Logo>
        <div class="nav-button">
            <div class="text-button">
                <TextButton :is-clicked="isShopClicked" :button-text="shopButton" @click="handleShopClicked" />
                <TextButton :is-clicked="isBlogClicked" :button-text="blogButton" @click="handleBlogClicked" />
                <TextButton :is-clicked="isOurStoryClicked" :button-text="ourStoryButton" @click="handleStoryClicked" />
            </div>
                <div class="divider"></div>
            <div class="icon-button">
                <IconButton :icon="SearchIcon" :active="true" />
                <IconButton :icon="ShoppingCartIcon" :active="true" />
                <IconButton :icon="AccountIcon" :active="true" />
            </div>
        </div>
    </div>
</template>


<script>
    import IconButton from '../molecules/IconButton.vue';
    import SearchIcon from '../atoms/SearchIcon.vue';
    import ShoppingCartIcon from '../atoms/ShoppingCartIcon.vue';
    import AccountIcon from '../atoms/AccountIcon.vue';
    import Logo from '../molecules/Logo.vue';
    import TextButton from '../molecules/TextButton.vue';

    export default {
        name: 'HeaderBar',
        components: {
            IconButton,
            Logo,
            TextButton,
        },
        methods: {
            handleShopClicked() {
                this.isShopClicked = !this.isShopClicked;
                console.log(this.isShopClicked);
            },
            handleBlogClicked() {
                this.isBlogClicked = !this.isBlogClicked;
            },
            handleStoryClicked() {
                this.isOurStoryClicked = !this.isOurStoryClicked;
            },
        },
        data() {
            return {
                SearchIcon,
                ShoppingCartIcon,
                AccountIcon,
                isShopClicked: false,
                shopButton: 'Shop',

                isBlogClicked: false,
                blogButton: 'Blog',

                isOurStoryClicked: false,
                ourStoryButton: 'Our Story',
            }
        }
    }
</script>

<style scoped>
    .header-bar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 45px;
        background-color: #fff;
        border-bottom: 1px solid #e0e0e0;
        width: 100%;
        padding: 30px;
        padding-bottom: 40px;
    }
    .nav-button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 45px;
        min-width: 200px;
        width: 50%;
    }
    .text-button {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: 45px;
        gap: 50px;
        width: 70%;
        text-align: center;
    }
    .icon-button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 45px;
        min-width: 50px;
        width: 25%;
    }
    .divider {
        width: 1px;
        height: 50%;
        background-color: #707070;
        margin: 0 40px;
    }
</style>
