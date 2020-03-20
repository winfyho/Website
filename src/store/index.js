import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        curArticle:{
            comments:[]
        },
        studyArticles:[],
        results:[],
        count:6666666666
    },
    mutations:{
        changeArticle(state,article){
            state.curArticle = article
            // console.log("vuex curArticle",state.curArticle.title);
        },
        setStudyArticles(state,articles){
            state.studyArticles = articles
            // console.log("vuex - ",state.studyArticles.length);
        },
        setSearchResults(state,results){
            state.results = results
        }
    }
})

export default store