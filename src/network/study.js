import { request } from "./request.js"
import { getFileList } from "./file.js"
import axios from 'axios'

export class Article {
    constructor(article) {
        this._id = article._id || ''
        this.url = article.url || ''
        this.title = article.title || '文章标题'
        this.topic = article.topic || ''
        this.body = article.body || ''
        this.time = article.time || 0
        this.views = article.views || 0
        this.likes = article.likes || 0
        this.comments = article.comments || []
    }
    addArticleViews() {
        return new Promise((resolve, reject) => {   
            request({
                url: `/article/views?id=${this._id}&views=${this.views+1}`,
                method: "get",
            }).then((res) => {
                this.views += 1
                resolve(res)
            })
        })
    }
    addArticleLikes(){
        return new Promise((resolve,reject) => {
            request({
                url:`/article/likes?id=${this._id}&likes=${this.likes+1}`,
                method:"get",
            }).then((res) => {
                this.likes += 1
                resolve(res)
            })
        })
        
    }

    postComment(comment){
        return new Promise((resolve,reject) => {
            // console.log(comment);
            // request({
            //     url:"/comment/add",
            //     method:"post",
            //     data:comment
            // }).then((res) => {
            //     resolve(res)
            // })
        })       
    }
}

export function getStudyMDFile(url) {
    return new Promise((resolve, reject) => {

        axios.get(`${url}`).then((res) => {
            // console.log("请求md文件", url, res);
            resolve(res)
        }).catch(err => {
            reject(err)
        })

    })
}



