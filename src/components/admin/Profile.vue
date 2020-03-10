<template>
<div>
  <div> 
      <h1> Profile </h1>
    <router-link v-bind:to="'/projects'">  Projects </router-link> 



  </div>

  <div>
    <p>Projects</p>

  </div>

  <div>
    <p>Avatar</p>
    <img id="liv-img" src="https://i.ibb.co/NyMFbhk/liv.png" alt="liv" border="0">
    <button>Change</button>
  </div>
  <form action="">
<p>Title</p>
<input type="text">
<p>Bio</p>
<input type="text">
<p>Contact</p>
<input type="link">
  </form>
  <button>Done</button>
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