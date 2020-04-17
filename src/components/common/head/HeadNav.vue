<template>
    <div class="head-nav">
        <header class="head-content">
                <Icon />
                <NavBar :curNavIndex="curNavIndex" @navbar-click="navbarClick" />
                <SearchBar @search="getSearchResults" />
                <SignBar />
        </header>
    </div>


</template>

<script>
    import Icon from "./Icon.vue"
    import NavBar from "components/common/navbar/Navbar.vue"
    import SearchBar from "components/common/searchbar/SearchBar.vue"
    import SignBar from "components/common/signbar/SignBar.vue"
    export default {
        name: "HeadNav",
        components: {
            Icon,
            NavBar,
            SearchBar,
            SignBar
        },
        data(){
            return{
                curNavIndex:0
            }
        },
        methods:{
            navbarClick(index){
                // console.log(index);
                this.curNavIndex = index       
            },
            getSearchResults(results){
                this.$emit("updata-search",results)
                this.navbarClick(-1)
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .head-nav{
        width: 100%;
        height: 60px;
        border-bottom: 1px solid #d5d5d5;
        white-space: nowrap;
    }
    .head-nav header{
        height: 100%;
    }
    .head-nav .head-content{
        max-width: 1200px;
        margin: 0 auto;
        display: flex;
    }
    .head-nav .head-content>div{
        margin: 0 10px;
    }
    .head-nav .head-content .winfy-icon{
        flex: 1 1 auto  ;
    }
    .head-nav .head-content .navbar-wraper{
        flex: 1 1 auto;
    }
    .head-nav .head-content .search-bar {
        margin: 10px 10px;
        flex: 0 0 320px;    
    }
</style>