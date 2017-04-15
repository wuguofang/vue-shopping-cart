<template>
  <div id="app">
    <nav-bar msg='111'></nav-bar>
    <transition name="slide-fade" mode="out-in">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import NavBar from './components/Nav.vue'
import store from './store/store'

export default {
  name: 'app',
  store,
  components: {
    NavBar
  }
}
</script>

<style>

</style>
