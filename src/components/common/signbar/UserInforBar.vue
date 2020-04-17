<template>
    <div class="user-infor-bar">

        <span class="username">用户名: {{user.username}}</span>
        <span class="password">密码: {{user.password}}</span>
        <span class="init-time">注册时间: {{initDate}}</span>

        <button class="btn-signout" @click="signOut">退出账号</button>


    </div>


</template>

<script>
    import { getDateObj } from "common/date.js"
    export default {
        name: "UserInforBar",
        props: {
            user: {
                type: Object,
                default: {}
            },
            show: {
                type: Boolean,
                default: false
            }
        },
        computed: {
            initDate() {
                return getDateObj(this.user.init_time).dateString
            }
        },
        methods: {
            signOut() {
                this.$emit("sign-out")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .user-infor-bar {
        position: absolute;
        top: 59px;
        left: -100px;
        width: 160px;
        background: #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, .4);
        z-index: 5000;
        padding: 15px;
        font-size: 14px;
        overflow: hidden;
        color: #888;
    }

    .user-infor-bar>span {
        display: block;
        height: 30px;
        line-height: 30px;
    }
    .user-infor-bar .btn-signout{
        margin-top: 10px;
    }
</style>