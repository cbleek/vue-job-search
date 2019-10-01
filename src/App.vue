<template>
  <div id="app">
    <app-header/>
    <app-main url="Welcome to Your Vue.js App"
      remote="https://yawik.org/demo/de/jobboard"   />
    <app-footer/>
  </div>
</template>

<script>
import Main from './components/Main.vue'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'app',
  components: {
    'app-main': Main,
    'app-header': Header,
    'app-footer': Footer
  }
}
</script>

<style lang="scss">
@import 'layout.scss';

h3 {
    color: #123;    
}
</style>
