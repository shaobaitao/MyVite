<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div class="nav-btn">
    <router-link to='/'> Home</router-link>
    <router-link to='/contact'>Contact </router-link>
  </div>
  <router-view></router-view>
</template>

<script>
export default {

}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
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