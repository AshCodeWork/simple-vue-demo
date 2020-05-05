<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/child">进入子路游</router-link>
    <p @click="$store.commit('add')">counter: {{$store.state.counter}}</p>
    <p @click="$store.dispatch('add')">async counter: {{$store.state.counter}}</p>
    <p>getters doubleCount:{{ $store.getters.doubleCount }}</p>
  </div>
</template>
