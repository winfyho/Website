<template>
    <div class="slider-bar">
        <ul>
            <li><SliderBarItem /></li>
            <li><SliderBarItem /></li>
            <li><SliderBarItem /></li>
            
        </ul>
    </div>


</template>

<script>
    import SliderBarItem from "./SliderBarItem.vue"
    export default {
        name: "SliderBar",
        components:{
            SliderBarItem
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.slider-bar{
    height: 100%;
    overflow-y: auto;
    padding-top: 20px;
    padding-left: 25px;
}

.slider-bar ul li{
    cursor: pointer;
    width: 100%;
    height: auto;
    padding: 5px 0;
    /* border-bottom:1px solid #ddd; */
}


</style>