<template>
    <div class="study">


        <TabControl :tabs="tabs" :curBarName="topic" @bar-click="barClick" />

        <div class="tab-view">
            <SliderBar :catalogue="catalogue" :sliderBarIndex="sliderBarIndex" 
            @sliderbar-click="sliderBarClick" />

            <Page :htmlMD="htmlMD" :curArticle="$store.state.curArticle" />
        </div>
    </div>


</template>

<script>
    import TabControl from "components/content/tabControl/TabControl.vue"
    import SliderBar from "components/common/sliderbar/SliderBar.vue"
    import Page from "components/common/page/Page.vue"
    import axios from "axios"

    import { getStudyMDFile,Article } from "network/study.js"
    export default {
        name: "Study",
        components: {
            TabControl,
            SliderBar,
            Page
        },
        props: ['type'],
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
                topic: this.$route.query.type || 'css3',
                id: '',
                articles: [],
            }
        },
        computed: {
            // catalogue会随着topic变化
            catalogue() {
                let list = this.articles.filter(item => {
                    return item.topic === this.topic
                })
                return list
            },

        },
        watch: {
            // 默认加载当前分类目录第一个
            catalogue: function (val, oldVal) {
                // console.log("watch",val,this.sliderBarIndex,this.catalogue[0].url);
                this.sliderBarIndex = 0
                this.getMDFile(this.catalogue[0])
            },
            // id变化加载对应文章
            id: function (val, oldVal) {
                let result = {}
                this.catalogue.forEach((item, index) => {
                    if (item._id === val) {
                        result = item
                        this.sliderBarIndex = index
                    }
                })
                console.log("选择文章",result.title, this.sliderBarIndex);
                this.getMDFile(result)
            }
        },
        methods: {
            barClick(res) {
                // catalogue会随着topic变化
                this.topic = res.title
                this.$router.push(`study?type=${this.topic}&id=${this.catalogue[0]._id}`)
            },
            sliderBarClick(item) {
                this.id = item._id
                this.$router.push(`study?type=${this.topic}&id=${item._id}`)
            },
            getMDFile(item) {
                let url = item.url
                if (url) {
                    getStudyMDFile(url).then(md => {
                        // console.log(item)
                        
                        this.$store.commit('changeArticle', item)
                        this.htmlMD = md.data
                        // console.log("获取文件",  md);
                    })
                }

            },
            getArticles() {
                axios.get(`http://193.112.121.234/articles`)
                    .then((res) => {
                        console.table(res.data);
                        this.articles = res.data
                        this.id = this.$route.query.id
                        this.$store.commit('setStudyArticles', res.data)
                    });
            }

        },
        beforeCreate() {
            // console.log("router query", this.$route.query);
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