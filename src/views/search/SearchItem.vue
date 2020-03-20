<template>
    <div class="search-item" >       
        <div class="top">
            <h6>{{searchItem.title}}</h6>
            <em class="tag">{{searchItem.topic}}</em>
        </div>
        <div class="bottom">
            <div class="content">

                <div class="infor">
                    <span>浏览：{{searchItem.views}}</span>
                    <span>点赞：{{searchItem.likes}}</span>
                    <span>评论：{{searchItem.comments.length}}</span>
                    <span class="date">发表时间：{{`${new Date(searchItem.time).getMonth()+1}-${new Date(searchItem.time).getDate()}`}}</span>
                </div>
            </div>
        </div>
    </div>


</template>

<script>


    export default {
        name: "SearchItem",
        components: {

        },
        props:["searchItem"],
        data() {
            return {

            }
        },
        computed:{
            searchResults(){
                return this.$store.state.results

            },
            
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search-item{
    width: 100%;
    padding: 10px 40px;
    box-sizing: border-box;
}
.search-item .top {
    display: flex;
    margin: 0 0 10px 0;
}
.search-item .top h6{
    margin: 0;
    flex: 1 1 auto;
    cursor: pointer;
    height: 40px;
    line-height: 40px;
    color: #222;
    font-weight: 600;
}
.search-item .top em{
    margin: 9px 0;
}
.search-item .infor{
    display: flex;
}
.search-item .infor span {
    display: block;
    font-size: 14px;
    color: #888;
    flex: 0 0 90px;
}
.search-item .infor span.date{
    flex: 1 1 auto;
}
</style>