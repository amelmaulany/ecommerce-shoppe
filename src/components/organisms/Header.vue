<template>
    <div class="header-bar">
        <Logo />
        <div class="btns-component">
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
                <div class="divider">&nbsp;</div>
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
        <div class="mobile-nav-button">
            <UnderlineIconButton
                :icon="ShoppingCartIcon"
                :active="isShoppingCartActive"
                @click="handleShoppingCart"
            />
            <UnderlineIconButton
                :icon="MinimizeMenuIcon"
                :active="isAccountActive" 
                @click="handleAccount" />
        </div>
    </div>
    <div class="mobile-search">
        <MobileInputBar
            :icon="SearchIcon"
            :placeholder="searchPlaceholder" />
    </div>
</template>


<script>

    import UnderlineIconButton from '../molecules/UnderlineIconButton.vue';
    import SearchIcon from '../atoms/SearchIcon.vue';
    import ShoppingCartIcon from '../atoms/ShoppingCartIcon.vue';
    import MinimizeMenuIcon from '../atoms/MinimizeMenuIcon.vue';
    import AccountIcon from '../atoms/AccountIcon.vue';
    import Logo from '../molecules/Logo.vue';
    import TextButton from '../molecules/TextButton.vue';
    import MobileInputBar from '../molecules/MobileInputBar.vue';

    export default {
        name: 'HeaderBar',
        components: {
            UnderlineIconButton,
            Logo,
            TextButton,
            MobileInputBar,
        },
        methods: {
            handleChangeShop() {
                this.resetActiveMenu();
                this.isShopActive = true;
            },
            handleChangeBlog() {
                this.resetActiveMenu();
                this.isBlogActive = true;
            },
            handleChangeOurStory() {
                this.resetActiveMenu();
                this.isOurStoryActive = true;
            },
            handleSearch() {
                this.resetActiveMenu();
                this.isSearchActive = true;
            },
            handleShoppingCart() {
                this.resetActiveMenu();
                this.isShoppingCartActive = true;
            },
            handleAccount() {
                this.resetActiveMenu();
                this.isAccountActive = true;
            },
            handleMiniFilter() {
                this.resetActiveMenu();
                this.isFilterActive = true;
            },
            resetActiveMenu() {
                this.isShopActive = false;
                this.isBlogActive = false;
                this.isOurStoryActive = false;
                this.isSearchActive = false;
                this.isShoppingCartActive = false;
                this.isAccountActive = false;
                this.isFilterActive = false;
            }
        },
        data() {
            return {
                SearchIcon,
                ShoppingCartIcon,
                AccountIcon,
                MinimizeMenuIcon,
                shopButton: 'Shop',
                blogButton: 'Blog',
                ourStoryButton: 'Our Story',
                isShopActive: true,
                isBlogActive: false,
                isOurStoryActive: false,
                isSearchActive: false,
                isShoppingCartActive: false,
                isAccountActive: false,
                isFilterActive: false,
                searchPlaceholder: 'Search',
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
        padding: 30px;
        width: 100%;
    }
    @media(min-width: 651px) {
        .mobile-nav-button {
            display: none;
        }
        .mobile-search {
            display: none;
        }
    }
    @media(max-width: 650px) {
        .header-bar {
            padding: 0px;
            border-bottom: none;
        }
        .mobile-nav-button {
            display: flex;
            flex-direction: row;
            justify-content: flex-end;
            gap: 15px;
        }
        .mobile-search {
            display: flex;
            margin: 20px 0;
        }
    }

    .btns-component {
        display: none;
    }
    @media(min-width: 800px) {
        .btns-component {
            display: flex;
            right: 0;
            width: 65%;
        }
    }
    .nav-button {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: 45px;
        width: 100%;
        gap: 50px;
    }
    .text-button {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        height: 45px;
        gap: 20px;
        width: 100%;
        text-align: center;
    }
    @media(max-width: 1100px) {
        .nav-button {
            gap: 10px;
        }
        .text-button {
            gap:5px;
        }
        .divider {
            margin: 0 5px;
        }
    }
    .icon-button {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 45px;
        min-width: 100px;
        max-width: 200px;
    }
    .divider {
        width: 1px;
        height: 50%;
        background-color: #707070;
        /* margin: 0 30px; */
    }
    /* .text-button .active {
        text-decoration: underline;
    } */

</style>
