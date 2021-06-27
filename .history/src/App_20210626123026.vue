<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <div class="nav-btn">
    <router-link to='/'> Home</router-link>
    <router-link to='/contact'>Contact </router-link>
    <router-link to='/login'>Login</router-link>
  </div> -->
  <router-view></router-view>
</template>

<script>
export default {
  computed:{
    themeColor(){
      return this.$store.state.themeColor
    }
  },
  watch:{
    themeColor(val){
      document.getElementById("app").style.setProperty('--')
    }
  }


}
// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  --themeColor:#1eff00;
}

</style>