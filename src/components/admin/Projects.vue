<template>
  <div> 
      <h3> Projects  </h3>
              <div class="button">
        <button><router-link v-bind:to="'/EditProject'">  Edit  </router-link> </button>
         </div>
      <div class="projects-list">
    <div v-for="project in projects" :key="project.id" class="project-item">
    <div class="placeholder-img"></div>
        <h2> {{project.title}}</h2>
        <p> {{project.details}} </p>

        <button><router-link v-bind:to="'/EditProject'">  Edit  </router-link> </button>
       
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

<style scoped >

h3 {
  border-bottom: 1px solid #FFADB9;
  width: 100%;
  font-weight: lighter;
}

.projects-list{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.project-item {
    margin: 5% 5% 9% 5%;
    width: 450px;
    height: 400px;
    margin: 100px;
    text-align: center;
    
}

.project-item h2{
    padding: 30px 0px;
    font-weight: lighter;

}

.placeholder-img {
    width: 100%;
    height: 100%;
    background-color: lightgrey;
}

button {
    border: none;
    background-color: #FFADB9;
    outline: none;
    border-radius: 20px;
    padding: 10px 20px;
    }

    a {
    text-decoration: none;
    color: white;

    }
</style>