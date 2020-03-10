<template>
  <div id="app">
    <Header v-if="!['landing'].includes($route.name)"/>
    <router-view> </router-view>
   <Footer v-if="!['landing', 'login'].includes($route.name)"/>
  </div>
</template>

<script>
import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";

export default {
  name: 'App',
  components: {
    Header,
    Footer
  }
}
</script>


