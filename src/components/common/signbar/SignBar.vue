<template>
    <div class="sign-bar">

        <!-- <button v-if="!user" class="registe"  @click="handleEditor(true)">注册</button> -->


        <LoginEditor :show="showEditor" @sign="signSuccess" @switch="handleEditor" />

        <button v-if="user" class="user-infor">{{user.username}}</button>
        <button v-else class="login" @click="handleEditor(true)">登录</button>


        <UserInforBar class="user-infor-content" v-if="user" :user="user" @sign-out="signOut" />

    </div>


</template>

<script>
    import LoginEditor from "components/common/loginEditor/LoginEditor.vue"
    import UserInforBar from "./UserInforBar.vue"

    import { getLocalStorage, setLocalStorage } from "storage/localStorage.js"
    export default {
        name: "SignBar",
        components: {
            LoginEditor,
            UserInforBar
        },
        data(){
            return {
                showEditor:false,
                user:null
            }
        },
        created(){
            let user = getLocalStorage('user')
            this.user = user ? user : null
        },

        methods:{
            handleEditor(op){
                this.showEditor = op
            },
            signSuccess(user){
                console.log(user)
                this.user = user
                this.showEditor = false
            },
            signOut(){
                setLocalStorage('user',null)
                this.user = null
                alert("已退出")
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .sign-bar {
        position: relative;
        height: 100%;
        display: flex;
        align-items: center;
    }

    .sign-bar>button {
        margin-right: 10px;
        min-width: 65px;
    }

    .sign-bar .registe {
        background: #fff;
        color: #666;
        border: 1px solid #888;
    }
    .user-infor{
        background: #fff;
        color: #424242;
        font-size: 18px;
    }
    .sign-bar  .user-infor-content{
        display: none;
    }
    .sign-bar:hover  .user-infor-content{
        display: block;
    }
</style>