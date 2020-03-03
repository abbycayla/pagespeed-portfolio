<template>
  <nav>
    <ul>
        <li> Back </li>
        <li> Admin Log in </li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
  nav {
      width: 100%;
      background-color: lightgrey;
      height: 70px;
      margin-bottom: 70px;
  }

  ul {
      display: flex;
      justify-content: space-between;
      padding: 0px 20px;
  }

  li {
      padding: 22px 0px;
      list-style-type: none;
      font-size: 1.2em;
  }
</style>