<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <common-footer></common-footer>
  </div>
</template>

<script>

import commonFooter from '@/components/commonFooter'

export default {
  name: 'App',
  components: {
    'common-footer': commonFooter
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
