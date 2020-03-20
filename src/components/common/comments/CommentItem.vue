<template>
  <div class="comment-item">
    <div class="header">
      <span class="username">{{comment.username}}</span>
      <span class="time">{{postTime}}</span>
      <span class="likes">点赞 {{comment.likes}}</span>


    </div>
    <div class="content">{{comment.content}}</div>
  </div>
</template>


<script>
  export default {
    name: 'CommentItem',

    props: {
      comment: {
        type: Object
      }
    },
    data() {
      return {


      }
    },
    computed:{
      postTime(){
        const date = new Date(this.comment.time)
        return `${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()} ${date.getHours()}:${date.getMinutes()}`
      }
    },
    methods: {



    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.comment-item{
  padding: 10px 5px;
  border-bottom:1px solid #eee;
}
.comment-item .header{
  display: flex;
  height: 20px;
  padding-bottom: 12px;
}
.comment-item .header span{
  font-size: 12px;
  display: block;
  height: 100%;
  line-height: 20px;
}
.comment-item .header span.username{
  color: #00a1d6;
  font-size: 14px;
  flex: 1 1 auto;
}
.comment-item .header .time{
  color: #777;
  flex: 0 0 130px;
}
.comment-item .header .likes{
  color: #555;
  flex: 0 0 50px;
}
.comment-item .content{
  width: 100%;
  height: auto;
  color: #444;
}
</style>