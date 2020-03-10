<template>
  <div>
      <div v-for="details in details" :key="details.id" class= "details-item">
          <div class ="profile-image">
              <div>
          <img src="https://i.ibb.co/dLSxVpk/Abby.jpg" alt="Abby">
          </div>
          </div>
      <h1>{{details.name}}</h1>
      <p>{{details.info}}</p>
      <div class="icons">
        <div>
      <img src="https://i.ibb.co/J2GKfkm/instagram-1.png" alt="instagram-1">
      </div>
      <div>
      <img src="https://i.ibb.co/7p7Vp89/email-icon.png" alt="email-icon">
      </div>
      <div>
      <img src="https://i.ibb.co/HxB602L/CV-icon.png" alt="CV-icon">
      </div>
      </div>
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
                info: "Hey my name is Olivia Lonsdale, I am currently studying web and Ux design. I have don't 3 years of studying ranging from Phycology and media studies to Web and graphic design. I have found i really enjoy the Ux process and researching and have decided to pressure a career in Ux design. I never thought i would be involved in the web design world, i was always interested in graphic design but once i had a go at it i realized i really enjoyed web design and wanted to continue with it.  ",
                icons:""
            },
            ]
        }
    }
}
</script>

<style scoped>

.details-item{
    margin: 0px 100px
}

.profile-image {
    display: flex;
    justify-content: center;
}

.profile-image img {
    width: 350px;
    border-radius: 200px;
}

h1 {
    display: flex;
    justify-content: center;
    font-size: 2.5em;
   padding-top: 50px;
}


p{
    padding-top: 50px;
    padding-bottom: 40px;
    font-size: 1em;
}

.icons {
    display: flex;
    justify-content: space-around;
}



.icons img {
    padding-top: 40px;
    padding-bottom: 40px;
    width: 80px;
}

</style>