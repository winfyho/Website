<template>
  <div class="home">
    <SliderBar />
    <Page />

  </div>


</template>

<script>
  import SliderBar from "components/common/sliderbar/SliderBar.vue"
  import Page from "components/common/page/Page.vue"

  import { getHomeData } from "network/home.js"

  export default {
    name: "Home",
    components: {
      SliderBar,
      Page
    },
    data() {
      return {
        results: null
      }
    },
    created() {
      // 发送网络请求
      getHomeData().then(res => {
        console.log("home网络请求", res);
        this.results = res
      })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    display: flex;
    width: 100%;
    height: 100%;
  }

  .home .slider-bar {
    flex: 0 0 300px;
  }
</style>