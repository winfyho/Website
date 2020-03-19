<template>
    <div class="comments">
        <h1>评论区</h1>
        <ul>
            <li v-for="comment in comments">
                <CommentItem :comment="comment" />

            </li>
        </ul>
    </div>
</template>


<script>
    import CommentItem from "./CommentItem.vue"
    import axios from 'axios'
    export default {
        name: 'Comments',
        components: {
            CommentItem
        },
        props: ["curNavIndex"],
        created() {
            this.getComments()
        },
        data() {
            return {
                comments: [],

            }
        },

        methods: {
            getComments() {
                axios.get(`http://127.0.0.1:3000/comment`).then((res) => {
                    // console.log("请求md文件", url, res);
                    console.log(res.data);
                    this.comments = res.data
                    
                });
            }


        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>