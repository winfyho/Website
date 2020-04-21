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
        position: fixed;
        top: 65px;
        bottom: 0;
        width: 100%;
        width: 100vw;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        overflow: auto;
    }

    .admin .admin-wraper {
        padding-top: 10px;
        margin: 0 auto;
    }

    .btn-post {
        position: fixed;
        bottom: 20px;
        left: 48%;
    }
</style>