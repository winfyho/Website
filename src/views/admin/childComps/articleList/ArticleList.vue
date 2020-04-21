<template>
    <div class="article-list">
        <ul>
            <li class="title">
                <span class="title">文章名称</span>
                <span class="url">路径</span>
                <span class="time">时间</span>
                <span class="content">预览</span>
                <span class="views">浏览数</span>
                <span class="likes">点赞</span>
                <span class="comments">评论</span>
                <span class="delete">删除</span>
            </li>

            <li v-for="article in articles">
                <span class="title" @click="editArticle(article)" >{{article.title}}</span>
                <span class="url">{{article.url}}</span>
                <span class="time">{{new Date(article.time).getMonth()+1 + '月' +new Date(article.time).getDate() }}</span>
                <span class="content">{{article.content}}</span>
                <span class="views">{{article.views}}</span>
                <span class="likes">{{article.likes}}</span>
                <span class="comments">{{article.comments.length}}</span>
                <span class="delete" @click="deleteArticle(article)">删除</span>

            </li>
        </ul>


    </div>
</template>


<script>
    import {request} from "network/request.js"
    import {getDateObj} from "common/date.js"
    import {_deleteArticle} from "network/article.js"

    export default {
        name: "Articles",
        props:{
            articles:{
                type:Array,
                default:[]
            }
        },
        data() {
            return {
            }
        },
        
        methods:{
            editArticle(article){
                this.$emit('edit',article)  
            },
            deleteArticle(article){
                console.log('delete',article._id)
                _deleteArticle(article._id)
                    .then(res => {
                        alert("删除成功")
                        this.$emit('delete')
                    })
                    .catch(err => alert("删除失败"))
            }
        },
        
    }
</script>

<style scoped>
    .article-list {
        width: 100%;
        border: 1px solid #aaa;
    }

    .article-list ul li {
        display: flex;
        padding: 0 20px;
        height: 50px;
    }
    .article-list ul li.title{
        background: #eee;
        height: 50px;
    }
    .article-list ul li.title span{
        line-height: 50px;
        min-width: 50px;
    }
    .article-list ul li span {
        flex: 0 0 auto;
        height: 100%;
        line-height: 50px;
    }
    .article-list ul li span.title{
        width: 200px;
        min-width: 200px;
        cursor: pointer;
    }
    .article-list ul li span.title:hover{
        color: var(--color-title);
    }
    .article-list ul li span.url{
        width: 200px;
        min-width: 200px;
    }
    .article-list ul li span.time{
        width: 100px;
        min-width: 100px;
        font-size: 13px;
        color: #555555;
    }
    .article-list ul li span.content{
        width: 150px;
        font-size: 14px;
        overflow: hidden;
    }
    .article-list ul li span.views,
    .article-list ul li span.likes,
    .article-list ul li span.comments{
        flex: 1 1  auto;
        text-align: center;
        overflow: hidden;
    }

    .article-list ul li span.delete{
        min-width: 50px;
        max-width: 50px;
        width: 50px;
        text-align: right;
        color: #f50;
        cursor: pointer;
    }
   
</style>