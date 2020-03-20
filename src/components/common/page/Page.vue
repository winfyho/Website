<template>
    <div class="page" id="scroll-top">
        <div class="markdown">
            <mavon-editor :value="htmlMD" :boxShadow="false" :defaultOpen="'preview'" :subfield=false :editable="false"
                :toolbarsFlag="false" :previewBackground="'#fff'" :boxShadowStyle="''"></mavon-editor>

            <GuideBar />
            
        </div>


        <Comments id="scoll-comment" />
    </div>


</template>

<script>
    import Comments from "components/common/comments/Comments.vue"
    import GuideBar from "components/content/guideBar/GuideBar.vue"

    import {addArticleViews} from "network/article.js"
    export default {
        name: "",
        components: {
            Comments,
            GuideBar
        },
        props: {
            htmlMD: {
                type: String,
                default: ``
            },
            curArticle: {
                type: Object
            }
        },
        updated() {
            this.updateArticleViews()
        },
        methods: {
            updateArticleViews() {
                // console.log("当前文章浏览数", this.curArticle.views);
                addArticleViews(this.curArticle._id,this.curArticle.views)
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
        background: #f8f8f8;
        box-sizing: border-box;
        width: 100%;
        /* padding: 0px 40px; */
        padding-bottom: 0px;
        border-left: 1px solid #eee;
        overflow-y: auto;
    }

    .page .markdown {
        position: relative;
        padding-right: 100px;
        min-width: 450px;
        max-width: 750px;
        margin: 0 auto;
    }

    .page .markdown .markdown-body {
        border: none;
    }
</style>