<template>
  <div>
    <h1> Project Name </h1>
  <div class="details-content"> 
      <div>
          <div class="placeholder-img"></div>
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

.placeholder-img {
    width: 400px;
    height: 400px;
    background-color: lightgrey;
}

.details-content {
    display: flex;
    justify-content: center;
}

.details-content div {
    margin: 5% 5%;
    width: 500px;
    text-align: center;
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

.contact {
    padding-bottom: 40px
}

.contact-links {
    display: flex;
}

p {
    width: 100%;
}

.details-con {
    display: flex;
    flex-direction: column;
    justify-content: space-between
}
</style>