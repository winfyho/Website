<template>
    <div class="comment-item">
      <span>{{comment.name}}</span>
      <span>{{comment.content}}</span>
      <span>{{comment.time}}</span>
    </div>
  </template>
  
  
  <script>
    export default {
      name: 'CommentItem',
      
      props:{
          comment:{
              type:Object
          }
      },
      data() {
        return {
          

        }
      },
  
      methods: {
        
  
        
      }
    }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>

  </style>