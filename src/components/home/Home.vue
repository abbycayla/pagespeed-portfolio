<template>
  <div> 
      <Details/>
      <h1> Projects </h1>
      <Projects/>
  </div>
</template>

<script>
import Projects from "./Projects"
import Details from "./Details"

export default {

    name: "Home",
    components:{
        Projects,
        Details
    }
}
</script>

<style scoped>

h1 {
    text-align: center;
    font-weight: lighter;
}


</style>