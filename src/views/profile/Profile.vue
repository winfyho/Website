<template>
    <div class="profile">
        <!-- <h1>Profile page</h1> -->

        <div class="data">
            <div class="like-articles">
                <h2>点赞过的文章</h2>
                <ul>
                    <li v-for="article in like_articles" :key="article._id" >
                        <ArticlePreview :article="article" />
                        
                        <div class="hover">
                            <button class="open" @click="routeToArticle(article.topic,article._id)">查看</button>
                            <button @click="removeLike(article._id)">删除</button>
                        </div>
                    </li>
                </ul>
            </div>

            <div class="collect-articles">
                <h2>收藏文章</h2>
                <ul>
                    <li v-for="article in collect_articles"  :key="article._id">
                        <ArticlePreview :article="article" />
                        
                        <div class="hover">
                            <button class="open" @click="routeToArticle(article.topic,article._id)">查看</button>
                            <button @click="removeCollect(article._id)">删除</button>
                        </div>
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
        },
        methods: {
            removeLike(id){
                const oldList = getLocalStorage("like_articles")
                let newList = oldList.filter(item => {
                    return item._id !== id
                })
                setLocalStorage("like_articles",newList)
                this.like_articles = newList
            },
            removeCollect(id){
                const oldList = getLocalStorage("collect_articles")
                let newList = oldList.filter(item => {
                    return item._id !== id
                })
                setLocalStorage("collect_articles",newList)
                this.collect_articles = newList
            },
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
        width: 1000px;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
    }

    .profile .data>div {
        border-radius: 8px;
        background: #fff;
        width: 485px;
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
    .profile .data>div ul li .hover{
        display: none;
    }
    .profile .data>div ul li .hover button{
        position: absolute;
        right: 70px;
        top: 20px;
        width: 50px;
        height: 50px;
        border-radius: 50%;
    }
    .profile .data>div ul li .hover button.open{
        background: #f40;
        right: 150px;
    }
    .profile .data>div ul li:hover .hover {
        display: block;
        width: 100%;
        height: 100%;
        background: rgba(100, 100, 100, .7);
        position: absolute;
        top: 0;
        left: 0;
    }
</style>