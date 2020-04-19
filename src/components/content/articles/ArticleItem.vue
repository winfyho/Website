<template>
    <div class="article-item">
        <div class="top">
            <h3 @click="routeToDetail">{{article.title}}</h3>
            <ul class="tags" >
                <li v-for="tag in article.tags">{{tag}}</li>
            </ul>
        </div>

        <div class="body">
            <img :src="article.pre_img" alt="">
            <div class="content">{{article.content}}</div>
        </div>

        <div class="bot">
            <span>{{article.views}}</span>
            <span>{{article.likes}}</span>
            <span>{{date}}</span>
        </div>
    </div>


</template>

<script>
    import { getDateObj } from "common/date.js"
    export default {
        name: "ArticleItem",
        props: {
            article: {
                type: Object,
                default: {}
            }
        },
        computed: {
            date() {
                return getDateObj(this.article.time).dateString
            }
        },
        methods:{
            routeToDetail(){
                console.log(this.article._id)
                // this.$router.push({
                //     path:`/study?type=${this.article.topic}&id=${this.article.id}`
                // })
                
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .article-item {
        padding: 0 25px;
        box-shadow: 0 0 4px rgba(0, 0, 0, .2);
        margin-bottom: 15px;
        border-radius: 5px;
    }

    .article-item .top {
        border-bottom: 1px solid #eee;
        height: 45px;
        line-height: 45px;
        font-weight: 500;
        font-size: 18px;
        display: flex;
    }
    .article-item .top h3{
        cursor: pointer;
        flex: 1 1 auto;
        margin: 0;
    }
    .article-item .top h3:hover{
        color: var(--color-title);
    }
    .article-item .top .tags{
        flex: 0 0 auto;
        display: flex;
        align-items: center;
    }
    .article-item .top .tags li{
        height: 25px;
        line-height: 25px;
        font-size: 14px;
        padding: 0 10px;
        background: pink;
        border-radius: 10px;
        color: #fff;
        margin-left: 15px;
    }

    .article-item .body {
        display: flex;
        height: 120px;
    }

    .article-item .body img {
        width: 120px;
        flex: 0 0 auto;
        max-width: 120px;
        max-height: 120px;
        background: #eee;
    }

    .article-item .body .content {
        flex: 1 1 auto;
        padding: 10px 20px;
        font-size: 14px;
        line-height: 24px;
        color: #424242;
        overflow: hidden;
    }

    .article-item .bot {
        padding: 20px 0 10px 0;
        font-size: 12px;
        color: #888;
    }

    .article-item .bot span {
        margin-right: 15px;
    }
</style>