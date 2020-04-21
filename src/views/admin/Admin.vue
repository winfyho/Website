<template>
    <div class="admin">
        <div class="admin-wraper">
            <ArticleList :articles="articles" @delete="()=>this.getArticles()" @edit="startEdit" />
            <ArticleEditor 
            @post="()=>this.getArticles()"
            @close="()=>this.showEditor=false" 
            v-show="showEditor" 
            :article="curArticle" />

            <button class="btn-post" @click="()=>this.showEditor=true">发布文章</button>
        </div>
    </div>


</template>

<script>
    import ArticleEditor from "./childComps/articleEditor/ArticleEditor.vue"
    import ArticleList from "./childComps/articleList/ArticleList.vue"
    import { request } from "network/request.js"
    export default {
        name: "Admin",
        components: {
            ArticleEditor,
            ArticleList
        },
        data() {
            return {
                curArticle: {},
                showEditor: false,
                articles: []
            }
        },
        methods: {
            startEdit(article) {

                this.showEditor = true
                this.curArticle = article
                console.log('edit', this.curArticle.title)

            },
            getArticles() {
                request({
                    method: 'get',
                    url: 'article/all'
                }).then(articles => {
                    console.log('文章', articles)
                    this.articles = articles
                })
            }
        },
        created() {
            this.getArticles()
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .admin {
        width: 100%;
        width: 100vw;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .admin .admin-wraper {
        width: 1000px;
        padding-top: 10px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }

    .btn-post {
        position: absolute;
        bottom: 20px;
        left: 48%;
    }
</style>