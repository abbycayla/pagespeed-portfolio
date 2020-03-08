<template>
  <div class="login-content">
      <h1> Log In </h1>
      <div class="login-info">
      <div>
      <label> Username: </label>
      <input type="text"> 
      </div>
      <div>
      <label> Password: </label>
      <input type="text">
      </div>
      <button> <router-link v-bind:to="'/profile'"> Log In </router-link> </button>      
      </div>
  </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>
.login-content {
    display: flex;
    justify-content: center;
}
</style>