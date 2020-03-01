<template>
    <div class="page">
        <div class="markdown">
                <mavon-editor 
                :value="htmlMD" 
                :boxShadow="false"
                :defaultOpen="'preview'"
                :subfield=false
                :editable="false"
                :toolbarsFlag="false"></mavon-editor>
        </div>
    </div>


</template>

<script>
    export default {
        name: "",
        components:{
        },
        props:{
            htmlMD:{
                type:String,
                default:``
            },
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.page{
    box-sizing: border-box;
    width: 100%;
    padding: 20px 40px;  
    padding-bottom: 0px;
    border-left: 1px solid #eee;
    overflow-y: scroll;
}
.page .markdown{
    min-width: 500px;
    max-width: 800px;
    margin: 0 auto;
}
</style>