<template>
    <div class="toast" v-show="show" >

        <div class="toast-box">
            <i class="icon" :class="[icon]"></i>
            <span class="title">{{title}}</span>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'Toast',

        data() {
            return {
                show: false,
                icon: "success",
                title: "成功",
                duration: 1300
            }
        },
        methods: {
            showToast(option) {
                option = option || {}
                this.title = option.title || '成功'
                this.icon = option.icon || 'success'
                let duration = option.duration || 1500
                this.duration = duration
                this.show = true

                setTimeout(() => {
                    this.show = false
                    this.title = '成功'
                    this.icon = 'success'
                    this.duration = 1300
                }, duration);
            }
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .toast {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        /* background: rgba(0, 0, 0, .5); */
        font-size: 50px
    }

    .toast .toast-box {
        position: absolute;
        z-index: 999;
        left: 50%;
        top: 45%;
        transform: translateX(-50%) translateY(-50%);
        border-radius: 0.2em;
        width: 2em;
        height: 2.3em;
        color: #fff;
        text-align: center;
        background: rgba(0, 0, 0, .7);
    }

    .toast .toast-box .icon {
        position: absolute;
        top: 0.2em;
        left: 50%;
        transform: translateX(-50%);
        display: block;
        background: url("./icon/success.png") center center no-repeat;
        background-size: 100% 100%;
        width: 1.2em;
        height: 1.2em;
    }
    .toast .toast-box .success{
        background: url("./icon/success.png") center center no-repeat;
        background-size: 80% 85%;

    }
    .toast .toast-box .fail{
        background: url("./icon/fail.png") center center no-repeat;
        background-size: 80% 85%;

    }
    .toast .toast-box .loading{
        background: url("./icon/loading.png") center center no-repeat;
        background-size: 70% 70%;

    }
    .toast .toast-box .title {
        overflow: hidden;
        position: absolute;
        display: block;
        width: 100%;
        bottom: 0.90em;
        font-size: 0.35em;
        height: 1em;
        line-height: 1em;
    }
</style>