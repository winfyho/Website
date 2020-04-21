<template>
    <div class="guide-bar">
        <div class="views">
            <i></i><span>浏览{{article.views}}</span>
        </div>
        <div class="likes" :class="{isLiked:isLiked}" @click="likeArticle">
            <button></button><span>点赞{{article.likes}}</span>
        </div>
        <div class="comments" @click="handleScrollToCom">
            <a class="btn"></a>
            <a class="text">评论{{comments.length}}</a>
        </div>
        <div class="collect" :class="{isCollected:isCollected}" @click="collectArticle">
            <button></button>
            <span>{{isCollected === true ? '已收藏':'收藏'}}</span>
        </div>
        <div class="scoll-top">
            <button @click="handleScrollTop"></button>
        </div>
    </div>


</template>

<script>
    import { updateArticleLikes,addArticleViews } from "network/article.js"
    import { getLocalStorage, setLocalStorage } from "storage/localStorage.js"
    export default {
        name: "GuideBar",
        props: {
            article: {
                type: Object
            }
        },
        data() {
            return {
                isLiked: false,
                isCollected: false,
            }
        },

        computed: {
            // article() {
            //     return this.$store.state.curArticle
            // },
            comments() {
                return this.$store.state.curArticle.comments
            },


        },
        watch: {
            article(value) {
                this.findIsLiked()
                this.findIsCollected()
            }
        },
        methods: {
            handleScrollToCom() {
                this.$emit('to-comment', 0)
            },
            handleScrollTop() {
                this.$emit('scroll', 0)
            },
            // 点赞文章
            likeArticle() {

                if (!this.isLiked) {
                    let list = getLocalStorage("like_articles")
                    let like_articles = list ? list : []

                    like_articles.unshift(this.article)
                    setLocalStorage("like_articles", like_articles)
                    this.isLiked = true
                    this.article.addArticleLikes()
                }
            },

            // 收藏文章
            collectArticle() {
                // window.localStorage.setItem("collect_articles", "")
                if (!this.isCollected) {
                    let list = getLocalStorage("collect_articles")
                    let collect_articles = list ? list : []

                    collect_articles.unshift(this.article)
                    setLocalStorage("collect_articles", collect_articles)

                    this.isCollected = true
                }

            },

            findIsLiked() {
                this.isLiked = false
                let localStorage = getLocalStorage("like_articles")
                let collect_articles = localStorage ? localStorage : []
                collect_articles.forEach(item => {
                    if (item._id === this.article._id) {
                        this.isLiked = true
                    }
                })
            },

            findIsCollected() {
                this.isCollected = false
                let localStorage = getLocalStorage("collect_articles")
                let collect_articles = localStorage ? localStorage : []
                collect_articles.forEach(item => {
                    if (item._id === this.article._id) {
                        this.isCollected = true
                    }
                })
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .guide-bar {
        position: fixed;
        z-index: 9;
        right: 30px;
        top: 110px;
    }

    .guide-bar div {
        cursor: pointer;
        margin: 5px 0;
    }

    .guide-bar div button,
    .guide-bar div .btn {
        padding: 0;
        display: inline-block;
        width: 40px;
        height: 40px;
        background: #fff center center no-repeat;
        background-size: 60% 60%;
        margin-right: 6px;
        border: 1px solid #eee;
    }

    .guide-bar div.views i {
        display: inline-block;
        width: 40px;
        height: 40px;
        margin-right: 6px;
        background: #fff center center no-repeat;
        background-size: 65% 50%;
        background-image: url('~assets/icon/view.png');
    }

    .guide-bar div.likes button {
        background-image: url('~assets/icon/like.png');
    }

    .guide-bar div.isLiked button {
        background-image: url('~assets/icon/like_active.png');
    }

    .guide-bar div.comments .btn {
        background-image: url('~assets/icon/comment.png');
    }

    .guide-bar div.collect button {
        background-image: url('~assets/icon/collect.png');
    }

    .guide-bar div.isCollected button {
        background-image: url('~assets/icon/is_collected.png');
    }

    .guide-bar div:hover button,
    .guide-bar div:hover .btn {
        box-shadow: 3px 3px 8px rgba(0, 0, 0, .3);
    }

    .guide-bar div span,
    .guide-bar div .text {
        vertical-align: top;
        display: inline-block;
        line-height: 40px;
        font-size: 12px;
        color: #666;
    }

    .guide-bar .scoll-top button {
        /* border-radius: 50%; */
        margin-top: 15px;
        box-shadow: 3px 3px 5px rgba(0, 0, 0, .3);
        background-image: url('~assets/icon/top.png');
    }
</style>