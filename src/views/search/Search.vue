<template>
    <div class="search">
        <div class="results">
            <ul>
                <li v-for="item in searchResults" @click="routeToArticle(item.topic,item._id)">
                    <SearchItem :searchItem="item" />
                </li>
            </ul>
        </div>

    </div>


</template>

<script>
    import SearchItem from "./SearchItem.vue"

    export default {
        name: "Search",
        components: {
            SearchItem
        },
        props:["results"],
        data() {
            return {

            }
        },
        computed:{
            searchResults(){
                return this.$store.state.results
            },
            
        },
        methods:{
            routeToArticle(type,id){
                console.log(type,id)
                this.$router.push({ path: 'study', query: { type,id } })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search{
    width: 100%;
    height: 100%;
    background: #f7f7f7;
}
.search .results{
    width: 800px;
    margin: 0 auto;
    background: #fff;
}
.search .results ul li{
    border-bottom: 1px solid #f5f5f5;
}

</style>