import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from "../views/home/Home.vue"
// import Study from "../views/study/Study.vue"
// import Profile from "../views/profile/Profile.vue"
// import Search from "../views/search/Search.vue"

const Study = () => import("../views/study/Study.vue")
const Profile = () => import("../views/profile/Profile.vue")
const Search = () => import("../views/search/Search.vue")
const Admin = () => import("../views/admin/Admin.vue")
import Tools from "../views/tools/Tools.vue"
import About from "../views/about/About.vue"

import studyRoutes from "./study.js"

import {getLocalStorage} from "storage/localStorage.js"

Vue.use(VueRouter)

const routes = [
    {
        path: '/',

        redirect: '/home'
    },
    {
        path: '/home',
        meta: {
            title: "首页"
        },
        component: Home
    },
    {
        path: '/study',
        component: Study,
        children: studyRoutes,
        meta: {
            title: "前端文档"
        },
    },
    {
        path: '/profile',
        component: Profile,
        meta: {
            title: "足迹"
        },
    },
    {
        path: '/admin',
        component: Admin,
        meta: {
            title: "文章管理"
        },
        beforeEnter: (to, from, next) => {
            let user = getLocalStorage('user')
            console.log("管理",user)
            if(user){
                next()
            }else{
                next(false)
                alert("你还未登录")
            }
        }
    },
    {
        path: '/search',
        component: Search,
        meta: {
            title: "搜索结果"
        },
    },
    {
        path: '/tools',
        component: Tools
    },
    {
        path: '/about',
        component: About
    },

]

const router = new VueRouter({
    routes,
    mode: 'history'
})



export default router