<template>
  <div>
    <input  type="text" name="username" :value="user.site" @click="onInput">
  </div>
</template>
​
<script>
export default {
  name: 'SearchBar',
  data(){
    return{
      user:{
        site:'https://blackestateforeductaionalpurposes.netlify.com/'
      }
    }
  },
  methods: {
    onInput(event) {
      this.$emit('webPageEntered', event.target.value);
    }
  }
};
</script>
​
<style scoped>
  input {
    width: 100%;
    font-size: 1.6vw;
    font-weight: 500;
    font-family: "Raleway", sans-serif;
    outline: none;
  }
  div {
    margin: 2vh 0 0 0;
  }
</style>