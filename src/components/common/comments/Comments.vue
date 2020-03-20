<template>
    <div class="comments">
        <div class="comment-wraper">
            <CommentEditor :id="curArticle._id" />
            <h1 class="triangle">评论区</h1>

            <ul>
                <li v-for="comment in comments">
                    <CommentItem :comment="comment" />
                </li>
            </ul>

        </div>
    </div>
</template>


<script>
    import CommentItem from "./CommentItem.vue"
    import CommentEditor from "./CommentEditor.vue"
    import axios from 'axios'
    export default {
        name: 'Comments',
        components: {
            CommentEditor,
            CommentItem
        },
        props: ["curNavIndex"],
        created() {
        },
        data() {
            return {
                // comments:this.curArticle.comments
            }
        },
        computed: {
            comments() {
                let list = this.$store.state.curArticle.comments
                list.sort((a, b) => {
                    return b.time - a.time
                })
                return list
            },
            curArticle() {
                return this.$store.state.curArticle
            }
        },
        methods: {

        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .comments {
        position: relative;
        max-width: 750px;
        min-width: 450px;
        /* box-sizing: border-box; */
        margin: 15px auto;
        padding-right: 100px;
        z-index: 4;
    }

    .comments .comment-wraper {

        background: #fff;
        padding: 15px 30px;

    }

    .comments .comment-wraper h1 {
        display: flex;
        font-size: 22px;
        padding: 15px 0;
        font-weight: 600;
    }
</style>