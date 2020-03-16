<template>
  <div class="pagespeed">
    <div class="pagespeed__header">
      <div>
        <h1 class="pagespeed__heading">Loom</h1>
        <span class="pagespeed__subheading">Page Speed Insights Results</span>
        <SearchBar @webPageEntered="findPagespeed"></SearchBar>
      </div>
      <div class="pagespeed__buttons">
        <Btn
          class="pagespeed__viewdetails"
          text="view details"
          v-on:keyup.13="findPagespeed"
          modifier="inverse"
          href
        />
        <Btn class="pagespeed__visitwebsite" text="visit website" href />
      </div>
    </div>
​
    <div class="pagespeed__metrics">
      <div class="pagespeed__content">
        <div class="pagespeed__maindata">{{ pageStats.score }}</div>
        <div class="pagespeed__mainscore">score</div>
        <div class="pagespeed__maindescription">
          Derived from the
          <strong>Chrome User Experience Report</strong> (CrUX).
          <br />
          <br />The CrUX is
          <strong>powered by real user measurement</strong> of key user experience metrics across the public web, aggregated from users who have opted-in to syncing their browsing history, and have usage statistic reporting enabled.
        </div>
      </div>
      <div class="pagespeed__content">
        <div class="pagespeed__fielddata">{{ pageStats.contentful }}</div>
        <div class="pagespeed__metricsdescription">First Contentful Paint</div>
        <div class="pagespeed__fielddata">{{ pageStats.index }}</div>
        <div class="pagespeed__metricsdescription">Speed Index</div>
        <div class="pagespeed__fielddata">{{ pageStats.interactive }}</div>
        <div class="pagespeed__metricsdescription">Time To Interactive</div>
      </div>
      <div class="pagespeed__content">
        <div class="pagespeed__fielddata">{{ pageStats.meaningful }}</div>
        <div class="pagespeed__metricsdescription">First Meaningful Paint</div>
        <div class="pagespeed__fielddata">{{ pageStats.cpuidle }}</div>
        <div class="pagespeed__metricsdescription">First CPU Idle</div>
        <div class="pagespeed__fielddata">{{ pageStats.latency }}</div>
        <div class="pagespeed__metricsdescription">Estimated Input Latency</div>
      </div>
    </div>
  </div>
</template>
​
<script>
import SearchBar from "./SearchBar";
​
export default {
  name: "Pagespeed",
  components: {
    SearchBar
  },
  data() {
    return {
      pageStats: [
        {
          score: 98,
          contentful: "0.4s",
          index: "0.4s",
          interactive: "1.0s",
          meaningful: "0.4s",
          cpuidle: "0.8s",
          latency: "10ms"
        }
      ]
    };
  },
  // beforeCreate() {
  //   this.findPagespeed("https://www.google.com/");
  // },
  methods: {
    findPagespeed(searchTerm) {
      let query = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${searchTerm}`;
​
      fetch(query)
        .then(response => response.json())
        .then(json => {
          let rawScore = json.lighthouseResult.categories["performance"].score;
          let mainScore = (rawScore * 100).toFixed(0);
          this.pageStats = {
            score: mainScore,
            contentful:
              json.lighthouseResult.audits["first-contentful-paint"]
                .displayValue,
            index: json.lighthouseResult.audits["speed-index"].displayValue,
            interactive:
              json.lighthouseResult.audits["interactive"].displayValue,
            meaningful:
              json.lighthouseResult.audits["first-meaningful-paint"]
                .displayValue,
            cpuidle:
              json.lighthouseResult.audits["first-cpu-idle"].displayValue,
            latency:
              json.lighthouseResult.audits["estimated-input-latency"]
                .displayValue
          };
        });
    }
  }
};
</script>
​
<style>

</style>