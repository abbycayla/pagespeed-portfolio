<template>
<div>
<div class="projects-list">
    <div v-for="project in projects" :key="project.id" class="project-item">
    <div class="placeholder-img"></div>
        <h2> {{project.title}}</h2>
        <p> {{project.details}} </p>
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
                details: "sdhjgbdvjdrt h rthtrhrthdhethd",
                image: ""
            },
            {
                id: "2",
                title: "Project Two",
                details: "wgwijgnwkjgdhehn erb tehrhsh",
                image: ""
            },
            {
                id: "3",
                title: "Project Three",
                details: "wrgihnwjrfbnsdtrhrb tebe erb fgdbrgwrhwr",
                image: ""
            },
            {
                id: "4",
                title: "Project Four",
                details: "weqegiqgwrhwbwhgbwthwrhbw",
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

}

.placeholder-img {
    width: 100%;
    height: 400px;
    background-color: lightgrey;
}


</style>