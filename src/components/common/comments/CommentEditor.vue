<template>
  <div class="comment-editor">
    <h1 class="triangle">发表评论</h1>
    <div class="username">
      <h2>名称</h2>
      <input type="text" name="username" v-model="username" required>
    </div>
    <div class="content">
      <h2>评论内容</h2>
      <textarea name="content" v-model="content" required></textarea>
    </div>
    <div>
      <button class="btn btn-submit" @click="submitComment">发表评论</button>
    </div>
  </div>


</template>

<script>
  import {postComment} from "network/comment.js"
  export default {
    name: "CommentEditor",
    props:{
      id:{
        type:String
      }
    },
    data(){
      return{
        username:"",
        content:"",
      }
    },
    methods:{
      submitComment(){
        let comment = {
          id:this.id,
          username:this.username,
          content:this.content,
          time:new Date().getTime(),
          likes:0
        }
        this.$store.state.curArticle.postComment(comment).then(res => {
          console.log("添加评论成功",res.data);
          this.content = ""
          this.$store.commit('changeArticle',res.data)
        })
        
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .comment-editor h1{
    display: flex;
    font-size: 22px;
    padding: 15px 0;
    font-weight: 600;
  }
  .comment-editor h2{
    font-size: 18px;
    font-weight: 500;
  }

  .comment-editor .content {
    width: 100%;
  }

  .comment-editor .content textarea {
    border-radius: 5px;
    width: 100%;
    height: 80px;
    max-width: 100%;
    min-height: 80px;
    max-height: 160px;
    box-sizing: border-box;
    padding: 15px;
    font-size: 18px;
  }

  .comment-editor .username{
    width: 100%;
    padding: 10px 0;
  }
  .comment-editor .username input{
    border-radius: 5px;
    width: 100%;
    text-indent: 1em;
    height: 30px;
    font-size: 20px;
    box-sizing: border-box;
    padding: 10px 0;
    border: 1px solid #999;
  }

  .comment-editor .btn-submit{
    margin: 10px 0;
  }
</style>