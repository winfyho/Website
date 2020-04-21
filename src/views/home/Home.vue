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

  import { request } from "network/request.js"
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
      this.recommends = [
        {
          title:"前端安全：如何防范XSS攻击",
          href:"https://tech.meituan.com/2018/09/27/fe-security.html"
        },
        {
          title:"前端安全：如何防范CSRF攻击",
          href:"https://tech.meituan.com/2018/10/11/fe-security-csrf.html"
        }
      ]
      this.articles = articles
      console.log()
      
      request({
        url: '/article/all',
        toast:this.$toast
      }).then(articles => {
        console.log(articles)
        this.articles = articles
        // this.$toast.showToast({
        //   icon:"loading"
        // })

      })

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .home {
    display: flex;
    width: 100vw;
    height: 100%;
    overflow: scroll;
  }

  .home .slider-bar {
    flex: 0 0 300px;
  }

  .wraper {
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    max-width: 1024px;
    width: 1024px;
    margin: 0 auto;
  }
</style>