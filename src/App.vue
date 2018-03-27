<template>
  <div id="app">
    outer template
    <router-view/>
  </div>
</template>

<script>
import QAList from './components/QAList'

export default {
  name: 'App',
  components: {
    QAList
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background-color: whitesmoke;
}
</style>
