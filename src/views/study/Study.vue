<template>
    <div class="study">

        <TabControl :tabs="tabs" @bar-click="barClick" />

        <div class="tab-view">
            <SliderBar :catalogue="catalogue" :sliderBarIndex="sliderBarIndex" @sliderbar-click="sliderBarClick" />

            <Page :htmlMD="htmlMD" />
        </div>
    </div>


</template>

<script>
    import TabControl from "components/content/tabControl/TabControl.vue"
    import SliderBar from "components/common/sliderbar/SliderBar.vue"
    import Page from "components/common/page/Page.vue"
    import axios from "axios"

    import { getStudyMDFile } from "network/study.js"
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
                sliderBarIndex: 0,
                htmlMD: ``,
                topic: "css3",
                articles: []
            }
        },
        computed: {
            catalogue() {
                let list = this.articles.filter(item => {
                    return item.topic === this.topic
                })
                // console.log(list,this.articles,this.topic);
                return list
            }
        },
        watch:{
            catalogue:function(val, oldVal){
                this.sliderBarIndex = 0
                // console.log("watch",val,this.sliderBarIndex,this.catalogue[0].url);

                this.getMDFile(this.catalogue[0].url)
                
            }
        },
        methods: {
            barClick(res) {
                this.topic = res.title
                console.log("改变topic", this.topic);
            },
            sliderBarClick(url) {
                this.getMDFile(url)
            },
            getMDFile(url) {
                console.log("获取文件", url);

                getStudyMDFile(url).then(md => {
                    console.log("获取的md", md);
                    this.htmlMD = md.data
                })
            },
            getArticles() {
                axios.get(`http://127.0.0.1:3000/articles`)
                    .then((res) => {
                        console.log("文章列表", res.data);
                        this.articles = res.data
                    });
            }

        },
        created() {
            this.getArticles()
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

    .study .tab-control {
        top: 0px;
    }

    .study .tab-view {
        position: absolute;
        top: var(--tabcontrol-height);
        bottom: 0;
        left: 0;
        right: 0;
        box-sizing: border-box;
        display: flex;
        width: 100%;


    }
</style>