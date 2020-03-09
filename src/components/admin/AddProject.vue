<template>
  <div> 
      <h1> Profile </h1>
      <button><router-link v-bind:to="'/add-project'">  Add Project </router-link> </button>
  </div>
</template>

<script>
export default {
name: "AddProject"
}
</script>

<style scoped>
h1 {
    text-align: center;
}
</style>