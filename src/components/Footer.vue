<template>
  <footer>
    <h1>{{ msg }}</h1>
  </footer>
</template>

<script>
export default {
  data() {
      return {
          msg: "Footer Text"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background: #222;
}
p {
  color: yellow;
}
</style>