<template>
    <div class="article-preview" >       
        <div class="top">
            <h6>{{article.title}}</h6>
            <em class="tag">{{article.topic}}</em>
        </div>
        <div class="bottom">
            <div class="content">

                <div class="infor">
                    <span>浏览：{{article.views}}</span>
                    <span>点赞：{{article.likes}}</span>
                    <span>评论：{{article.comments.length}}</span>
                    <span class="date">发表时间：{{`${new Date(article.time).getMonth()+1}-${new Date(article.time).getDate()}`}}</span>
                </div>
            </div>
        </div>
    </div>


</template>

<script>


    export default {
        name: "ArticlePreview",
        components: {

        },
        props:{
            article:{
                type:Object,
                default:{}
            }
        },
        data() {
            return {

            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.article-preview{
    width: 100%;
    box-sizing: border-box;
    padding: 10px 20px;
}
.article-preview .top {
    display: flex;
    margin: 0 0 10px 0;
}
.article-preview .top h6{
    margin: 0;
    flex: 1 1 auto;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    color: #222;
    font-weight: 600;
}
.article-preview .top em{
    margin: 9px 0;
}
.article-preview .infor{
    display: flex;
}
.article-preview .infor span {
    display: block;
    font-size: 14px;
    color: #888;
    flex: 0 0 90px;
}
.article-preview .infor span.date{
    flex: 1 1 auto;
}
</style>