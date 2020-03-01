<template>
    <div class="study">
        <RouterBar  />

        <router-view></router-view>

    </div>


</template>

<script>
    import RouterBar from "components/common/routerbar/RouterBar.vue"
    export default {
        name: "Study",
        components:{
            RouterBar
        },

        methods:{
            changeRouter(e){
                console.log(e);
                
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.study{
    width: 100%;
    height: 100%;
    overflow: hidden;
}
</style>