<template>
  <div>
    <h1> Project Name </h1>
  <div class="details-content"> 
      <div>
          <img src="https://i.ibb.co/nwTs0LT/landing.png" alt="landing">  

          <button> <a href="https://blackestateforeductaionalpurposes.netlify.com/" target="_blank"> View Site Live </a> </button>
      </div>
      <div class="details-body">
          <div class="pagespeed-content">
            <div class="pagespeed-maindata">{{ pageStats.score }}</div>
          <h2> Page Speed </h2>
          <div id="app">
          </div>
          <div class="pagespeed">
          <div>
            <PageSpeed @webPageEntered="findPagespeed"></PageSpeed>
          </div>
      </div>

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
import PageSpeed from "./PageSpeed"

export default {
name: "Details",
components: {
    PageSpeed
  },
  data() {
    return {
      pageStats: [
        {
          score: 98,
        }
      ],
    };
  },
  methods: {
    findPagespeed(searchTerm) {
      let query = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${searchTerm}`;

      fetch(query)
        .then(response => response.json())
        .then(json => {
          let rawScore = json.lighthouseResult.categories["performance"].score;
          let mainScore = (rawScore * 100).toFixed(0);
          this.pageStats = {
            score: mainScore,
          }; 
          console.log(json)
        });
    }
  }
  
};




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

.details-body {
    display: flex;
    flex-direction: column;
    justify-content: space-between
}

 input {
    width: 100%;
    font-size: 1.6vw;
    font-weight: 500;
 }


/* Absolute Center Spinner */
.loading {
  /* display: none; */
  /* position: fixed; */
  z-index: 999;
  height: 2em;
  width: 2em;
  overflow: visible;
  margin: auto;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}

/* Transparent Overlay */
/* .loading:before {
  content: '';
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.3);
} */

/* :not(:required) hides these rules from IE9 and below */
.loading:not(:required) {
  /* hide "loading..." text */
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.loading:not(:required):after {
  content: '';
  display: block;
  font-size: 10px;
  width: 1em;
  height: 1em;
  /* margin-top: -0.5em; */
  -webkit-animation: spinner 1500ms infinite linear;
  -moz-animation: spinner 1500ms infinite linear;
  -ms-animation: spinner 1500ms infinite linear;
  -o-animation: spinner 1500ms infinite linear;
  animation: spinner 1500ms infinite linear;
  border-radius: 0.5em;
  -webkit-box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.5) -1.5em 0 0 0, rgba(0, 0, 0, 0.5) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
  box-shadow: rgba(0, 0, 0, 0.75) 1.5em 0 0 0, rgba(0, 0, 0, 0.75) 1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) 0 1.5em 0 0, rgba(0, 0, 0, 0.75) -1.1em 1.1em 0 0, rgba(0, 0, 0, 0.75) -1.5em 0 0 0, rgba(0, 0, 0, 0.75) -1.1em -1.1em 0 0, rgba(0, 0, 0, 0.75) 0 -1.5em 0 0, rgba(0, 0, 0, 0.75) 1.1em -1.1em 0 0;
}

/* Animation */

@-webkit-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-moz-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@-o-keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
@keyframes spinner {
  0% {
    -webkit-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

.pagespeed-maindata {
     font-size: 2em;
    padding: 20px;
    border:pink 1px solid;
  }
</style>