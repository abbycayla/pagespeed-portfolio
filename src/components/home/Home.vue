<template>
  <div> 
      <h1> Projects </h1>
      <Projects/>
  </div>
</template>

<script>
import Projects from "./Projects"
export default {

    name: "Home",
    components:{
        Projects
    }
}
</script>

<style scoped>

h1 {
    text-align: center;
    font-weight: lighter;
}


</style>