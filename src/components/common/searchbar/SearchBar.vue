<template>
    <div class="search-bar" @keyup.enter="search">
        <input type="text" @blur="blur" @focus="()=>this.showTip=true" placeholder="输入关键字" v-model="keyword">
        <i @click="search">搜索</i>

        <div class="search-list" v-show="showTip">
            <ul>
                <li v-for="article in searchList" :key="article._id">
                    <span @click="routeToArticle(article)" class="title">{{article.title}}</span>
                    <span class="views">{{article.views}}</span>
                </li>
            </ul>
        </div>
    </div>


</template>

<script>
    import { searchFile } from "network/search.js"
    export default {
        name: "",
        data() {
            return {
                keyword: "",
                showTip: false,
                searchList: []
            }
        },
        watch: {
            keyword(value) {
                if (!value) {
                    this.searchList = []
                } else {
                    let list = this.studyArticles
                    this.searchList = list.filter(article => {
                        let reg = new RegExp(value, 'i');
                        if (article.title.match(reg)) {
                            return true
                        }
                    }).sort((b, a) => {
                        return a.views - b.views
                    })
                }
            }
        },
        computed: {

            studyArticles() {
                return this.$store.state.studyArticles
            }
        },
        methods: {
            blur() {
                setTimeout(() => {
                    this.showTip = false
                }, 100);
            },
            routeToArticle(article) {
                this.showTip = false
                let path = `/study?id=${article._id}&type=${article.topic}`
                if(this.$route.fullPath === path){
                    return
                }
                this.$router.push({
                    path
                })
            },

            search() {

                let results = this.studyArticles.filter(item => {
                    let reg = new RegExp(this.keyword, 'i');
                    if (item.title.match(reg)) {
                        return true
                    }
                })

                this.$store.commit('setSearchResults', results)
                console.log("搜索结果", this.$store.state.results);
                this.$router.push({
                    path: `/search?keyword=${this.keyword}`
                });
            }
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .search-bar {
        position: relative;
        min-width: 300px;
        box-sizing: border-box;
        height: 40px;
        padding: 10px 18px;
        display: flex;
        background: #eee;
        border-radius: 18px;
    }

    .search-bar input {
        flex: 1 1 auto;
        width: 100%;
        height: 100%;
        font-size: 16px;
        line-height: 20px;
    }

    .search-bar i {
        display: block;
        color: var(--color-title);
        cursor: pointer;
        font-size: 14px;
        min-width: 30px;
        text-align: center;
    }

    .search-list {
        background: #f8f8f8;
        position: absolute;
        z-index: 5000;
        min-height: 50px;
        top: 48px;
        left: -15px;
        border: 1px solid #ccc;
        width: 350px;
    }

    .search-list ul {
        padding: 10px 0;
    }

    .search-list ul li {
        display: flex;
        cursor: pointer;
        padding: 0 15px;
        font-size: 14px;
        height: 25px;
        line-height: 25px;
        color: #555;
    }

    .search-list ul li:hover {
        color: var(--color-title);
    }

    .search-list ul li span {
        display: block;
        ;
    }

    .search-list ul li span.title {
        flex: 1 1 auto;
    }

    .search-list ul li span.vies {
        flex: 0 0 auto;
    }
</style>