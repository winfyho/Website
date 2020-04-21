<template>
    <div class="page" id="scroll-top" ref="view">
        <div class="markdown">
            <mavon-editor :value="htmlMD" :boxShadow="false" :defaultOpen="'preview'" :subfield=false :editable="false"
                :toolbarsFlag="false" :previewBackground="'#fff'" :boxShadowStyle="''"></mavon-editor>

            <GuideBar class="operator" :article="curArticle" @scroll="scrollTo" @to-comment="scrollToComment" />
            
        </div>


        <Comments ref="comment" id="scoll-comment" />
    </div>


</template>

<script>
    import Comments from "components/common/comments/Comments.vue"
    import GuideBar from "components/content/guideBar/GuideBar.vue"

    import {Article} from "network/article.js"
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
            this.$refs.view.scrollTop = 0
            this.updateArticleViews()
        },
        methods: {
            
            updateArticleViews() {
                this.curArticle.addArticleViews().then(views => {
                    // console.log("当前文章浏览数", this.curArticle,views);
                })
            },
            scrollToComment(){
                // console.log("to-comment",this.$refs.comment.$el.offsetTop)
                this.$refs.view.scrollTop = this.$refs.comment.$el.offsetTop
                
            },
            scrollTo(target){
                
                let speed = 70
                // console.log("scroll-top",target)
                let timer = setInterval(() => {
                    if(this.$refs.view.scrollTop === 0){
                        clearInterval(timer)
                    }else{
                        this.$refs.view.scrollTop -= speed
                        speed += 1
                    }
                    
                }, 16.7);
                
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .page {
        position: relative;
        /* background: #f8f8f8; */
        box-sizing: border-box;
        width: 100%;
        padding-bottom: 0px;
        border-left: 1px solid #eee;
        overflow-y: auto;
        transition: .5s;
    }

    .page .markdown {
        position: relative;
        min-width: 450px;
        max-width: 750px;
        margin: 0 auto;
    }

    .page .markdown .markdown-body {
        border: none;
    }
    
</style>