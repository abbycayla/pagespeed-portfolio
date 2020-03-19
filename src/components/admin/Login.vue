<template>
<div class="login-content">
<div class="login-info">
<h1> Log In </h1>
<form @submit="checkForm">
  <div>
    <div>
 <label  for="firstName">Email</label>
    </div>
   <div>
 <input v-model="user.email" type="text" placeholder="Email" />
   </div>
       
  </div>
  <div>
     <label class="ohnohoney" for="name"> Name</label>
        <input class="ohnohoney" v-model="ohNoHoneyName" id="name" name="name" type="text" />
  </div>
   <div class="login-button">
  <input  class="login" type="submit" value="Done" />
  </div>
</form>
<div v-if="errors.length">
<p>Please correct the errors</p>
<ul>
  <li v-for="error in errors" :key="error">{{ error }}</li>
</ul>
</div>
</div>
</div>

  
</template>

<script>
import axios from "axios";
import * as config from "../../../config";
export default {
name: "Login",
 data: function() {
    return {
      user: {
        email: ''
        },
      ohNoHoneyName: '',
      errors: []
    };
  },
 methods: {
  checkForm: function(evt) {
      evt.preventDefault();

      this.errors = [];

      if (this.user.ohNoHoneyName) {
        this.errors.push("Ha ha got you");
      }
      if (!this.user.email) {
        this.errors.push("Email required");
      }
    
      if (!this.errors.length) {
        this.loginUser();
      }
    },
    loginUser: function() {
        console.log('Ok!')
   
      return axios
        .post(`${config.apiUrl}/users/login`, this.user)
        .then((response) => {
            let user = response.data.user
            if (user){
            localStorage.userEmail = user.email
            } else {
                //show message?
            }

            // console.log('user', response.data.user)
          this.$router.push({ path: "/profile" });
        })
        .catch(function(error) {
          // handle error
          console.log(error);
        });
    },
    }
 }
</script>

<style scoped>

.ohnohoney{
  opacity: 0;
  position: absolute;
  top: 0;
  left: 0;
  height: 0;
  width: 0;
  z-index: 1;
} 


.login-info {
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: rgb(255, 255, 255);
    padding: 30px 50px 70px 50px;
    
}
.login-content {
   background-image: linear-gradient(to right, rgba(255, 192, 124, 0.5) , rgba(255, 215, 96, 0.5) , rgba(255, 173, 185, 0.5));
   padding: 150px 440px 150px 440px;
}

.login-content h1{
  font-family: 'Lato', sans-serif;
  margin-bottom: 50px;
 }



input[type=text] {
 border: none;
background-color: rgb(197, 197, 197);
padding: 20px 305px 20px 15px;
 outline: none;
 border-radius: 5px;
}

.login-content label {
padding-bottom: 15px;
padding-top: 40px;
font-family: 'Lato', sans-serif;
}




input[type=submit] {
   padding: 10px 30px 10px 30px;
     border-radius: 10px;
   border: none;
  background-color: rgb(255, 172, 94);
  font-family: 'Lato', sans-serif;
 
}

 input[type=submit]:hover {
  background-color: rgb(252, 137, 30); 
      cursor: pointer;
}


.login-button  {
   color: rgb(255, 255, 255);
    text-align: center;
    text-decoration: none;
    margin-top: 60px;
    }

  


    @media only screen and (max-width: 600px){

.login-content{
  padding: 110px 50px 115px 50px;
 }

 .login-info{
    padding: 10px 20px 30px 20px;
    
    
}




}



</style>