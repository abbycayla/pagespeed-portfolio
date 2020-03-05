<template>
  <div> 
      <h1> Profile </h1>
      <button><router-link v-bind:to="'/projects'">  Projects </router-link> </button>
  </div>
</template>

<script>
export default {
name: "Profile"
}
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>