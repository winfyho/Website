<template>
    <div class="md-notes">

        <SliderBar :pager="pager" v-on:change-slider="changeSlider" />
        <Page :htmlMD="htmlMD" />
        
    </div>


</template>

<script>
    import SliderBar from "components/common/sliderbar/SliderBar.vue"
    import Page from "components/common/page/Page.vue"

    import { getStudyPager } from "network/study.js"
    import { getStudyMarkdown } from "network/study.js"



    export default {
        name: "MdNotes",
        components: {
            SliderBar,
            Page
        },
        data() {
            return {
                pager: [],
                mdContent: {},
                curSliderBar: "",
                htmlMD:``,  
            }
        },
        methods: {
            changeSlider(res) {
                // this.curSliderBar = res
                // console.log(this.curSliderBar)
                // getStudyMarkdown(this.curSliderBar).then(res => {
                //     this.mdContent = res.data
                //     console.table("获取的mdContent", res.data);

                // })

            }
        },
        created() {

            getStudyPager("markdown").then(pager => {
                console.log("Md侧边栏",pager);
                this.pager = pager
                
                getStudyMarkdown(`/markdown/${pager[0].path}`).then(md => {
                    this.htmlMD = md
                })
            })
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .md-notes{
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    .slider-bar {
        flex: 0 0 300px;
        border-right: 1px solid #ddd;
    }
</style>