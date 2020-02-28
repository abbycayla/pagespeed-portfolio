<template>
<div>
    <div v-for="project in projects" :key="project.id" class="projects-list">
        <h2> {{project.title}}</h2>
        <p> {{project.details}} </p>
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
                details: "sdhjgbdvj",
                image: ""
            },
            {
                id: "2",
                title: "Project Two",
                details: "wgwijgnwkjg",
                image: ""
            },
            {
                id: "3",
                title: "Project Three",
                details: "wrgihnwjrfbns",
                image: ""
            },
        ]
    }
}
}



</script>

<style scoped>

</style>