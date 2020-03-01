<template>
    <div class="es6">

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
        name: "Es6Notes",
        components: {
            SliderBar,
            Page
        },
        data() {
            return {
                pager: {},
                htmlMD:``,
                curSliderBar: ""
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

            getStudyPager("es6").then(pager => {
                console.log("es6侧边栏", pager);
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
    .es6{
        display: flex;
        width: 100%;
        height: 100%;
        overflow: hidden;
    }
    
</style>