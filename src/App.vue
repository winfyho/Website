<template>
  <div id="app">
    <head-nav @updata-search="updateSearch"></head-nav>
    <!-- <Search :results="results" /> -->
    <keep-alive exclude="Study">

      <router-view :results="results"></router-view>

    </keep-alive>



  </div>
</template>
<script>
  import HeadNav from "components/common/head/HeadNav.vue"
  import Search from "views/search/Search.vue"
  import axios from "axios"
  import { getStudyPager } from "network/study.js"

  export default {
    name: 'app',
    components: {
      HeadNav,
      Search
    },
    data() {
      return {
        results: []
      }
    },
    methods: {
      updateSearch(res) {
        console.log("更新搜索结果", res);
        this.results = res
        if (this.$router.history.current.path !== "/search") {
          this.$router.push({
            path: 'search'
          })
        }


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
    position: relative;
    width: 100%;
    height: 100%;
  }
</style>