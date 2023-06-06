<template>
    <button @click="changeTheme">Change Theme</button>
</template>

<script>
    import theme from '../../theme.js'

    export default {
        name: 'ThemeSwitcher',
        methods: {
            changeTheme() {
                theme.currentTheme = theme.currentTheme === 'light' ? 'dark' : 'light';

                const root = document.documentElement;

                // Update CSS variables based on the selected theme
                root.style.setProperty('--color-accent', theme.currentTheme === 'light' ? '#A18A68' : '#B4A186');
                root.style.setProperty('--color-white', theme.currentTheme === 'light' ? '#FFFFFF' : '#FFFFFF');
                root.style.setProperty('--color-black', theme.currentTheme === 'light' ? '#000000' : '#0A0A0A');
                // Update other CSS variables as needed

                root.setAttribute('data-theme', theme.currentTheme);
            }
        }
    }
</script>
