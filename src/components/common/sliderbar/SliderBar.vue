<template>
    <div class="slider-bar">
        <ul>
            <li v-for="(item,index) in pager" @click="changeSlider(index)">
                <SliderBarItem :title="item.title" :class="{active:index === curPagerIndex }" />
            </li>

        </ul>
    </div>


</template>

<script>
    import SliderBarItem from "./SliderBarItem.vue"
    export default {
        name: "SliderBar",
        components: {
            SliderBarItem
        },
        props: ['pager','curPagerIndex'],
        methods:{
            changeSlider(index){
                this.$emit("change-slider",{
                    name:this.pager[0].name,
                    index,
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .slider-bar {

        flex: 0 0 auto;
        width: auto;
        /* min-width: 200px; */
        height: 100%;
        overflow-y: auto;
        padding: 20px;
        padding-left: 25px;
        
    }

    .slider-bar ul li {
        cursor: pointer;
        width: 100%;
        height: auto;
        padding: 5px 0;
        /* border-bottom:1px solid #ddd; */
    }
</style>