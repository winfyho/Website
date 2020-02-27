<template>
  <div id="app">
    <head-nav></head-nav>
    <router-view></router-view>
  </div>
</template>
<script>
  import HeadNav from "components/common/head/HeadNav.vue"

    export default {
    name: 'app',
    components: {
      HeadNav,
    }
    
  }
</script>
<style>
  @import "./assets/css/base.css";

  #app{
    width: 100%;
    height: 100%;
  }
</style>