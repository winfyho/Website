<template>
    <div class="tab-control">
        <ul>
            <li v-for="(tab,index) in tabs" 
            :class="{active:curBarIndex === index}" 
            @click="changeCurBar(index,tab.title)">
                <span class="title">{{tab.title}}</span>
            </li>
            
        </ul>

    </div>


</template>

<script>
    export default {
        name: "TabControl",
        components:{
        },
        props:{
            tabs:{
                type:Array,
                default(){
                    return []
                }
            }
        },
        data(){
            return {
                curBarIndex:0
            }
        },
        methods:{
            changeCurBar(index,title){
                this.curBarIndex = index
                this.$emit("bar-click",{
                    index,
                    title,
                })
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.tab-control{
    position: absolute;
    width: 100%;
    padding: 10px 0;
}
.tab-control ul{
    display: flex;
    justify-content: center;
}
.tab-control ul li {
    cursor: pointer;
    margin: 0 15px;
    border: 1px solid #aaa;
    border-radius: 8px;
}
.tab-control ul li:hover{
    background: #eaeaea;
}
.tab-control ul li.active{
    background: var(--color-background);
    border: 1px solid #fff;
    color: #fff;
}
.tab-control ul li.active:hover{
    opacity: 0.8;
}
.tab-control ul li span{
    display: block;
}
.tab-control ul li span.title{
    padding: 0 20px;
    height: 38px;
    line-height: 40px;
}
</style>