<template>
  <div>

    <button :value="user.site" @click=" onInput "> Click </button>
    <button @click="isHidden = true"> hide </button>
    <p v-if="!isHidden"> hide me </p> 
  </div>
</template>
​
<script>
export default {
  name: 'PageSpeed',
  data(){
    return{
      user:{
        site:'https://blackestateforeductaionalpurposes.netlify.com/'
      },
    isHidden: false

    }
  },
  methods: {
    onInput(event) {
      this.$emit('webPageEntered', event.target.value);
    },
    // test(){
    //   console.log('ok')
    // }
  }
};
</script>
​
<style scoped>
  input {
    width: 100%;
    font-size: 1.6vw;
    font-weight: 500;
    outline: none;
  }
  div {
    margin: 2vh 0 0 0;
  }
</style>