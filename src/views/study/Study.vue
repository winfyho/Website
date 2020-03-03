<template>
    <div class="study">

        <TabControl :tabs="tabs" @bar-click="barClick" />

        <div class="tab-view">
            <SliderBar :pager="curPager" 
            :pagerRootName="pagerRootName"
            @sliderbar-click="sliderBarClick" />

            <Page :htmlMD="htmlMD" />
        </div>
    </div>


</template>

<script>
    import TabControl from "components/content/tabControl/TabControl.vue"
    import SliderBar from "components/common/sliderbar/SliderBar.vue"
    import Page from "components/common/page/Page.vue"

    import { getStudyPager,getStudyMDFile } from "network/study.js"
    export default {
        name: "Study",
        components: {
            TabControl,
            SliderBar,
            Page
        },
        data() {
            return {
                tabs: [
                    { title: "css3" },
                    { title: "es6" },
                    { title: "markdown" },
                    { title: "vue" },
                ],
                curPager: {},
                pagerRootName:'',
                htmlMD:``
            }
        },
        methods: {
            barClick(res) {
                this.getPager(res.title)
                // this.htmlMD = ``
                console.log("改变curPager",res.title,this.curPager);
                
            },
            sliderBarClick(path){
                console.log("获取文件",path);
                this.getMDFile(path)
                
            },
            getMDFile(path){
                getStudyMDFile(path).then(mdData => {
                    console.log(mdData);
                    this.htmlMD = mdData.data
                })
            },
            getPager(pagerName) {
                getStudyPager(pagerName).then(pager => {
                    this.curPager = pager
                    this.pagerRootName = pagerName
                })
            }
        },
        created() {
            this.getPager("css3")
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .study {
        position: absolute;
        top: var(--navbar-height);
        bottom: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        width: 100%;
        /* height: 100%; */
        overflow: hidden;

    }
    .study .tab-control{
        top: 0px;
    }
    .study .tab-view{
        position: absolute;
        top:var(--tabcontrol-height);
        bottom: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        display: flex;
        width: 100%;
        
        
    }
    
</style>