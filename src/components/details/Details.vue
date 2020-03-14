<template>
  <div>
    <h1> Project Name </h1>
  <div class="details-content"> 
      <div>
          <img src="https://i.ibb.co/nwTs0LT/landing.png" alt="landing">  

          <button> <a href="https://www.netlify.com/" target="_blank"> View Site Live </a> </button>
      </div>
      <div class="details-con">
          <div>
          <h2> Score </h2>
          </div>
          <div>
          <p class="details"> This project ____ was apart of a Level 6 Web and UX formative at Yoobee Colleges in 2019.</p>
          </div>
          <div class="contact">
          <hr />
          <div class="contact-links">
              <div>
                <p> CV </p>
              </div>
              <div>
                <p> EMAIL </p>
              </div>
              <div>
                <p> INSTAGRAM </p>
              </div>
          </div>
          <hr />
          </div>
      </div>
  </div>

  </div>
</template>

<script>
export default {
name: "Details"
}
</script>

<style scoped>

h1 {
    text-align: center;

}

.details-content {
    display: flex;
    justify-content: center;
}

.details-content div {
    margin: 5% 5%;
    /* width: 500px; */
    text-align: center;
}

button {
  background-color: #FFADB9;
  border-radius: 20px;
  border: none; 
  padding: 10px 20px;
  margin-top: 30px;
    }

    button a {
  text-decoration: none;
  color: white;

}

.contact {
    padding-bottom: 40px;
}

.contact-links {
    display: flex;
    justify-content: space-between;
}

p {
    width: 100%;
}

img {
  width: 90%;
  /* padding-bottom: 50px; */
}

.details-con {
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

@media screen and (max-width: 600px) {
 .details-content {
   flex-direction: column;
 }
 
}
</style>