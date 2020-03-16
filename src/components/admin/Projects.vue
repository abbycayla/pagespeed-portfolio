<template>
  <div> 
      <h1> Projects  </h1>
      <div class="align-project">
      <button class="add-project"><router-link v-bind:to="'/add-project'">  Add Project </router-link> </button>
      </div>


 <div class="projects-list">
  <div v-for="project in projects" :key="project.id" class="project-item">
<img src="https://i.ibb.co/nwTs0LT/landing.png" alt="landing" border="0">  
       <h2> {{project.title}}</h2>
        <p> {{project.details}} </p>
        <button class="edit-project"><router-link v-bind:to="'/edit-project'">  edit </router-link> </button>
    </div>
  </div>
  </div>
</template>

<script>
export default {
name: "EditProject",
data: function(){
    return {
        projects: [
            {
                id: "1",
                title: "Project One",
                image: ""
            },
            {
                id: "2",
                title: "Project Two",
                image: ""
            },
            {
                id: "3",
                title: "Project Three",
                image: ""
            },
            {
                id: "4",
                title: "Project Four",
                image: ""
            }
        ]
    }
}
}
</script>

<style scoped>
.projects-list{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.project-item {
 padding: 60px 50px;
  width: 700px;    
  text-align: center;
}

 img {
  width: 100%;
  padding-bottom: 20px;
}

h2 {
  margin: 20px 0px;
}

.edit-project {
  border: none; 
    }

    .edit-project a {
  text-decoration: underline;
  color: #FFADB9;

}


.add-project {
  background-color: #FFADB9;
  border-radius: 20px;
  border: none; 
  padding: 10px 20px;

}

.add-project a {
  text-decoration: none;
  color: white;

}

.align-project {
  text-align: right;
}

h1 {
  border-bottom: 1px solid #FFADB9;
  margin-bottom: 30px;
} 

</style>