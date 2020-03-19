<template>
  <div id="app">
    <Header v-if="!['landing', 'login'].includes($route.name)"/>
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




<style>
@import url('https://fonts.googleapis.com/css?family=Lato:300,300i,400,700&display=swap');
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: Lato, sans-serif;
  color: #787272;
}

</style>

