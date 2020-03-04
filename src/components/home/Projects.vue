<template>
<div>
<div class="projects-list">
    <div v-for="project in projects" :key="project.id" class="project-item">
    <div class="placeholder-img"></div>
        <h2> {{project.title}}</h2>
        <p> {{project.details}} </p>
        <button><router-link v-bind:to="'/details'"> View More</router-link></button>

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
    margin: 5% 5%;
    width: 500px;
    text-align: center;
    
}

.project-item h2{
    padding: 30px 0px;

}

.placeholder-img {
    width: 100%;
    height: 400px;
    background-color: lightgrey;
}

button {
    border: none;
    background-color: white;
    outline: none;
    padding-top: 30px;
}

a {
    color: #FFADB9;
}

</style>