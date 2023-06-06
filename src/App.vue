<template>
  <Header></Header>
  <router-view></router-view>
  <Footer></Footer>
</template>

<script>
import Header from './components/organisms/Header.vue'
import Footer from './components/organisms/Footer.vue'

// import ShopPage from './pages/shop/index.vue';

export default {
  name: 'App',
  components: {
    Header,
    // ShopPage,
    Footer,
  },
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
