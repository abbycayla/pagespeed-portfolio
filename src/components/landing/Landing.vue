<template>
<div>
  <router-link v-bind:to="'/Home'"></router-link>
  <div class="users">
    <div class="users-1">

<div class="user-1-info">
  <div class="container">
<router-link class="visable" v-bind:to="'/Home'"><img id="abby-img" src="https://i.ibb.co/jLkrS0z/Abby.jpg" alt="Abby" border="0"></router-link>
<router-link class="hidden" v-bind:to="'/Home'"><img src="https://i.ibb.co/jyXfWyD/abby.png" alt="abby" border="0"></router-link>
  </div>
    
  <div class="user-1-text">
<h1>ABBY</h1>
<p>Web and graphic</p>
  </div>

</div>

    </div>
    <div class="users-2">
      
      <div class="user-2-info">
   <div class="container">
<router-link class="visable" v-bind:to="'/Home'"><img id="amber-img" src="https://i.ibb.co/jRS4NNC/Amber.jpg" alt="Amber" border="0"></router-link>
<router-link class="hidden" v-bind:to="'/Home'"><img src="https://i.ibb.co/v181fF5/amber.png" alt="amber" border="0"></router-link>
  </div>
        
      <div class="user-2-text">
<h1>AMBER</h1>
<p>Web and graphic</p>
      </div>

      </div>

    </div>
    <div class="users-3">


<div class="user-3-info">
    <div class="container">
<router-link class="visable" v-bind:to="'/Home'"><img id="liv-img" src="https://i.ibb.co/NyMFbhk/liv.png" alt="liv" border="0"></router-link>
<router-link class="hidden" v-bind:to="'/Home'"><img src="https://i.ibb.co/djr6B97/liv.png" alt="liv" border="0"></router-link>
  </div>


<div class="user-3-text">
<h1>LIV</h1>
<p>Web and graphic </p>
</div>

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
  margin: 0px;
}

.users img {
  width: 100%;
  
}

.hidden {
    display: none;
}

.visable:hover {
  display: none;
}

.container:hover .hidden {
    display: block;
}

.hidden img {
  width: 220px;
  
}



.user-1-info {
  text-align: center;
  font-family: 'Lato', sans-serif;

  background-image: url("https://i.ibb.co/nbhWGSH/abby-designs.jpg");
  background-size: 100%;
   padding: 270px 137px 225px 137px;
 
}
.user-2-info {
  text-align: center;
  font-family: 'Lato', sans-serif;
  background-image: url("https://i.ibb.co/rGFH6D8/amber-designs.jpg");
  background-size: 100%;
  padding: 270px 137px 225px 137px;
}
.user-3-info {
  text-align: center;
  font-family: 'Lato', sans-serif;

   background-image: url("https://i.ibb.co/K5mGS87/livs-designs.jpg" );
  background-size: 100%;
  padding: 270px 137px 225px 137px;
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

@media only screen and (max-width: 600px){

.users {
  display: flex;
  flex-direction: column;
  
 }


#abby-img {
  border-radius: 250px;
  width: 100px;
}



#amber-img {
  border-radius: 250px;
  width: 100px;
}

#liv-img {
 border-radius: 250px;
  width: 100px;
}

.user-1-info {
display: flex;
flex-direction: row-reverse;

background-color: rgba(255, 192, 124, 0.5);
padding: 59px 20px 59px 50px;
  background-image:none;
  font-size: 10px;
}
.user-2-info {
  display: flex;
  background-image:none;
    background-color: rgba(255, 215, 96, 0.5);
  padding: 59px 50px 59px 20px;
  font-size: 10px;
}
.user-3-info {
  display: flex;
  padding: 59px 20px 59px 50px;
  background-color: rgba(255, 173, 185, 0.5);
  background-image:none;
  flex-direction: row-reverse;
  font-size: 10px;
}

.user-1-text {
  padding: 0px 100px 0px 0px;
}
.user-2-text {
  padding: 0px 0px 0px 100px;
}
.user-3-text {
  padding: 0px 100px 0px 0px;
}


}


</style>