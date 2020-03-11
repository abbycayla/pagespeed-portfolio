<template>
  <div>
      <div v-for="details in details" :key="details.id" class= "details-item">
          <div class= "bg-color"></div>
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
                name: "Hi im liv", 
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
    margin: 0px 20%;
    padding-bottom: 40px;
    /* width: 70%; */
    justify-content: center;
}

.profile-image {
    display: flex;
    width: 35%;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.profile-image img {
    width: 100%;
    border-radius: 200px;
}

h1 {
    display: flex;
    justify-content: center;
    font-size: 2.5em;
    padding-top: 70px;
}


p{
    padding-top: 70px;
    padding-bottom: 80px;
    font-size: 1em;
    text-align: center;
}

.icons {
    display: flex;
    justify-content: space-around;
    border-top: 1px solid #ffadb9;
    border-bottom: 1px solid #ffadb9;
}

.icons img {
    padding-top: 40px;
    padding-bottom: 40px;
    width: 50%;
    
}
 .bg-color {
     background-color: #ffadb9;
     opacity: 40%;
     width: 60%;
     height: 200px;
     position: absolute;
     z-index: -1;
     right: 400px;
     top: 200px;
     border-radius: 30px;
 }

 @media only screen and (max-width: 600px) {
  h1 {
      font-size: 1.3em;
  }
   
    .profile-image {
    width: 100%;
}

h1{
    padding-top: 40px;
}

p{
    padding-top: 40px;
    padding-bottom: 40px;
}

.icons img{
    padding-top: 30px;
    padding-bottom: 30px;
    width: 40px;
}

}
</style>