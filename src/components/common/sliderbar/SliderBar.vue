<template>
    <div class="slider-bar">
        <ul>
            <li v-for="(val,key) in pager" @click="sliderClick(key,val)">
                <SliderBarItem :title="val.title" 
                :class="{active:curBarKey === key }" />
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
        props: ['pager','pagerRootName'],
        data(){
            return{
                curBarKey:""
            }
        },
        methods:{
            sliderClick(key,bar){
                this.curBarKey = key
                // console.log(key,bar,this.curPagerIndex);
                if(!bar.showChild){
                    let path = `./markdown/${this.pagerRootName}/${bar.path}`
                    this.$emit("sliderbar-click",path)
                    
                }
                
                
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
        height: 100%;
        overflow-y: auto;
        padding: 20px;
        padding-left: 25px;
        box-shadow: 2px 8px 8px rgba(0, 0, 0, .3)
    }

    .slider-bar ul li {
        cursor: pointer;
        width: 100%;
        height: auto;
        padding: 5px 0;
        /* transition: .3s;
        transform: translateX(-20%); */
        /* border-bottom:1px solid #ddd; */
    }
</style>