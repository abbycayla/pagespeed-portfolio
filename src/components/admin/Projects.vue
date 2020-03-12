<template>
   <div class="profile-link"> 
     
      <button id="profile-select"> <router-link v-bind:to="'/profile'">  Profile </router-link>  </button>
      <button id="profile-selected">
 Projects
      </button>
   
</div>
</template>

<script>
export default {
name: "EditProject"
}
</script>

<style scoped>
.profile-link {
  display: flex;
  justify-content: space-around;
}

#profile-selected {
  background-color: #FFADB9;
}

#profile-select:hover {
 cursor: pointer;
  background-color: rgb(209, 111, 126);
  color: white;
  border-color: rgb(209, 111, 126);
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

</style>