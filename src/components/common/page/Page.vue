<template>
    <div class="page">
        <div class="markdown">
            <markdown />
        </div>
    </div>


</template>

<script>
    import markdown from "assets/markdown/markdown.vue"
    export default {
        name: "",
        components:{
            markdown
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
    width: 100%;
    padding: 20px 40px;  
    border-left: 1px solid #eee;
    overflow-y: scroll;
}
.page .markdown{
    min-width: 500px;
    max-width: 800px;
    margin: 0 auto;
}
</style>