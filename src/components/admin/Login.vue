<template>
  <div class="login-content">
    <div class="login-info">
      <h1> Log In </h1>
 <label> Username </label>
      <input type="text"> 
      <label id="login_password"> Password</label>
      <input type="text">
      <div class="login-button">
<button class="login"> <router-link v-bind:to="'/profile'"> Log In </router-link> </button> 
      </div>
     
     </div>
  </div>
</template>

<script>
export default {
name: "Login"
}
</script>

<style scoped>
.login-info{
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    padding: 30px 50px 70px 50px;
    
}


.login-content{
  background-image: linear-gradient(to right, rgb(250, 184, 140) , rgb(250, 225, 114) , rgb(255, 173, 185));
  padding: 150px 440px 150px 440px;
  font-family: 'Lato', sans-serif;
 color: rgb(88, 88, 88);
 
  
}

.login-content input {
border: none;
background-color: rgb(197, 197, 197);
padding: 20px 50px 20px 15px;
 outline: none;
}

.login-content label {
padding-bottom: 15px;
padding-top: 40px;
}

.login-button a {
   color: rgb(255, 255, 255);
    text-align: center;
    text-decoration: none;
    }

    .login-button {
text-align: center;
padding-top: 40px;
    }

    .login {
     background-color: rgb(255, 172, 94);
    
     padding: 10px 30px 10px 30px;
     border-radius: 10px;
   border: none;
    }

    .login:hover{
      background-color: rgb(252, 137, 30); 
      cursor: pointer;
    }



</style>