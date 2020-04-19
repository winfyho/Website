<template>
    <div class="admin">
        <div class="admin-wraper">
            <ArticleList @edit="startEdit" />
            <ArticleEditor :article="curArticle" />
        </div>
    </div>


</template>

<script>
    import ArticleEditor from "./childComps/articleEditor/ArticleEditor.vue"
    import ArticleList from "./childComps/articleList/ArticleList.vue"
    export default {
        name: "Admin",
        components: {
            ArticleEditor,
            ArticleList
        },
        data() {
            return {
                curArticle:{}
            }
        },
        methods: {
            startEdit(article){
                this.curArticle = article
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .admin {
        width: 100%;
        width: 100vw;
        height: 100%;
    }

    .admin .admin-wraper {
        width: 1100px;
        padding-top: 10px;
        margin: 0 auto;
        height: 100%;
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
    }
</style>