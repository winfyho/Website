<template>
    <div class="recommend">

        <h6>推荐内容</h6>
        <ul>
            <li v-for="item in recommends"  @click="navigateTo(item)">
                <span>{{item.title}}</span>
            </li>
        </ul>

    </div>


</template>

<script>
    export default {
        name: "Recommend",
        props:{
            recommends:{
                type:Array,
                default:[]
            }
        },
        methods:{
            navigateTo(item){
                console.log("route-to ",item.id)
                // this.$router.push({
                //     path:`/study/type=${item.topic}&id=${item.id}`,
                // })
                // 
                // 
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .recommend {

        width: 300px;
        background: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, .3);
    }

    .recommend h6 {
        margin: 0;
        padding: 0 20px;
        height: 50px;
        background: #f1f1f1;
        line-height: 50px;
        color: #555;
        font-weight: 600;
    }
    .recommend ul {
        padding: 10px 15px;
    }
    .recommend ul>li{
        cursor: pointer;
        height: 25px;
        line-height: 25px;
    }
    .recommend ul>li:hover span{
        color: var(--color-title);
    }
    .recommend ul>li span{
        display: inline-block;
    }
</style>