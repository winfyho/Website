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

Vue.use(VueRouter)

const routes = [
    {
        path: '',
        redirect: '/admin'
    },
    {
        path: '/home',
        component: Home
    },
    {
        path: '/study',
        component: Study,
        children: studyRoutes
    },
    {
        path: '/profile',
        component: Profile,
    },
    {
        path: '/admin',
        component: Admin,
    },
    {
        path: '/tools',
        component: Tools
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/search',
        component: Search
    },
]

const router = new VueRouter({
    routes,
    mode: 'history'
})
export default router