<template>
  <div class="whole-template"> 
    <div class= "title-name">
      <h1> Name </h1>
      </div>
  <div class= "page-title">
    <h1>Edit Projects</h1>
</div>
<div v-if="errors.length">
      Please correct the following error(s):
      <ul>
        <li v-for="error in errors" :key="error">{{ error }}</li>
      </ul>
    </div>
<div>
  <form class="project-form">
    <div>
          <label for="title">Title</label>
          <br>
          <input v-model="admin.title" type="text" /> 
          </div>
          <br>
          <div>
          <label for="bio">Bio</label>
          <br>
          <input v-model="admin.bio" type="text" /> 
          </div>
          <br>
          <div>
          <label for="score">Score</label>
          <br>
          <input v-model="admin.score" type="text" /> 
          </div>
          <br>
          <div>
          <label for="websiteLink">Website Link</label>
          <br>
          <input v-model="admin.websiteLink" type="text" /> 
          </div>
          <br>
          <div>
          <label for="contact">Contact</label>
          <br>
          <input v-model="admin.contact" type="text" /> 
          </div>
          <br>
          <div>
          <label for="instagram">Instagram</label>
          <br>
          <input v-model="admin.instagram" type="text" /> 
          </div>
          <br>
          <div>
          <label for="cv">Cv</label>
          <br>
          <input v-model="admin.cv" type="text" /> 
          </div>
          <br>
          <div class="done-button-outside">
          <button class="done-button-inside" type="done" value="Done"> done  </button>
          </div>
  </form>
  </div>
  </div>
  
</template>

<script>
export default {
  name: "EditProject",
  data: function() {
    return {
      admin: {
        title: '',
        bio: '',
        score:'',
        websiteLink: '',
        contact: '',
        instagram:'',
        },
      errors: []
    };
  },
methods: {
    checkForm: function(evt) {
      evt.preventDefault();

      this.errors = [];

      if (!this.admin.title) {
        this.errors.push("Title required");
      }
      if (!this.admin.bio) {
        this.errors.push("Bio required");
      }
      if (!this.admin.score) {
        this.errors.push("Score required");  
      }
      if (!this.admin.contact) {
        this.errors.push("Contact required");
      }
      if (!this.admin.uploadImages) {
        this.errors.push("Image required");
      }
      if (!this.error.length) {
          this.registerUser();
      }
    },
    
    }

}


</script>

<style scoped>

.upload-images {
  height: 200px;
  border-color: #908787;
}

.title-name {
   font-size: 1.2em;
  text-align: center;
  color: #908787;
  padding-bottom: 130px;
}

.page-title {
color: #908787;
font-size: 0.8em;  
padding-left: 10%;
padding-bottom: 10px;
border-bottom: 2px solid #ffadb9;
}

.project-form div {
  padding-top: 50px;
}
label {
  font-size: 1.3em;
  color: #908787;
  margin-bottom: 50px;
}

.project-form input {
  margin-top: 20px;
  border-color: #ffadb9;
  border-width: 1px;
  border-style: solid;
  border-radius: 5px;
  padding: 10px 400px 25px 10px;
  outline: none;
}

.whole-template{
  margin: 0px 15%;
}

.upload-images {
  padding: 40px 700px 80px 10px;
}

.done-button-inside {
  padding: 10px 50px 10px 50px;
  margin-bottom: 40px;
  border: none;
  background-color: #ffadb9;
  border-radius: 15px;
  font-size: 1.3em;
  color: #908787;
}

.done-button-outside {
  display: flex;
  justify-content: center;
}

 @media only screen and (max-width: 600px) {
.page-title {
font-size: 0.8em;  
border-bottom: 2px solid #ffadb9;
}
 }
</style>