<template>
    <div class="md-notes">

        <!-- <SliderBar :pager="pager" v-on:change-slider="changeSlider" />
        <Page :mdContent="mdContent" /> -->

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
                pager: {},
                mdContent: {},
                curSliderBar: ""
            }
        },
        methods: {
            changeSlider(res) {
                this.curSliderBar = res
                console.log(this.curSliderBar)
                getStudyMarkdown(this.curSliderBar).then(res => {
                    this.mdContent = res.data
                    console.table("获取的mdContent", res.data);

                })

            }
        },
        created() {

            getStudyPager("css3").then(pager => {
                console.log("css侧边栏", pager);
                this.pager = pager

                // getStudyMarkdown(`/markdown/${pager[6].path}`).then(md => {
                //     this.htmlMD = md
                // })
            })
        },

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .md-notes {
        display: flex;
    }

    .slider-bar {
        flex: 0 0 300px;
    }
</style>