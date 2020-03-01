<template>
  <div id="app">
    <head-nav></head-nav>
    
    <router-view></router-view>

    

  </div>
</template>
<script>
  import HeadNav from "components/common/head/HeadNav.vue"
  import axios from "axios"
  import {getStudyPager} from "network/study.js"

  export default {
    name: 'app',
    components: {
      HeadNav,
    },
    data() {
      return {
        mark: ``,
        toolbarsFlag:false

      }
    },
    
    created() {
      // getStudyPager()
      
    }
  }
</script>
<style>
  @import "./assets/css/base.css";

  #app {
    width: 100%;
    height: 100%;
  }
</style>