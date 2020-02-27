<template>
    <div class="slider-bar-item">
        <span class="icon">></span>
        <span class="text">{{title}}</span>
    </div>


</template>

<script>
    export default {
        name: "SliderBarItem",
        props: {
            title:{
                type:String,
                default:"侧边栏标题"
            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .slider-bar-item{
        display: flex;
        height: 30px;
        line-height: 30px;
        padding: 5px 0;
    }
    .slider-bar-item span{
        display: block;
    }
    .slider-bar-item .icon{
        padding-right: 20px;
    }
    .slider-bar-item .text{
        color: #333;
        font-weight: 600;
    }
    .slider-bar-item .text:hover{
        border-bottom: 3px solid var(--color-background);

    }
</style>