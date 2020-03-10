<template>
  <div>
      <div v-for="details in details" :key="details.id" class= "details-item">
      
      <div class="placeholder-img"></div>
      <h1>{{details.name}}</h1>
      <p>{{details.info}}</p>
      <img>
  </div>
  </div>
</template>

<script>
export default {
    name: "Details",
    data: function() {
        return {
            details: [{
                id: "1",
                photo: "",
                name: "liv", 
                info: "theujwikahdfuewhfefbdsiufkhgbesudjkfgbcvewiuksdgjfbiuewjkgsdfuisejkgfuuug",
                icons:""
            },
            ]
        }
    }
}
</script>

<style>
.placeholder-img{
    width: 50px;
    height: 50px;
    background-color:blue;
}
</style>