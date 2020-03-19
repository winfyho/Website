<template>
  <div class="about">
    <h1>about</h1>
    <Comments />
  </div>


</template>

<script>
  import Comments from "components/common/comments/Comments.vue"
  import axios from 'axios'

  export default {
    name: "About",
    created() {
      // axios.get(`http://127.0.0.1:3000/comment`).then((res) => {
      //   // console.log("请求md文件", url, res);
      //   console.log(res);

      // });
    },
    components: {
      Comments
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>