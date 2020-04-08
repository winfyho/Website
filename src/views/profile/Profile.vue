<template>
    <div class="profile">
        <!-- <h1>Profile page</h1> -->

        <div class="data">
            <div class="like-articles">
                <h2>点赞过的文章</h2>
                <ul>
                    <li v-for="article in like_articles" @click="routeToArticle(article.topic,article._id)">
                        <ArticlePreview :article="article" />
                    </li>
                </ul>
            </div>

            <div class="collect-articles">
                <h2>收藏文章</h2>
                <ul>
                    <li v-for="article in collect_articles" @click="routeToArticle(article.topic,article._id)">
                        <ArticlePreview :article="article" />
                    </li>
                </ul>
            </div>
        </div>
    </div>


</template>

<script>
    import axios from 'axios'
    import { getLocalStorage, setLocalStorage } from "storage/localStorage.js"
    import ArticlePreview from 'components/content/articlePreview/ArticlePreview'


    export default {
        name: "Profile",
        components: {
            ArticlePreview
        },
        data() {
            return {
                like_articles: [],
                collect_articles: []
            }
        },
        created() {
            this.getLikeArticles()
            this.getCollectArticles()
            console.log(this.like_articles, this.collect_articles);

        },
        methods: {
            routeToArticle(type, id) {
                console.log(type, id);
                this.$router.push({ path: 'study', query: { type,id } })

            },
            getLikeArticles() {
                const like_articles = getLocalStorage("like_articles")
                if (like_articles) {
                    this.like_articles = like_articles
                }
            },
            getCollectArticles() {
                const collect_articles = getLocalStorage("collect_articles")
                if (collect_articles) {
                    this.collect_articles = collect_articles
                }
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .profile {
        width: 100%;
        height: 100%;
        background: #f8f8f8;
        padding-top: 20px;
    }

    .profile .data {
        width: 1200px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .profile .data>div {
        border-radius: 8px;
        background: #fff;
        width: 580px;
        box-sizing: border-box;
        padding: 20px 20px;
    }

    .profile .data>div h2 {
        margin: 0;
        margin: 0 0 10px 0;
        font-size: 20px;
        color: var(--color-title);
    }

    .profile .data>div ul li {
        cursor: pointer;
    }

    .profile .data>div ul li {
        position: relative;
    }

    .profile .data>div ul li:hover::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        background: rgba(100, 100, 100, .1);
        position: absolute;
    }
</style>