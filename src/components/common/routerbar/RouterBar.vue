<template>
    <div class="router-bar">
        
        <router-link class="router-bar-item" to="/study/es6">ES6</router-link>
        <router-link class="router-bar-item" to="/study/markdown">Markdown</router-link>
        <router-link class="router-bar-item" to="/study/vue">Vue</router-link>



    </div>


</template>

<script>
    



    export default {
        name: "router-bar",
        components: {

        },
        data() {
            return {

            }
        },
        methods: {
            
        },


    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.router-bar{
    display: flex;
    height: 40px;
    padding: 15px 0;
    justify-content: center;
}
.router-bar .router-bar-item{
    color: #424242;
    padding: 0 20px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: #aaa;
    border-radius: 10px;
    margin:0 10px;
}
</style>