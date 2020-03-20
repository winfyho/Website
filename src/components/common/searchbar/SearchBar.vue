<template>
    <div class="search-bar" @keyup.enter="search">
        <input type="text" placeholder="输入关键字" v-model="keyword">
        <i @click="search">搜索</i>
    </div>


</template>

<script>
    import { searchFile } from "network/search.js"
    export default {
        name: "",
        data() {
            return {
                keyword: "",

            }
        },
        computed: {
            studyArticles() {
                return this.$store.state.studyArticles
            }
        },
        methods: {
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
        created() {
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .search-bar {
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
</style>