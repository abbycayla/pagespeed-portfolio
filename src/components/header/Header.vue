<template>
  <nav>
    <ul>
      <li><router-link v-bind:to="'/home'"> back </router-link></li>
        <li><router-link v-bind:to="'/login'"> Admin Log In </router-link> </li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
  nav {
      width: 100%;
      background-color: #FFADB9;
      height: 70px;
      margin-bottom: 70px;
  }

  ul {
      display: flex;
      justify-content: space-between;
      padding: 0px 20px;
  }

  li {
      padding: 22px 0px;
      list-style-type: none;
      font-weight: 400;
      color: white;
      font-family: 'Lato', sans-serif;
  }

  a {
      color: white;
      text-decoration: none;

  }
</style>