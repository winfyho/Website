<template>
    <div class="article-list">
        <ul>
            <li class="title">
                <span class="title">文章名称</span>
                <span class="url">路径</span>
                <span class="time">时间</span>
                <span class="content">预览</span>
                <span class="views">浏览数</span>
                <span class="comments">评论</span>
            </li>

            <li v-for="article in articles">
                <span class="title">{{article.title}}</span>
                <span class="url">{{article.url}}</span>
                <span class="time">{{article.time}}</span>
                <span class="content">{{article.content}}</span>
                <span class="views">{{article.views}}</span>
                <span class="comments">{{article.comments.length}}</span>
            </li>
        </ul>


    </div>
</template>


<script>
    import {request} from "network/request.js"
    export default {
        name: "Articles",
        data() {
            return {
                articles: []
            }
        },
        created() {
            request({
                method:'get',
                url:'article/all'
            }).then(articles => {
                console.log('文章',articles)
                this.articles = articles
            })
        },
    }
</script>

<style scoped>
    .article-list {
        width: 700px;
        border: 1px solid #aaa;
    }

    .article-list ul li {
        display: flex;
        padding: 0 10px;
        height: 30px;
    }
    .article-list ul li.title{
        background: #eee;
        height: 50px;
    }
    .article-list ul li.title span{
        line-height: 50px;
    }
    .article-list ul li span {
        height: 100%;
        line-height: 30px;
    }
    .article-list ul li span.title{
        width: 100px;
        min-width: 100px;
    }
    .article-list ul li span.url{
        width: 180px;
        min-width: 180px;
    }
    .article-list ul li span.time{
        width: 120px;
        min-width: 120px;
    }
    .article-list ul li span.content{
        width: 150px;
        overflow: hidden;
    }
    .article-list ul li span.views{
        flex: 1 1  auto;
        text-align: center;
        overflow: hidden;
    }
    .article-list ul li span.comments{
        flex: 1 1  auto;
        text-align: center;
        overflow: hidden;
    }
</style>