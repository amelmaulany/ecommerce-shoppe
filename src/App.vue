<template>
  <div :style="{ backgroundColor: themeColors.background, color: themeColors.font }">
    <Header></Header>
    <!-- <ThemeSwitcher /> -->
    <router-view></router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from './components/organisms/Header.vue'
import Footer from './components/organisms/Footer.vue'
import { onMounted } from 'vue'
import theme from './theme.js'
// import ThemeSwitcher from './components/molecules/ThemeSwitcher.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    // ThemeSwitcher,
  },
  computed: {
    themeColors() {
      if (theme.currentTheme === 'light') {
        return {
          background: 'white',
          font: 'black',
        };
      } else {
        return {
          background: 'black',
          font: 'white',
        }
      }
    },
  },
  setup() {
    onMounted(() => {
      document.title = 'Shoppe Ecommerce'
    })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 48px 96px;   
}

@media(max-width: 650px) {
  #app {
    padding: 30px 45px;
  }
}

.body {
  display: flex;
  flex-direction: column;
}
</style>
