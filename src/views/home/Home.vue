<template>
  <div class="home">

    <div class="wraper">
      <Articles :articles="articles" />
      <Recommend :recommends="recommends" />

    </div>


  </div>


</template>

<script>

  import Articles from "components/content/articles/Articles.vue"
  import Recommend from "components/content/recommend/Recommend.vue"

  import { getHomeData } from "network/home.js"
  import { articles } from "common/articles.js"

  export default {
    name: "Home",
    components: {
      Articles,
      Recommend
    },
    data() {
      return {
        results: null,
        recommends: [],
        articles: []
      }
    },
    created() {
      console.log(articles)
      this.recommends = articles
      this.articles = articles
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    display: flex;
    width: 100%;
    height: 100%;
    overflow: scroll;
  }

  .home .slider-bar {
    flex: 0 0 300px;
  }
  .wraper{
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1024px;
    width: 1024px;
    margin: 0 auto;
  }
</style>