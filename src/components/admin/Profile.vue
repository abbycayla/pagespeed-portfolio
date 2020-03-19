<template>
<div>
  <div class="profile-link"> 
      <button id="profile-selected"> Profile </button>
      <button id="profile-select">
 <router-link v-bind:to="'/projects'">  Projects </router-link> 
      </button>
   
</div>

  <div class="profile-title">
    <p>Profile</p>

  </div>

  <div class="profile-img">
    <div>
 <p>Avatar</p>
    </div>
   <div>
   <img id="liv-img" src="https://i.ibb.co/NyMFbhk/liv.png" alt="liv" border="0">
   </div>
 <div class="profile-change">
 <button>Change avatar</button>
 </div>
   
  </div>
  <div class="profile-form">
     <form action="">
<p>Title</p>
<input type="text">
<p>Bio</p>
<input id="profile-bio" type="text">
<p>Contact</p>
<input type="text">
<p>Instagram</p>
<input type="text">
<p>CV</p>
<input type="text">
<div class="profile-CV">
<button >Add link here +</button>
</div>

  </form>
  </div>
 <div class="profile-done">
<button>Done</button>
 </div>
  
</div>




</template>

<script>
export default {
name: "Profile"
}





</script>

<style scoped>
.profile-change button {
    font-family: 'Lato', sans-serif;
  font-size: 15px;
border: none;
background-color:rgba(255, 173, 185, 0.719) ;
border-radius: 15px;
padding: 5px 10px 5px 10px;
}

.profile-change button:hover {
  cursor: pointer;
  background-color:rgb(209, 111, 126) ;
  color: white;
}

.profile-change {
  padding: 20px 0px 0px 0px;
}



.profile-form p {
  font-family: 'Lato', sans-serif;
  font-size: 20px;
  color: rgb(95, 95, 95);
  padding: 25px 0px 0px 0px;
  margin-bottom: 10px;
}

.profile-form {
padding: 100px 0px 100px 80px;
}

.profile-form input {
  border-color: #FFADB9;
 border-width: 1px;
 border-style: solid;
 border-radius: 5px;
 padding:10px 400px 25px 10px;
 outline: none;
}

#profile-bio {
  padding:10px 400px 150px 10px;
}

#liv-img{
  width: 250px;
  border-radius: 250px;
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.profile-img {
display: flex;
align-items: center;
flex-direction: column;

}

.profile-img p {
  font-family: 'Lato', sans-serif;
  color: rgb(95, 95, 95);
  font-size: 20px;
}

.profile-link {
  display: flex;
  justify-content: space-around;
}

#profile-selected {
  background-color: #FFADB9;
}

#profile-select {
  background-color: white;
}

#profile-select:hover {
 cursor: pointer;
  background-color: rgb(209, 111, 126);
  border-color: rgb(209, 111, 126);
}

.profile-link a:hover {
color: white;
}

.profile-link button {
  margin: 0%;
  font-family: 'Lato', sans-serif;
  font-size: 30px;
  border-color: #FFADB9;
 border-width: 1px;
 border-style: solid;
 border-radius: 20px;
 padding: 10px 20px 10px 20px;
 

}

.profile-link a {
  text-decoration: none;
  font-family: 'Lato', sans-serif;
  color: black;
  font-size: 30px;
}

.profile-title p {
  font-family: 'Lato', sans-serif;
  color: rgb(95, 95, 95);
  font-size: 25px;
  margin: 0%;
}

.profile-title {
border-bottom:1px solid #FFADB9; 
width:1220px; 
padding-bottom:5px;
margin-left: 100px;
padding-top: 100px;
margin-bottom: 50px;
  
 

}


.profile-CV button {
 background-color: rgba(255, 173, 185, 0.719);
 border: none;
 border-radius: 10px;
 padding:12.5px 25px 12.5px 25px;
 outline: none;
}

.profile-CV button:hover {
  cursor: pointer;
  background-color: rgb(209, 111, 126);
  color: white;
}

.profile-CV {
  padding: 10px 0px 0px 0px;
}


.profile-done {
  text-align: center;
  padding: 80px 0px 50px 0px;
}


.profile-done button {
  background-color: #FFADB9;
 border: none;
 border-radius: 15px;
 padding:10px 60px 10px 60px;
 outline: none;
 font-size: 30px;
  color: white;
}

.profile-done button:hover {
 cursor: pointer;
  background-color: rgb(209, 111, 126);
  
}

@media only screen and (max-width: 600px){

.profile-title {
border-bottom:1px solid #FFADB9; 
width:315px; 
padding-bottom:5px;
margin-left: 20px;
padding-top: 100px;
margin-bottom: 50px;
  }

  .profile-form {
padding: 100px 20px 20px 20px;
}

.profile-form input {
 padding:10px 180px 25px 10px;

}

#profile-bio {
  padding:10px 180px 150px 10px;
}

}


</style>