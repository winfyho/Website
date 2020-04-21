<template>
    <div class="study">


        <TabControl :tabs="tabs" :curBarName="topic" @bar-click="barClick" />

        <div class="tab-view">
            <SliderBar :catalogue="catalogue" :sliderBarIndex="sliderBarIndex" @sliderbar-click="sliderBarClick" />

            <Page :htmlMD="htmlMD" :curArticle="$store.state.curArticle" />
        </div>
    </div>


</template>

<script>
    import TabControl from "components/content/tabControl/TabControl.vue"
    import SliderBar from "components/common/sliderbar/SliderBar.vue"
    import Page from "components/common/page/Page.vue"
    import axios from "axios"

    import { request } from "network/request.js"

    import { getStudyMDFile, Article } from "network/study.js"
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
                    { title: "vue" },
                    { title: "tools" },
                    { title: "markdown" },
                ],
                sliderBarIndex: 0,
                htmlMD: ``,
                topic: '',
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
            topic: function (val) {
                // console.log(this.catalogue[0].title)
                this.id = this.catalogue[0]._id
                this.sliderBarIndex = 0
            },
            id: function (val, oldVal) {
                let result = {}
                this.catalogue.forEach((item, index) => {
                    if (item._id === val) {
                        result = item
                        this.sliderBarIndex = index
                    }
                })
                this.getMDFile(result)
            },
            $route: function (route) {
                // console.log(route)
                if(route.path !== '/study' || !route.query.id){
                    return  
                }
                
                const id = route.query.id
                const type = route.query.type
                this.id = id
                this.topic = type 
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
                        this.htmlMD = md.data || "# 找不到文件"
                    })
                }

            },
            getArticles() {
                request({
                    method: 'get',
                    url: '/article/all'
                }).then((articles) => {
                    this.topic = 'css3'
                    this.articles = articles
                    this.$store.commit('setStudyArticles', articles)
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