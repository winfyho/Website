<template>
    <div class="slider-bar">
        <ul>
            <li v-for="(item,index) in catalogue" @click="sliderClick(item,index)">
                <SliderBarItem 
                :title="item.title" 
                :class="{active:curIndex === index }"
                :active="curIndex === index?true:false" />

                
            </li>

        </ul>
    </div>


</template>

<script>
    import SliderBarItem from "./SliderBarItem.vue"
    export default {
        name: "SliderBar",
        components: {
            SliderBarItem,
        },
        props: ['catalogue','sliderBarIndex'],
        data(){
            return{
                curIndex:0,
            }
        },
        watch:{
            catalogue:function(){
                this.curIndex= 0 
            }
        },
        methods:{
            
            sliderClick(item,index){
                this.curIndex = index

                // console.log(item.url,index);
                this.$emit("sliderbar-click",item.url)

                // if(!bar.showChild){
                //     let path = `./markdown/${this.pagerRootName}/${bar.path}`
                    
                // }else{
                //     // console.log(bar.chidren);
                    
                // }
                
                
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .slider-bar {
        box-sizing: border-box;
        flex: 0 0 auto;
        width: auto;
        min-width: 300px;
        max-width: 350px;
        height: 100%;
        overflow-y: auto;
        overflow-x: hidden;
        padding: 20px;
        padding-left: 30px;
        z-index: 3;
        box-shadow: 2px 8px 8px rgba(0, 0, 0, .3)
    }

    .slider-bar ul li {
        cursor: pointer;
        width: 100%;
        height: auto;
        /* transition: .3s;
        transform: translateX(-20%); */
        /* border-bottom:1px solid #ddd; */
    }
</style>