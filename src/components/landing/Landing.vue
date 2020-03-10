<template>
<div>
  <router-link v-bind:to="'/Home'"></router-link>
  <div class="users">
    <div class="users-1">
<img src="https://i.ibb.co/nbhWGSH/abby-designs.jpg" alt="abby-designs" border="0">
<div class="user-1-info">
    <router-link v-bind:to="'/Home'"><img id="abby-img" src="https://i.ibb.co/jLkrS0z/Abby.jpg" alt="Abby" border="0"></router-link>
  
<h1>ABBY</h1>
<p>Web and graphic design</p>
</div>

    </div>
    <div class="users-2">
      <img src="https://i.ibb.co/rGFH6D8/amber-designs.jpg" alt="amber-designs" border="0">
      <div class="user-2-info">
          <router-link v-bind:to="'/Home'"> <img id="amber-img" src="https://i.ibb.co/jRS4NNC/Amber.jpg" alt="Amber" border="0"></router-link>
      
<h1>AMBER</h1>
<p>Web and graphic design</p>
      </div>

    </div>
    <div class="users-3">

<img src="https://i.ibb.co/K5mGS87/livs-designs.jpg" alt="livs-designs" border="0">
<div class="user-3-info">
    <router-link v-bind:to="'/Home'"> <img id="liv-img" src="https://i.ibb.co/NyMFbhk/liv.png" alt="liv" border="0"></router-link>


<h1>LIV</h1>
<p>Web and graphic design</p>
</div>

    </div>
  </div>
   
</div>

</template>

<script>


</script>

<style scoped>
.users {
  display: flex;
  justify-content: space-around;
  margin: 0px;
}

.users img {
  width: 100%;
}

.user-1-info {
  text-align: center;
  font-family: 'Lato', sans-serif;
  position: absolute;
  top: 370px;
  left: 150px;
}
.user-2-info {
  text-align: center;
  font-family: 'Lato', sans-serif;
   position: absolute;
  top: 370px;
}
.user-3-info {
  text-align: center;
  font-family: 'Lato', sans-serif;
  position: absolute;
  top: 370px;
}

#abby-img {
  border-radius: 250px;
  width: 200px;
}



#amber-img {
  border-radius: 250px;
  width: 200px;
}

#liv-img {
 border-radius: 250px;
  width: 200px;
}


</style>