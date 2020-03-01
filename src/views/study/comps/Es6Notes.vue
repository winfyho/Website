<template>
    <div class="es6">

        <SliderBar :pager="pager" 
        :curPagerIndex="curPagerIndex" 
        v-on:change-slider="changeSlider" />
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
                curPagerIndex:0,
                htmlMD:``,
            }
        },
        methods: {
            changeSlider(res) {
                console.log(res.name,"第",res.index);
                this.curPagerIndex = res.index
                this.curPath = `/markdown/${this.pager[this.curPagerIndex].path}`
                console.log(this.curPath);
                getStudyMarkdown(this.curPath).then(md => {
                    this.htmlMD = md
                })
                
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