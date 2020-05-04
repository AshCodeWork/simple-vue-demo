<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <FormDemo></FormDemo>
    <button @click="alertNotice">弹出提示</button>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import FormDemo from './components/form/FormDemo.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld, 
    FormDemo
  },
  methods: {
    alertNotice () {
      this.$notice({
        msg: '来呀，造作啊。'
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
