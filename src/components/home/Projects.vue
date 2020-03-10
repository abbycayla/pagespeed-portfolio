<template>
<div>
<div class="projects-list">
    <div v-for="project in projects" :key="project.id" class="project-item">
<img src="https://i.ibb.co/nwTs0LT/landing.png" alt="landing">  
<!-- <div class="project-details"> -->
<h2> {{project.title}}</h2>
        <p> {{project.details}} </p>
        <button> <router-link v-bind:to="'/details'"> View More </router-link> </button>
        <!-- </div> -->
    </div>
  </div>
  </div>
</template>

<script>

export default {
name: "Projects",
data: function(){
    return {
        projects: [
            {
                id: "1",
                title: "Project One",
                details: "This project ____ was apart of a Level 6 Web and UX formative at Yoobee Colleges in 2019. Click view more to see more about this site",
                image: ""
            },
            {
                id: "2",
                title: "Project Two",
                details: "This project ____ was apart of a Level 6 Web and UX formative at Yoobee Colleges in 2019. Click view more to see more about this site",
                image: ""
            },
            {
                id: "3",
                title: "Project Three",
                details: "This project ____ was apart of a Level 6 Web and UX formative at Yoobee Colleges in 2019. Click view more to see more about this site",
                image: ""
            },
            {
                id: "4",
                title: "Project Four",
                details: "This project ____ was apart of a Level 6 Web and UX formative at Yoobee Colleges in 2019. Click view more to see more about this site",
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
  width: 600px;    
  text-align: center;
}

 img {
  width: 100%;
  padding-bottom: 20px;
}

p {
    margin: 20px 0px;
} 


button {
  background-color: #FFADB9;
  border-radius: 20px;
  border: none; 
  padding: 5px 20px;
    }

button a {
  text-decoration: none;
  color: white;

}

</style>