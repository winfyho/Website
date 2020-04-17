<template>
    <div class="articles">
        <ArticleItem v-for="item in articles" :article="item" />
    </div>


</template>

<script>
    import ArticleItem from "./ArticleItem.vue"
    export default {
        name: "Articles",
        components:{
            ArticleItem
        },
        props: {
            articles: {
                type: Array,
                default: []
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .articles {
        width: 700px;
        height: 400px;
    }
</style>