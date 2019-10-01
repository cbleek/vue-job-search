<template>
  <header>
    <h1>{{ msg }}</h1>
  </header>
</template>

<script>
export default {
    data() {
      return {
          msg: "Header Text"
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header {
  background: yellow;
}
</style>