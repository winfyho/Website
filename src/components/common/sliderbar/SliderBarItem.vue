<template>
    <div class="slider-bar-item">
        <!-- <span class="icon">></span> -->
        <div class="text">
            <span class="title">{{title}}</span>
        </div>
        <div class="children">
            <span v-for="child in children" :class="{choosed:curChildName === child.title && active === true}"
                @click.stop="childClick(child)">{{child.title}}</span>
        </div>
    </div>


</template>

<script>
    export default {
        name: "SliderBarItem",
        props: {
            title: {
                type: String,
                default: "侧边栏标题"
            },
            children: {
                type: Array,
                default() {
                    return []
                }
            },
            active: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                curChildName: ""
            }
        },
        methods: {
            childClick(child) {
                this.curChildName = child.title
                console.log(this.curChildName);

                this.$emit("child-click", child)

            }
        }

    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .slider-bar-item {
        padding-bottom: 20px;
    }

    .slider-bar-item span {
        display: inline-block;
        height: 30px;
        line-height: 30px;
    }

    .slider-bar-item .icon {
        padding-right: 20px;
    }

    .slider-bar-item .text {
        color: #454545;
        font-weight: 600;
    }

    .slider-bar-item .text .title::after {
        content: '';
        display: block;
        width: 0%;
        height: 3px;
        background: var(--color-background);
        transition: .3s;
    }

    .active .text .title::after {
        width: 100%;

        /* border-bottom: 3px solid var(--color-background); */
    }

    .slider-bar-item .text:hover {
        /* border-bottom: 3px solid var(--color-background); */
        color: #999;

    }

    .slider-bar-item .children {
        box-sizing: border-box;
    }

    .slider-bar-item .children span {
        text-indent: 4em;
        font-size: 15px;
        color: #666;
    }

    .slider-bar-item .children span:hover {
        color: #999;
    }

    /* 自目录被选择 */
    .slider-bar-item .children span.choosed {
        font-weight: 600;
    }
</style>