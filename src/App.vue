<template>
  <div id="app">
    <div>
      <Home v-if="token" />
      <HomeUser v-else />
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Footer from './components/Footer.vue'
import HomeUser from './components/HomeUser.vue';
import Checkbox from './components/common/Checkbox.vue';
export default {
  name: 'App',
  data() {
    return {
      token: this.$token
    }
  },
  components: {
    Home,
    Footer,
    HomeUser,
    Checkbox
  },

}
</script>

<style lang="scss">
* {
  margin: 0;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
