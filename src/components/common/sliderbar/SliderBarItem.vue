<template>
    <div class="slider-bar-item">
        <!-- <span class="icon">></span> -->
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
        padding: 8px 0;
    }
    .slider-bar-item span{
        display: block;
        height: 30px;
        line-height: 30px;
    }
    .slider-bar-item .icon{
        padding-right: 20px;
    }
    .slider-bar-item .text{
        color: #454545;
        font-weight: 600;
    }
    .slider-bar-item .text::after{
        content: '';
        display: block;
        width: 0%;
        height: 3px;
        background: var(--color-background);
        transition: .3s;
    }
    .active .text{
        font-size: 20px;
        /* padding-left: 10px; */
    }
    .active .text::after{
        width: 100%;
        
        /* border-bottom: 3px solid var(--color-background); */
    }
    .slider-bar-item .text:hover{
        /* border-bottom: 3px solid var(--color-background); */
        color: #bbb;

    }
</style>