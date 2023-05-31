<template>
    <div class="header-bar">
        <Logo />
        <div class="nav-button">
            <div class="text-button">
                <TextButton
                    :clicked="isShopActive"
                    :buttonText="shopButton"
                    @click="handleChangeShop"
                />
                <TextButton
                    :clicked="isBlogActive"
                    :buttonText="blogButton"
                    @click="handleChangeBlog"
                />
                <TextButton 
                    :clicked="isOurStoryActive"
                    :buttonText="ourStoryButton"
                    @click="handleChangeOurStory"
                />
            </div>

            <div class="divider"></div>
            <div class="icon-button">
                <UnderlineIconButton
                    :icon="SearchIcon"
                    :active="isSearchActive"
                    @click="handleSearch"
                />
                <UnderlineIconButton
                    :icon="ShoppingCartIcon"
                    :active="isShoppingCartActive"
                    @click="handleShoppingCart"
                />
                <UnderlineIconButton
                    :icon="AccountIcon"
                    :active="isAccountActive" 
                    @click="handleAccount"
                />
            </div>
        </div>
    </div>
</template>


<script>

    import UnderlineIconButton from '../molecules/UnderlineIconButton.vue';
    import SearchIcon from '../atoms/SearchIcon.vue';
    import ShoppingCartIcon from '../atoms/ShoppingCartIcon.vue';
    import AccountIcon from '../atoms/AccountIcon.vue';
    import Logo from '../molecules/Logo.vue';
    import TextButton from '../molecules/TextButton.vue';

    export default {
        name: 'HeaderBar',
        components: {
            UnderlineIconButton,
            Logo,
            TextButton,
        },
        methods: {
            handleChangeShop() {
                this.isShopActive = true;
                this.isBlogActive = false;
                this.isOurStoryActive = false;
                this.isSearchActive = false;
                this.isShoppingCartActive = false;
                this.isAccountActive = false;
            },
            handleChangeBlog() {
                this.isShopActive = false;
                this.isBlogActive = true;
                this.isOurStoryActive = false;
                this.isSearchActive = false;
                this.isShoppingCartActive = false;
                this.isAccountActive = false;
            },
            handleChangeOurStory() {
                this.isShopActive = false;
                this.isBlogActive = false;
                this.isOurStoryActive = true;
                this.isSearchActive = false;
                this.isShoppingCartActive = false;
                this.isAccountActive = false;
            },
            handleSearch() {
                console.log('handleserach');
                this.isShopActive = false;
                this.isBlogActive = false;
                this.isOurStoryActive = false;
                this.isSearchActive = true;
                this.isShoppingCartActive = false;
                this.isAccountActive = false;
            },
            handleShoppingCart() {
                this.isShopActive = false;
                this.isBlogActive = false;
                this.isOurStoryActive = false;
                this.isSearchActive = false;
                this.isShoppingCartActive = true;
                this.isAccountActive = false;
            },
            handleAccount() {
                this.isShopActive = false;
                this.isBlogActive = false;
                this.isOurStoryActive = false;
                this.isSearchActive = false;
                this.isShoppingCartActive = false;
                this.isAccountActive = true;
            }
        },
        data() {
            return {
                SearchIcon,
                ShoppingCartIcon,
                AccountIcon,
                shopButton: 'Shop',
                blogButton: 'Blog',
                ourStoryButton: 'Our Story',
                isShopActive: true,
                isBlogActive: false,
                isOurStoryActive: false,
                isSearchActive: false,
                isShoppingCartActive: false,
                isAccountActive: false,
            }
        },
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
        /* padding-bottom: 40px; */
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
    .text-button .active {
        text-decoration: underline;
        /* border-bottom: 1px solid #000; */
    }

</style>
