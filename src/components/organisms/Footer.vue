<template>
    <div class="footer">
        <div class="columns">
            <div class="text-btns">
                <UppercaseTextButton
                    v-for="menu of footerMenu" 
                    :key="menu.id" 
                    :text="menu.text"
                />
            </div>
            <CopyRight />
        </div>
        <div class="columns">
            <InputBar
                class="input-bar"
                :placeholder="emailPlaceholder"
                :isDark="true"
                :icon="emailIcon"
            />
            <div class="icon-btns">
                <LinkedinIcon />
                <FacebookIcon />
                <InstagramIcon />
                <TwitterIcon />
            </div>

        </div>
        
    </div>
</template>

<script>
    import UppercaseTextButton from '../atoms/UppercaseTextButton.vue';
    import CopyRight from '../atoms/Copyright.vue';
    import InputBar from '../molecules/InputBar.vue';

    import EnterIcon from '../atoms/EnterIcon.vue';
    import LinkedinIcon from '../atoms/LinkedinIcon.vue';
    import FacebookIcon from '../atoms/FacebookIcon.vue';
    import InstagramIcon from '../atoms/InstagramIcon.vue';
    import TwitterIcon from '../atoms/TwitterIcon.vue';


    export default {
        name: 'FooterComponent',
        components: {
            UppercaseTextButton,
            CopyRight,
            InputBar,
            LinkedinIcon,
            FacebookIcon,
            InstagramIcon,
            TwitterIcon,
        },
        data() {
            return {
                footerMenu: [
                    {
                        id: 1,
                        text: 'Contact'
                    },
                    {
                        id: 2,
                        text: 'Terms of Services'
                    },
                    {
                        id: 3,
                        text: 'Shipping and Returns'
                    },
                ],
                emailPlaceholder: 'Give an email, get the newsletter.',
                emailIcon: EnterIcon,
            }
        }
    }
</script>

<style scoped>
    .footer {
        border-top: 1px solid #D8D8D8;
        margin-top: 50px;
        padding-top: 50px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        width: 100%;
    }
    .text-btns {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
        gap: 40px;
    }
    .columns {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
        gap: 30px;
        width: max-content;
    }

    .input-bar {
        width: 396px;
    }

    .icon-btns {
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;
        gap: 30px;
        width: 100%;
    }
</style>

